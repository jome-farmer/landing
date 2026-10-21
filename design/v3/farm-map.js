// Live farm map: satellite imagery + real parcel outlines (OpenStreetMap) coloured by a data layer, with live readings.
// Plain ES module so design/v3 mocks and the Next app share it. Pass in the maplibre-gl module.
import { FARM_CENTER, FIELDS } from './fields.js';

const TILES = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
export const FARM = { center: FARM_CENTER, zoom: 14.55, pitch: 45, bearing: -12 };
export const COLORS = { good: '#3ddc72', moderate: '#ffb02e', low: '#ff4d3d', irrigating: '#3bbcf0', scheduled: '#ffb02e', idle: '#8fa196' };
export const LAYERS = ['moisture', 'irrigation', 'nutrients'];
export const NUTRIENTS = ['N', 'P', 'K'];
export const statusOf = (v) => (v >= 60 ? 'good' : v >= 45 ? 'moderate' : 'low');
export const irrigationOf = (f) => (f.irrigating ? 'irrigating' : f.moisture < 55 ? 'scheduled' : 'idle');

const START = [62, 48, 73, 70, 55, 41, 67, 38, 58, 66, 52, 44];
const rnd = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

export function buildFields() {
  return FIELDS.map((f, i) => ({
    ...f, moisture: START[i % START.length], irrigating: START[i % START.length] < 45, progress: rnd(10, 80),
    nutrients: { N: rnd(30, 85), P: rnd(35, 85), K: rnd(30, 85) },
  }));
}

/** colour class + chip text for a field in the given layer */
export function view(f, layer, nutrient, labels = {}) {
  if (layer === 'irrigation') { const s = irrigationOf(f); return { status: s, text: s === 'irrigating' ? `${Math.round(f.progress)}%` : (labels[s] ?? s) }; }
  if (layer === 'nutrients') { const v = f.nutrients[nutrient]; return { status: statusOf(v), text: `${nutrient} ${Math.round(v)}` }; }
  return { status: statusOf(f.moisture), text: `${Math.round(f.moisture)}%` };
}

const geojson = (fields, layer, nutrient, selected) => ({
  type: 'FeatureCollection',
  features: fields.map((f) => ({ type: 'Feature', id: f.id, properties: { id: f.id, status: view(f, layer, nutrient).status, sel: f.id === selected ? 1 : 0 }, geometry: { type: 'Polygon', coordinates: [f.ring] } })),
});
const byStatus = ['match', ['get', 'status'], 'good', COLORS.good, 'moderate', COLORS.moderate, 'low', COLORS.low, 'irrigating', COLORS.irrigating, 'scheduled', COLORS.scheduled, COLORS.idle];

/**
 * Mounts the map in `el`. Returns a controller { setLayer, focus, destroy, fields }.
 * opts: onTick({avg, series, fields}), onSelect(id), fieldLabel, labels:{irrigating,scheduled,idle}, intervalMs
 */
