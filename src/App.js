import React, { useState } from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';
import Draw from 'react-map-gl-draw';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';


export default function App() {

const [data, setData] = useState({
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [-122.41411987304815, 37.792209769935084],
        type: 'Point'
      }
    }
  ]
});

return (
<>
  <MapGL
    style={{ width: '100%', height: '400px' }}
    mapStyle='mapbox://styles/mapbox/light-v9'
    accessToken="pk.eyJ1IjoiYXBvb3J2ZTczIiwiYSI6ImNrb3RxYW1wYjBlMDgycW13cnU4MHphYzgifQ.zDI-mD9HRgQ78sJZsTb6vw"
    latitude={37.78}
    longitude={-122.41}
    zoom={11}
  >
    <Draw data={data} onChange={(data) => setData(data)} />
  </MapGL>
  <pre>{JSON.stringify(data, null, 2)}</pre>
</>
)
}


export function renderToDom(container) {
  render(<App />, container);
}