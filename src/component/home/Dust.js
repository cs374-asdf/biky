import React, { useState } from 'react';

import { DustBar } from './';
import { makeStyles } from '@material-ui/core/styles';

const dust = '/images/home/dust.png'

const useStyles = makeStyles(theme => ({
    container: {
      position: "relative",
      width: "calc(50% - 15px)",
      height: "calc(100% - 40px)",
      padding: "10px",
      paddingLeft: "5px",
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
      fontWeight: "bold",
      fontSize: "12px",
      // border: "solid 1px black"
    },
    text: {
      position: "relative",
      display: "inline-block",
      margin: "2px"
    },
    status: {
      position: "absolute",
      right: "10px",
      display: "inline-block",
      color: "darkgray",
      fontSize: "10px",
      backgroundColor: "white",
      padding: "3px 10px", 
      borderRadius: "10px",
    }
}));

function randomInt(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

export default function Dust({ fineDust, ultraFineDust}) {
  const classes = useStyles();
  var [fineDustAmount, setFineDustAmount] = useState(fineDust === undefined || fineDust === 0 ? randomInt(0, 200) : fineDust);
  var fineDustStatus = (fineDustAmount <= 30 ? "GOOD" : fineDustAmount <= 80 ? "NORMAL" : fineDustAmount <= 150 ? "BAD" : "VERY BAD");
  var [ultraFineDustAmount, setUltraFineDustAmount] = useState(ultraFineDust === undefined || ultraFineDust === 0 ? randomInt(0, 100) : ultraFineDust);
  var ultraFineDustStatus = (ultraFineDustAmount <= 15 ? "GOOD" : ultraFineDustAmount <= 35 ? "NORMAL" : ultraFineDustAmount <= 75 ? "BAD" : "VERY BAD");

  return (
    <div className={classes.container}>
      {/* <img src={dust} width="100%" alt="fine dust" /> */}
      <div className={classes.background}>
        <div>
          <div className={classes.text}>fine dust</div>
          <div className={classes.status}>{fineDustStatus}</div>
          <DustBar amount={fineDustAmount} percentage={fineDustAmount/200} />
        </div>
        <br/>
        <div>
          <div className={classes.text}>ultra-fine dust</div>
          <div className={classes.status}>{ultraFineDustStatus}</div>
          <DustBar amount={ultraFineDustAmount} percentage={ultraFineDustAmount/100}  />
        </div>
      </div>
    </div>
  )
}