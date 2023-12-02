/// <reference types="react-bmapgl/types/bmapgl" />

// docs: https://mapv.baidu.com/gl/docs/index.html
// You can send docs into ChatGPT to generate typescript definitions

/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ViewOptions {
  map: BMapGL.Map;
  mapType?: 'bmap' | 'blank' | 'cesium';
  effects?: Array<any>; // The specific effect type can replace 'any' if available
}

/**
 * @link https://mapv.baidu.com/gl/docs/View.html
 */
export class View {
  constructor(options: ViewOptions);
  addLayer(layer: Layer): void;
  removeLayer(layer: Layer): void;
  removeAllLayers(): void;
  getAllLayers(): Layer[];
  getAllThreeLayers(): ThreeLayer[];
  hide(): void;
  show(): void;
  hideLayer(layer: Layer): void;
  showLayer(layer: Layer): void;
  destroy(): void;
}

/**
 * @link https://mapv.baidu.com/gl/docs/PointLayer.html
 * @link https://mapv.baidu.com/gl/docs/Pick.html
 */
export interface PointLayerOptions {
  color?: string;
  shape?: 'circle' | 'square';
  blend?: 'default' | 'normal' | 'lighter' | 'deeper' | string[];
  size?: number;
  unit?: 'px' | 'm';
  borderWidth?: number;
  borderColor?: string;

  data?: DataPoint[];

  enablePicked?: boolean;
  selectedIndex?: number;
  selectedColor?: string;
  autoSelect?: boolean;
  onClick?: (e: any) => void;
  onDblClick?: (e: any) => void;
  onRightClick?: (e: any) => void;
  onMousemove?: (e: any) => void;
}

export class Layer {
  setData(data: any[]): void;
}

export class PointLayer extends Layer {
  constructor(options?: PointLayerOptions);
  setOptions(options: PointLayerOptions): void;
  setData(data: DataPoint[]): void;

  pick(...e: any): void;
}

export interface Geometry {
  type: 'Point';
  coordinates: [number, number];
}

export interface DataPoint {
  geometry: Geometry;
}

export class ThreeLayer extends Layer {

}
