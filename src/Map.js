import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ReactMapGL, { Source, Layer } from "react-map-gl"
// import * as data from './data.json'

function Map() {

  
  const data = "https://raw.githubusercontent.com/Apoorve73/Test_Repo_1/main/data.json"

  const geojson = {
    "type": "Feature",
    "properties": {
      "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "red",
        "fill-opacity": 0.3,
        "Name ": "Jayanagar"
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [77.58828163146973, 12.940196651975233],
          [77.58772373199461, 12.938983710096016],
          [77.5880241394043, 12.938607278658088],
          [77.58686542510986, 12.937017895211905],
          [77.58828163146973, 12.93772893642669],
          [77.58978366851807, 12.936097721219154],
          [77.59102821350096, 12.936432330336554],
          [77.59235858917235, 12.936641460806978],
          [77.5935173034668, 12.936850591102077],
          [77.59411811828613, 12.936348678099293],
          [77.59334564208984, 12.936181373540586],
          [77.59283065795898, 12.931873242510983],
          [77.59480476379395, 12.931998723107322],
          [77.59652137756348, 12.93501023848781],
          [77.5987958908081, 12.934884759406064],
          [77.59943962097168, 12.937143373220621],
          [77.59780883789062, 12.938983710096016],
          [77.59725093841553, 12.940029349997813],
          [77.59682178497314, 12.943291718309542],
          [77.59497642517088, 12.943500843027449],
          [77.58828163146973, 12.940196651975233]
        ]
      ]
    }
  }

  const layerStyle = geojson.properties
      
  const [viewport, setViewport] = useState({
    latitude: 12.9716,
    longitude: 77.5946,
    zoom: 12,
    width: '100vw',
    height: '100vh'
  })

  return (
    <ReactMapGL {...viewport} 
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    mapStyle = "mapbox://styles/apoorve73/ckp5edico0zlh18m79qarlpx5"
    onViewportChange={viewport => {
      setViewport(viewport); // everytime we zoom in or out the value gets updated
    }}>

      {/* {data.features.map(place => (
        <div> */}
          <Source
          id = "new"
          type= "geojson"
          data = {geojson}
          >
          <Layer
          id = {geojson.properties.Name}
          type= "fill"
          source = "new"
          paint= {{
            "fill-color": layerStyle.fill,
            "fill-opacity": layerStyle['fill-opacity']
          }}
          /> 
          </Source>

          {/* </div>
        ))} */}
    </ReactMapGL>
    );
}
// 9306750422
export default Map;
