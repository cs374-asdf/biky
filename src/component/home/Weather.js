import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

const cloudy = '/images/home/weather_cloudy.png'

const useStyles = makeStyles(theme => ({
  container: {
    position: "relative",
    width: "calc(50% - 15px)",
    height: "110px",
    padding: "10px",
    paddingRight: "5px",
    display: "inline-block",
    // border: "solid 1px black",
    verticalAlign: "top",
  },
  background: {
    position: "relative",
    width: "calc(100% - 20px)",
    height: "100%",
    backgroundColor: "darkgray",
    borderRadius: "10px",
    padding: "10px",
    color: "white",
    fontWeight: "bold"
    // border: "solid 1px black"
  },
  status: {
    display: "inline-block",
    color: "darkgray",
    fontSize: "12px",
    backgroundColor: "white",
    padding: "3px 10px",
    borderRadius: "10px",
    float: "right",
  }
}));

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Weather() {
  const classes = useStyles();
  const weatherTypes = ["sunny", "cloudy", "rainy"];
  // var [currentWeather, setCurrentWeather] = useState(weatherTypes[0]);
  var [currentWeather, setCurrentWeather] = useState(randomInt(1, weatherTypes.length));
  console.log(`currentWeather: ${currentWeather}`)

  var style = (currentWeather === 1 ? { backgroundColor: "yellow", color: "black" } : currentWeather === 2 ? { backgroundColor: "lightblue" } : { backgroundColor: "darkblue" });
  var weather = (currentWeather === 1 ? "sunny" : currentWeather === 2 ? "cloudy" : "rainy");
  var [temperature, setTemperature] = useState(currentWeather === 1 ? randomInt(20, 30) : currentWeather === 2 ? randomInt(15, 25) : randomInt(10, 20));

  return (
    <div className={classes.container}>
      {/* <img src={process.env.PUBLIC_URL +currentWeather} width="100%" alt="" /> */}
      <div className={classes.background} style={style}>
        {weather} <br />
        {temperature}&#8451;
      </div>
    </div>
  )
}