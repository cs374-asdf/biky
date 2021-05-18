import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import burger from '../../image/home/metaphor_burger.png'

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
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        display: "inline-block",
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
        // border: "solid 1px black",
        width: "calc(85% - 20px)",
        paddingLeft: "10px"
    }
}));

export default function MetaphorBurger(props) {
    const classes = useStyles();
    var amount = props.amount;

    return (
        <div className={classes.background}>
            <img src={burger} alt="" className={classes.img} />
            <div className={classes.text}>You skipped {amount*2} burgers!</div>
        </div>
    )
}