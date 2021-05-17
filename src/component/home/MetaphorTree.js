import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const tree = '/images/home/metaphor_tree.png'

const useStyles = makeStyles(theme => ({
    background: {
        position: "relative",
        backgroundColor: "green",
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

export default function MetaphorTree(props) {
    const classes = useStyles();
    var amount = props.amount;

    return (
        <div className={classes.background}>
            <img src={tree} alt="" className={classes.img} />
            <div className={classes.text}>You planted {amount*1.5} trees!</div>
        </div>
    )
}