export function mountFarmMap(el, maplibregl, { onTick, onSelect, fieldLabel = 'Field', labels = {}, intervalMs = 2500 } = {}) {
  const fields = buildFields();
  let layer = 'moisture', nutrient = 'N', selected = 0;
  const series = [];
  const avg = () => fields.reduce((a, f) => a + f.moisture, 0) / fields.length;
  const push = () => { series.push(avg()); if (series.length > 9) series.shift(); };
  for (let i = 0; i < 9; i++) push();

  const map = new maplibregl.Map({
    container: el, center: FARM.center, zoom: FARM.zoom, pitch: FARM.pitch, bearing: FARM.bearing,
    interactive: false, canvasContextAttributes: { preserveDrawingBuffer: true }, fadeDuration: 0,
    attributionControl: { compact: false, customAttribution: 'Imagery © Esri · Parcels © OpenStreetMap' },
    style: { version: 8, sources: { sat: { type: 'raster', tiles: [TILES], tileSize: 256, maxzoom: 19 } },
      layers: [{ id: 'sat', type: 'raster', source: 'sat', paint: { 'raster-saturation': 0.25, 'raster-brightness-max': 1, 'raster-contrast': 0.1 } }] },
  });
  // frame all parcels at any container size
  const lngs = fields.flatMap((f) => f.ring.map((p) => p[0])), lats = fields.flatMap((f) => f.ring.map((p) => p[1]));
  const bounds = [[Math.min(...lngs), Math.min(...lats)], [Math.max(...lngs), Math.max(...lats)]];
  const home = () => { const c = map.cameraForBounds(bounds, { padding: 12, bearing: FARM.bearing }); return { center: c.center, zoom: c.zoom + 0.9, bearing: FARM.bearing, pitch: FARM.pitch }; };
  const fit = () => map.jumpTo(home());
  map.on('resize', () => { if (!selected) fit(); });
  el.__map = map;
  map.on('error', (e) => console.warn('farm-map:', e.error?.message || e));

  const chips = new Map(), markers = [];

  function render() {
    map.getSource('fields')?.setData(geojson(fields, layer, nutrient, selected));
    for (const f of fields) {
      const chip = chips.get(f.id); if (!chip) continue;
      const v = view(f, layer, nutrient, labels);
      chip.classList.remove('good', 'moderate', 'low', 'irrigating', 'scheduled', 'idle');
      chip.classList.add(v.status);
      chip.classList.toggle('sel', f.id === selected);
      chip.querySelector('b').textContent = v.text;
    }
    onTick?.({ avg: avg(), series: [...series], fields: fields.map((f) => ({ ...f, nutrients: { ...f.nutrients } })), layer, nutrient, selected });
  }

  map.on('load', () => {
    fit();
    map.addSource('fields', { type: 'geojson', data: geojson(fields, layer, nutrient, selected) });
    map.addLayer({ id: 'fill', type: 'fill', source: 'fields', paint: { 'fill-color': byStatus, 'fill-opacity': ['case', ['==', ['get', 'sel'], 1], 0.6, 0.4] } });
    map.addLayer({ id: 'glow', type: 'line', source: 'fields', paint: { 'line-color': byStatus, 'line-width': 7, 'line-blur': 5, 'line-opacity': 0.55 } });
    map.addLayer({ id: 'edge', type: 'line', source: 'fields', paint: { 'line-color': byStatus, 'line-width': ['case', ['==', ['get', 'sel'], 1], 3.2, 1.8] } });
    // sensor network: chain zone centres left to right
    const order = [...fields].sort((a, b) => a.center[0] - b.center[0]);
    map.addSource('net', { type: 'geojson', data: { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: order.map((f) => f.center) } } });
    map.addLayer({ id: 'net', type: 'line', source: 'net', paint: { 'line-color': '#7df3ff', 'line-width': 1.2, 'line-opacity': 0.7, 'line-dasharray': [2, 2] } });

    for (const f of fields) {
      const chip = document.createElement('div');
      chip.classList.add('fm-chip');
      chip.innerHTML = `<small>${fieldLabel} ${f.id}</small><b></b>`;
      chip.addEventListener('click', () => focus(f.id));
      chips.set(f.id, chip);
      markers.push(new maplibregl.Marker({ element: chip, anchor: 'center' }).setLngLat(f.center).addTo(map));
    }
    for (const [i, kind] of [[1, 'leaf'], [4, 'drop'], [7, 'leaf'], [10, 'drop']]) {
      const pin = document.createElement('div');
      pin.classList.add('fm-pin', kind);
      markers.push(new maplibregl.Marker({ element: pin, anchor: 'bottom', offset: [22, -4] }).setLngLat(fields[i].center).addTo(map));
    }
    render();
  });

  function focus(id) {
    selected = id === selected ? 0 : id;
    const f = fields.find((x) => x.id === selected);
    if (f) map.easeTo({ center: f.center, zoom: 16.4, duration: 900 });
    else map.easeTo({ ...home(), duration: 900 });
    onSelect?.(selected);
    render();
  }

  // live simulation: irrigating zones gain moisture, dry ones lose it; nutrients wander
  const timer = setInterval(() => {
    for (const f of fields) {
      f.moisture = clamp(f.moisture + (f.irrigating ? rnd(0.3, 1.6) : rnd(-1.4, 0.3)), 28, 88);
      f.progress = f.irrigating ? Math.min(100, f.progress + rnd(2, 6)) : f.progress;
      if (f.irrigating && (f.moisture > 68 || f.progress >= 100)) { f.irrigating = false; f.progress = 0; }
      else if (!f.irrigating && f.moisture < 43) { f.irrigating = true; f.progress = rnd(5, 20); }
      for (const k of NUTRIENTS) f.nutrients[k] = clamp(f.nutrients[k] + rnd(-1.2, 1.2), 15, 95);
    }
    push();
    render();
  }, intervalMs);

  return {
    fields,
    setLayer(l, n = nutrient) { layer = l; nutrient = n; render(); },
    focus,
    resize() { map.resize(); },
    destroy() { clearInterval(timer); markers.forEach((m) => m.remove()); map.remove(); },
  };
}
