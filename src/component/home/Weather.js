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
}));

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getImgURL(weather) {
  return `${process.env.PUBLIC_URL}/images/home/weather_${weather}.png`
}

function getTemperature(weather) {
  if (weather === 'sunny')
    return randomInt(20, 30)
  else if (weather === 'cloudy')
    return randomInt(15, 25)
  else if (weather === 'rainy')
    return randomInt(10, 20)
  return randomInt(0, 30)
}



export default function Weather({weather, temperature}) {
  const classes = useStyles();

  const style = { 
    color: "black", 
    backgroundSize: "100% 100%", 
    backgroundImage: `url(${getImgURL(weather)}`
  }

  // const temperature = getTemperature(weather)

  if (weather === 'loading')
    return (
      <div className={classes.container}>
        <div className={classes.background}>
          Loading...
        </div>
      </div>
    )

  return (
    <div className={classes.container}>
      <div className={classes.background} style={style}>
        {weather} <br />
        {temperature ? temperature : getTemperature(weather)}&#8451;
      </div>
    </div>
  )
}