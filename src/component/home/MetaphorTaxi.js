import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import taxi from '../../image/home/metaphor_taxi.png'

const useStyles = makeStyles(theme => ({
    background: {
        position: "relative",
        backgroundColor: "pink",
        borderRadius: "10px",
        padding: "10px"
    },
    img: {
        display: "inline-block",
        // border: "solid 1px black",
        width: "15%",
    },
    text: {
        display: "inline-block",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        margin: "0 auto",
        // border: "solid 1px black",
        width: "calc(85% - 20px)",
    }
}));

export default function MetaphorTaxi(props) {
    const classes = useStyles();
    var amount = props.amount;

    return (
        <div className={classes.background}>
            <img src={taxi} alt="" className={classes.img} />
            <div className={classes.text}>You saved {amount*3000} won!</div>
        </div>
    )
}