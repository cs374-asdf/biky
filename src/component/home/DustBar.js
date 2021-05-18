import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    bar: {
        position: "relative",
        width: "100%",
        height: "10px",
        backgroundColor: "white",
        borderRadius: "10px",
        marginTop: "10px",
        // border: "solid 1px black"
    },
    slider: {
      position: "absolute",
      top: "5px",
      transform: "translateY(-50%)",
      width: "25px",
      height: "15px",
      backgroundColor: "darkgray",
      borderRadius: "10px",
      color: "white",
      textAlign: "center",
      fontSize: "11px",
      fontWeight: "bold",
      border: "solid 2px white",
    },
}));

export default function DustBar(props) {
  const classes = useStyles();
  var amount = props.amount;
  var percentage = props.percentage;

  return (
    <div className={classes.bar}>
        <div className={classes.slider} style={{ left: `calc(calc(100% - 29px) * ${percentage}` }}>{amount}</div>
    </div>
  )
}