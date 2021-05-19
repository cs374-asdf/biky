import { Button, Modal } from '@material-ui/core';
import { MetaphorContainer, StaticMap } from './';

import { Link } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    modal: {
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%)`,
        position: "absolute",
        width: "75%",
        maxWidth: "412.5px",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: "none"
    },
    title: {
        textAlign: "center",
    },
    half: {
        display: "inline-block",
        width: "50%"
    },
    button: {
        width: "calc(100% - 20px)",
        textAlign: "center",
        // border: "solid 1px black",
        backgroundColor: "lightblue",
        borderRadius: "10px",
        padding: "10px"
    }
}));

export default function JournalModal(props) {
    const classes = useStyles();
    var open = props.open;
    var distance = props.distance;
    var time = props.time;
    var amount = props.amount;
    var route = props.route;
    var closeModal = props.closeModal;

    return (
        <div>
            <Modal
                open={open}
                onClose={closeModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.modal}>

                    <h2 id="modal-title" className={classes.title}>
                        Today's Ride
                    </h2>

                    <MetaphorContainer amount={amount} />

                    <hr />

                    <div id="modal-description">
                        <div className={classes.half}>시간 {time}</div>
                        <div className={classes.half}>거리 {distance}</div>
                        <br /><br />

                        <div>
                            이동경로
                            <StaticMap route={route} zoom={15} width={"100%"} height={"300px"} />
                        </div>
                        <br />
                        <Button className={classes.button} onClick={props.handleJournal}>Journal Ride</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}