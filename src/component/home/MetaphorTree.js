import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const tree = '/images/home/metaphor_tree.png'

const useStyles = makeStyles(theme => ({
    background: {
        position: "relative",
        background: "linear-gradient(45deg, #73A15D, #94C25A)",
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
        margin: "0 auto",
        // border: "solid 1px black",
        width: "calc(85% - 20px)",
        paddingLeft: "10px"
    }
}));

export default function MetaphorTree(props) {
    const classes = useStyles();
    var amount = props.amount;

    return (
        <div className={classes.background}>
            <img src={process.env.PUBLIC_URL + tree} alt="" className={classes.img} />
            <div className={classes.text}>You planted {amount*1.5} trees!</div>
        </div>
    )
}