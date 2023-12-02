import { useContext, useEffect } from 'react';
import {Map} from 'react-bmapgl';
import {MapContext} from 'react-bmapgl/dist/Map/Map';
import * as mapvgl from 'mapvgl';

function useMapContext() {
  return useContext(MapContext);
}

function CustomDistrictLayer() {
  const {map} = useMapContext();
  useEffect(() => {
    if (!map) {
      return;
    }
    const districtLayer = new BMapGL.DistrictLayer({
      name: ['北京市'],
    });
    map.addDistrictLayer(districtLayer);
    return () => map.removeDistrictLayer(districtLayer);
  }, [map]);

  return null;
}

function CustomMapVGLLayer() {
  const {map} = useMapContext();
  useEffect(() => {
    if (!map) {
      return;
    }
    const view = new mapvgl.View({map});
    const layer = new mapvgl.PointLayer({
      color: '#E91E63',
      shape: 'circle', // 默认为圆形，可传square改为正方形
      blend: 'lighter',
      size: 20,
      data: [{
        geometry: {
          type: 'Point',
          coordinates: [116.402544, 39.928216]
        }
      }]
  });
  view.addLayer(layer);
  return () => view.destroy();
  }, [map]);

  return null;
}


function App() {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      {/* @ts-expect-error children does not exist on type Map */}
      <Map style={{width: '100%', height: '100%'}}
        center={new BMapGL.Point(116.402544, 39.928216)}
        zoom={11}
        enableDoubleClickZoom
        enableDragging
        enableScrollWheelZoom
      >
        <CustomDistrictLayer />
        <CustomMapVGLLayer />
      </Map>
    </div>
  )
}

export default App
