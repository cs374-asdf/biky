import { Icon } from "@iconify/react";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import oncomingTaxi from "@iconify-icons/twemoji/oncoming-taxi";

const taxi = "/images/home/metaphor_taxi.png";

const useStyles = makeStyles((theme) => ({
  background: {
    position: 'relative',
    // background: 'linear-gradient(45deg, #A0BFE3, #F0A2B0)',
    borderRadius: '10px',
    padding: '10px',
  },
  img: {
    display: 'inline-block',
    // border: "solid 1px black",
    fontSize: 60,
  },
  text: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'inline-block',
    // color: 'white',
    // fontSize: "15px",
    // fontWeight: "bold",
    // margin: "0 auto",
    // border: "solid 1px black",
    width: 'calc(85% - 20px)',
    // paddingLeft: "10px",
    textAlign: 'center',
  },
}))

export default function MetaphorTaxi(props) {
  const classes = useStyles()
  var amount = props.amount


  return (
    <div className={classes.background}>
      <Icon icon={oncomingTaxi} className={classes.img} />
      <div className={classes.text}>
        You saved {(amount * 1000).toFixed(0)} won!
      </div>
    </div>
  );
}
