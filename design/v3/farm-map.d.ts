export type Field = { id: number; osm: number; type: string; ha: number; center: [number, number]; ring: [number, number][]; moisture: number; irrigating: boolean; progress: number; nutrients: { N: number; P: number; K: number } };
export type Layer = 'moisture' | 'irrigation' | 'nutrients';
export type Nutrient = 'N' | 'P' | 'K';
export type Tick = { avg: number; series: number[]; fields: Field[]; layer: Layer; nutrient: Nutrient; selected: number };
export const FARM: { center: [number, number]; zoom: number; pitch: number; bearing: number };
export const COLORS: Record<'good' | 'moderate' | 'low' | 'irrigating' | 'scheduled' | 'idle', string>;
export const LAYERS: Layer[];
export const NUTRIENTS: Nutrient[];
export function statusOf(v: number): 'good' | 'moderate' | 'low';
export function irrigationOf(f: Field): 'irrigating' | 'scheduled' | 'idle';
export function mountFarmMap(el: HTMLElement, maplibregl: unknown, opts?: {
  onTick?: (t: Tick) => void; onSelect?: (id: number) => void; fieldLabel?: string; labels?: Record<string, string>; intervalMs?: number;
}): { fields: Field[]; setLayer(l: Layer, n?: Nutrient): void; focus(id: number): void; resize(): void; destroy(): void };
