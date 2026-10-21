'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import { mountFarmMap, type Layer, type Nutrient, type Tick } from '../design/v3/farm-map.js';

type Props = {
  layer: Layer; nutrient: Nutrient; fieldLabel: string; labels: Record<string, string>;
  onTick: (t: Tick) => void; onSelect: (id: number) => void;
};
export type FarmMapHandle = { focus(id: number): void; resize(): void };

// Live satellite farm map; all behaviour lives in design/v3/farm-map.js (shared with the design mocks).
const FarmMap = forwardRef<FarmMapHandle, Props>(function FarmMap({ layer, nutrient, fieldLabel, labels, onTick, onSelect }, handle) {
  const el = useRef<HTMLDivElement>(null);
  const ctrl = useRef<ReturnType<typeof mountFarmMap>>(undefined);
  const cb = useRef({ onTick, onSelect });
  cb.current = { onTick, onSelect };
  const state = useRef({ layer, nutrient });
  state.current = { layer, nutrient };

  useImperativeHandle(handle, () => ({ focus: (id) => ctrl.current?.focus(id), resize: () => ctrl.current?.resize() }));

  useEffect(() => {
    let dead = false;
    import('maplibre-gl').then((ml) => {
      if (dead || !el.current) return;
      ml.setWorkerUrl('/maplibre/maplibre-gl-worker.mjs');
      ctrl.current = mountFarmMap(el.current, ml, { fieldLabel, labels, onTick: (t) => cb.current.onTick(t), onSelect: (id) => cb.current.onSelect(id) });
      ctrl.current.setLayer(state.current.layer, state.current.nutrient);
    });
    return () => { dead = true; ctrl.current?.destroy(); ctrl.current = undefined; };
  }, [fieldLabel, labels]);

  useEffect(() => { ctrl.current?.setLayer(layer, nutrient); }, [layer, nutrient]);

  return <div ref={el} className="hs-map" dir="ltr" />;
});
export default FarmMap;
