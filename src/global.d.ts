/// <reference types="react-bmapgl/types/bmapgl" />

 

declare namespace BMapGL {
  /**
   * @link https://lbsyun.baidu.com/index.php?title=district
   */
  export class DistrictLayer {
    constructor(options: {
      name: string[];
      kind?: number;
      strokeColor?: string;
      strokeOpacity?: number;
      fillColor?: string;
    });
  }

  export interface Map {
    addDistrictLayer(layer: DistrictLayer): void;
  }
}
