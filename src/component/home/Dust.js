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
      // border: "solid 1px black"
    },
    status: {
      display: "inline-block",
      color: "darkgray",
      fontSize: "11px",
      backgroundColor: "white",
      padding: "3px 10px", 
      borderRadius: "10px",
      float: "right",
    }
}));

function randomInt(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

export default function Dust() {
  const classes = useStyles();
  var [fineDustAmount, setFineDustAmount] = useState(randomInt(0, 200));
  var fineDustStatus = (fineDustAmount <= 30 ? "GOOD" : fineDustAmount <= 80 ? "NORMAL" : fineDustAmount <= 150 ? "BAD" : "VERY BAD");
  var [ultraFineDustAmount, setUltraFineDustAmount] = useState(randomInt(0, 100));
  var ultraFineDustStatus = (ultraFineDustAmount <= 15 ? "GOOD" : ultraFineDustAmount <= 35 ? "NORMAL" : ultraFineDustAmount <= 75 ? "BAD" : "VERY BAD");

  return (
    <div className={classes.container}>
      {/* <img src={dust} width="100%" alt="fine dust" /> */}
      <div className={classes.background}>
        <div>
          fine dust
          <div className={classes.status}>{fineDustStatus}</div>
          <DustBar amount={fineDustAmount} percentage={fineDustAmount/200} />
        </div>
        <br/>
        <div>
          ultra-fine dust
          <div className={classes.status}>{ultraFineDustStatus}</div>
          <DustBar amount={ultraFineDustAmount} percentage={ultraFineDustAmount/100}  />
        </div>
      </div>
    </div>
  )
}