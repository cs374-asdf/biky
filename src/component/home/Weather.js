import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

const sunny = '/images/home/weather_sunny.png'
const cloudy = '/images/home/weather_cloudy.png'
const rainy = '/images/home/weather_rainy.png'

const useStyles = makeStyles(theme => ({
  container: {
    position: "relative",
    width: "calc(50% - 15px)",
    height: "calc(100% - 40px)",
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
    color: "black",
    fontWeight: "bold",
    fontSize: "15px",
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

export default function Weather(props) {
  const classes = useStyles();
  // const weatherTypes = ["sunny", "cloudy", "rainy"];
  // var [currentWeather, setCurrentWeather] = useState(weatherTypes[0]);
  // var [currentWeather, setCurrentWeather] = useState(randomInt(1, weatherTypes.length));
  // console.log(`currentWeather: ${currentWeather}`)

  const currentWeather = props.weather;

  var style = (currentWeather === "sunny" ? { color: "black", backgroundSize: "100% 100%", backgroundImage: `url(${process.env.PUBLIC_URL + sunny})` } : currentWeather === "cloudy" ? { color: "black", backgroundSize: "100% 100%", backgroundImage: `url(${process.env.PUBLIC_URL + cloudy})` } : { color: "black", backgroundSize: "100% 100%", backgroundImage: `url(${process.env.PUBLIC_URL + rainy})` });
  var weather = currentWeather;
  var [temperature, setTemperature] = useState(
    props.temperature === undefined || props.temperature === 0 ?
      currentWeather === "sunny" ? randomInt(20, 30) : currentWeather === "cloudy" ? randomInt(15, 25) : randomInt(10, 20)
    : props.temperature
  );

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