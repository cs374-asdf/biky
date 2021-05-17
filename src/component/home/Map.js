import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import mapboxgl from 'mapbox-gl';

var fullRoute = [ 
  [37.49468356316903, 126.91462625155943],
  [37.49457548665683, 126.91466456325881],
  [37.4945003236157, 126.91467809668889], 
  [37.494409948906565, 126.91469501347642],
  [37.49436968291182, 126.91470290797731], 
  [37.49369203740101, 126.91484578727844], 
  [37.493628630563954, 126.91634996665469],
  [37.494331551409644, 126.91635767048872],
  [37.49434377606901, 126.91753635713798],
  [37.49440489929814, 126.9184608172214],
  [37.49367752962703, 126.91876897058253],
  [37.49314415408823, 126.91832564377637],
  [37.49274195991449, 126.91792170245459],
  [37.49234604790941, 126.91776329409315],
  [37.4920883897629, 126.91788210036424],
  [37.49202554617772, 126.91830980294021],
  [37.49193128070078, 126.91894343638609],
]

const useStyles = makeStyles({
    map: {
        position: "relative",
        width: "100%",
        height: "100%",
        textAlign: "center",
        display: "inline-block",
        // border: "solid 1px black"
    },
  });

mapboxgl.accessToken = 'pk.eyJ1IjoiYmFieWNyb2MiLCJhIjoiY2tvaW5rMWlpMDE3czJ3cWYyMXZkZmxidiJ9.8m_FmwtsgjCBUq2Jq9wVcg';

function swapColumns(array) {
  var newArray = [];
  const length = array.length;
  for(var i = 0; i < length; i++) {
    newArray.push([ array[i][1], array[i][0] ]);
  }
  return newArray;
}

export default function Map(props) {
  const classes = useStyles();
  var index = props.index;
  var isRiding = props.isRiding;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(fullRoute[0][1]);
  const [lat, setLat] = useState(fullRoute[0][0]);
  const [zoom, setZoom] = useState(15);
  const [route, setRoute] = useState(fullRoute.slice(0, 1));

  useEffect(() => {
    if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      });
      map.current.on('load', function () {
        map.current.addSource('route', {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'LineString',
              'coordinates': swapColumns(route)
            }
          }
        });
        map.current.addLayer({
          'id': 'route',
          'type': 'line',
          'source': 'route',
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#888',
            'line-width': 4
          }
        });

        map.current.addSource('pointer', {
          type: 'geojson',
          data: {
            "type": "FeatureCollection",
            "features": [{
              "type": "Feature",
              "properties": {},
              "geometry": {
                "type": "Point",
                "coordinates": [lng, lat]
              }
            }]
          }
        });
        map.current.addLayer({
          id: 'pointer',
          type: 'circle',
          source: 'pointer',
          paint: {
            'circle-radius': 5,
            'circle-color': '#FF0000',
            'circle-opacity': 0.8
          }
        });
      });
  });

  useEffect(() => {
    if(index >= fullRoute.length) index = fullRoute.length - 1;
    setLng(fullRoute[index][1]);
    setLat(fullRoute[index][0]);
    setRoute(fullRoute.slice(0, index+1));

    map.current.setCenter([lng, lat]);

    if(map.current.getSource('route')) {
      map.current.getSource('route').setData({
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": swapColumns(route)
        }
      });
    }

    if(map.current.getSource('pointer')) {
      map.current.getSource('pointer').setData({
        "type": "FeatureCollection",
        "features": [{
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": [lng, lat]
          }
        }]
      });
    }
  }, [index]);

  useEffect(() => {
    if(isRiding) {
      return;
    }
    props.saveRoute(swapColumns(route));
    setLng(fullRoute[0][1]);
    setLat(fullRoute[0][0]);
    setRoute(fullRoute.slice(0, 1));
  }, [isRiding])
  return (
    <div ref={mapContainer} className={classes.map}>

    </div>
  )
}