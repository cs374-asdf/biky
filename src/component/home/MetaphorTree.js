import { Icon } from "@iconify/react";
import React from "react";
import deciduousTree from "@iconify-icons/twemoji/deciduous-tree"; // 나무
import { makeStyles } from "@material-ui/core/styles";

const tree = "/images/home/metaphor_tree.png";

const useStyles = makeStyles((theme) => ({
  background: {

    position: 'relative',
    // background: 'linear-gradient(45deg, #73A15D, #94C25A)',
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
    // fontSize: '15px',
    // fontWeight: 'bold',
    // margin: '0 auto',
    // border: "solid 1px black",
    width: 'calc(85% - 20px)',
    // paddingLeft: '10px',
    textAlign: 'center',
  },
}))

export default function MetaphorTree(props) {
  const classes = useStyles()
  var amount = props.amount


  return (
    <div className={classes.background}>
      <Icon icon={deciduousTree} className={classes.img} />
      <div className={classes.text}>
        You planted {(amount * 0.05).toFixed(2)} trees!
      </div>
    </div>
  );
}
