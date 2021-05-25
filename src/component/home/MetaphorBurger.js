import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@iconify/react";
import hamburgerIcon from "@iconify-icons/twemoji/hamburger"; // 햄버거

const burger = "/images/home/metaphor_burger.png";

const useStyles = makeStyles((theme) => ({
  background: {
    position: "relative",
    background: "linear-gradient(45deg, #EED28B, #DB7E61)",
    borderRadius: "10px",
    padding: "10px",
  },
  img: {
    display: "inline-block",
    // border: "solid 1px black",
    fontSize: 60,
  },
  text: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    display: "inline-block",
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    // border: "solid 1px black",
    width: "calc(85% - 20px)",
    paddingLeft: "10px",
  },
}));

export default function MetaphorBurger(props) {
  const classes = useStyles();
  var amount = props.amount;

  return (
    <div className={classes.background}>
      <Icon icon={hamburgerIcon} className={classes.img} />
      <div className={classes.text}>
        You skipped {(amount * 0.1).toFixed(2)} burgers!
      </div>
    </div>
  );
}
