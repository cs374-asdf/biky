import { Distance, Dust, JournalModal, Map, StartButton, StopButton, Time, Weather } from '../component/home'
import React, { useRef, useState } from 'react';

import Avatar from '../component/Avatar';
import dayjs from 'dayjs'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    page: {
        maxWidth: "550px",
        margin: "0 auto",
        border: "solid 1px black",
    },
    header: {
        fontSize: "30px",
        fontWeight: "bold",
        borderBottom: "solid 1px black",
        textAlign: "center",
        padding: "10px",
    },
    myPageButton: {
        // border: "solid 1px black",
        textAlign: "right",
        paddingRight: "10px",
    },
    weather: {
        width: "100%",
        height: "150px",
        // border: "solid 1px black", 
        // padding: "0 10px",
    },
    measuresContainer: {
        position: "absolute",
        zIndex: "1",
        width: "calc(100% - 20px)",
        // border: "solid 1px black", 
        padding: "10px",
    },
    measures: {
        display: "inline-block",
        // border: "solid 1px black",
        padding: "10px",
        margin: "0 5px",
        backgroundColor: "white",
        borderRadius: "10px",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "20px",
    },
    mapContainer: {
        position: "relative",
        // border: "solid 1px black", 
        height: "300px",
    },
    buttonContainer: {
        position: "relative",
        // border: "solid 1px black", 
        height: "60px",
        padding: "10px",
    },
    button: {
        position: "relative",
        height: "100%",
        border: "solid 1px black",
        textAlign: "center",
        borderRadius: "10px",
        fontWeight: "bold",
        fontSize: "20px",
        margin: "auto 0",
    },
    buttonText: {
        position: "relative",
        // border: "solid 1px black", 
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "20px",
        transform: "translateY(75%)",
    },
    startButton: {

    },
    stopButton: {

    }
});

export default function Home({ journalRef }) {
    const classes = useStyles();
    var [isRiding, setIsRiding] = useState(false);
    var [open, setOpen] = useState(false);
    var [distance, setDistance] = useState(0);
    var [time, setTime] = useState(0);
    var [route, setRoute] = useState([]);
    const increment = useRef(null);

    const [hashtags, setHashtags] = useState(["happy"])
    const [startTime, setStartTime] = useState(dayjs())

    const createJournal = () => {
        let id = journalRef.push().key

        const endTime = startTime.add(time, 'minute')
        let newJournal = {
            id,
            route,
            hashtags,
            distance,
            startTime: startTime.toString(),
            endTime: endTime.toString(),
            title: "제목 없음",
            desc: "내용 없음",
            photos: ["/images/photo1.jpg"],
            emojis: ["happy", "exited"],
            metaphors: {
                tree: 1,
                taxi: 1,
                burger: 1,
            }
        }

        console.log(newJournal)

        journalRef.child(id).set(newJournal)
        return id;
    }


    const startRide = () => {
        setStartTime(dayjs())
        setIsRiding(true);
        increment.current = setInterval(() => {
            setDistance((distance) => distance + 1);
            setTime((time) => time + 1 / 6);
        }, 1000 / 6);
    }

    const stopRide = () => {
        setIsRiding(false);
        clearInterval(increment.current);
        setOpen(true);
    }

    const closeModal = () => {
        console.log("closing modal")
        createJournal();
        setOpen(false);
        setDistance(0);
        setTime(0);
    }

    let history = useHistory();

    const handleJournal = () => {
        const id = createJournal();
        history.push(`/edit/${id}`);
    }

    const formatTime = () => {
        const intTime = parseInt(time);
        const getSeconds = `0${(intTime % 60)}`.slice(-2)
        const minutes = `${Math.floor(intTime / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(intTime / 3600)}`.slice(-2)
        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    const formatDistance = () => {
        if (distance < 1000) {
            return `${distance}m`
        } else {
            return `${distance / 1000}km`
        }
    }

    return (
        <div className={classes.page}>
            <div className={classes.header}>Home</div>

            <div className={classes.myPageButton}>
                Nayeon Min
                <div style={{ display: "inline-block" }}><Avatar /></div>
            </div>

            <div className={classes.weather}>
                <Weather />
                <Dust />
            </div>

            { isRiding ?
                <div className={classes.measuresContainer}>
                    <Distance distance={formatDistance()} style={classes.measures} />
                    <Time time={formatTime()} style={classes.measures} />
                </div>
                : null}

            <div className={classes.mapContainer}>
                <Map index={distance} isRiding={isRiding} saveRoute={setRoute} />
            </div>

            <div onClick={() => !isRiding ? startRide() : stopRide()} className={classes.buttonContainer}>
                {!isRiding ? <StartButton style={{ button: classes.button, text: classes.buttonText }} /> : <StopButton style={{ button: classes.button, text: classes.buttonText }} />}
            </div>

            <JournalModal handleJournal={handleJournal} open={open} distance={formatDistance()} time={formatTime()} amount={distance} route={route} closeModal={closeModal} />
        </div>
    )
}