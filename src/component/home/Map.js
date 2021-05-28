import React, { useEffect, useRef, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import mapboxgl from 'mapbox-gl';

import { routeStart, routeOri, routeEnd } from "../../data/route"

const fullRoute = routeEnd;

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

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API

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
  var index = parseInt(props.index);
  // console.log(`index ${index}`)
  var isRiding = props.isRiding;

  var mode = props.mode;

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
    if(mode === "e11s") {
      setLng(routeStart[routeStart.length - 1][1]);
      setLat(routeStart[routeStart.length - 1][0]);
      setRoute(routeStart);
    } else if(mode === "ori") {
      setLng(routeOri[routeOri.length - 1][1]);
      setLat(routeOri[routeOri.length - 1][0]);
      setRoute(routeOri);
    } else if(mode === "e11e") {
      setLng(routeEnd[routeEnd.length - 1][1]);
      setLat(routeEnd[routeEnd.length - 1][0]);
      setRoute(routeEnd);
    } else {
      if(index >= fullRoute.length) {
        // index = (index - 8) % 18 + 8;
        index = fullRoute.length - 1;
      }
      // console.log(index)
      setLng(fullRoute[index][1]);
      setLat(fullRoute[index][0]);
      setRoute(route => [...route, fullRoute[index]]);
    }

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
  }, [index, mode]);

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