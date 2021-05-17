import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const burger = '/images/home/metaphor_burger.png'

const useStyles = makeStyles(theme => ({
    background: {
        position: "relative",
        backgroundColor: "orange",
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

export default function MetaphorBurger(props) {
    const classes = useStyles();
    var amount = props.amount;

    return (
        <div className={classes.background}>
            <img src={burger} alt="burger" className={classes.img} />
            <div className={classes.text}>You skipped {amount*2} burgers!</div>
        </div>
    )
}