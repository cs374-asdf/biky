import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import mapboxgl from "mapbox-gl";

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

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmFieWNyb2MiLCJhIjoiY2tvaW5rMWlpMDE3czJ3cWYyMXZkZmxidiJ9.8m_FmwtsgjCBUq2Jq9wVcg";

export default function StaticMap(props) {
  const classes = useStyles();
  var route = props.route ? props.route : [];
  var zoom = props.zoom ? props.zoom : 15;
  var width = props.width ? props.width : "100%";
  var height = props.height ? props.height : "300px";
  var length = route.length;
  var startCoordinates = route[0];
  var endCoordinates = route[length - 1];

  // console.log(route)
  const mapContainer = useRef(null);
  console.log(mapContainer.current);

  const map = new mapboxgl.Map({
    container: mapContainer.current,
    style: "mapbox://styles/mapbox/streets-v11",
    center: endCoordinates,
    zoom: zoom,
  });

  map.on("load", function () {
    map.addSource("route", {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: route,
        },
      },
    });
    map.addLayer({
      id: "route",
      type: "line",
      source: "route",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#888",
        "line-width": 4,
      },
    });

    map.addSource("start", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: startCoordinates,
            },
          },
        ],
      },
    });
    map.addLayer({
      id: "start",
      type: "circle",
      source: "start",
      paint: {
        "circle-radius": 5,
        "circle-color": "#0000FF",
        "circle-opacity": 1,
      },
    });

    map.addSource("end", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: endCoordinates,
            },
          },
        ],
      },
    });
    map.addLayer({
      id: "end",
      type: "circle",
      source: "end",
      paint: {
        "circle-radius": 5,
        "circle-color": "#FF0000",
        "circle-opacity": 1,
      },
    });
  });
  return (
    <div style={{ width: width, height: height }}>
      <div ref={mapContainer} className={classes.map} />
    </div>
  );
}
