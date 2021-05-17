import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '../component/Avatar';
import { Weather, Dust, Distance, Time, Map, StartButton, StopButton, JournalModal } from '../component/home'

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

export default function Home() {
    const classes = useStyles();
    var [isRiding, setIsRiding] = useState(false);
    var [open, setOpen] = useState(false);
    var [distance, setDistance] = useState(0);
    var [time, setTime] = useState(0);
    var [route, setRoute] = useState([]);
    const increment = useRef(null);

    const startRide = () => {
        setIsRiding(true);
        increment.current = setInterval(() => {
            setDistance((distance) => distance + 1);
            setTime((time) => time + 1/6);
        }, 1000/6);
    }

    const stopRide = () => {
        setIsRiding(false);
        clearInterval(increment.current);
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
        setDistance(0);
        setTime(0);
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
        if(distance < 1000) {
            return `${distance}m`
        } else {
            return `${distance/1000}km`
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
                    <Distance distance={formatDistance()} style={classes.measures}/>
                    <Time time={formatTime()} style={classes.measures}/>
                </div>
            : null }

            <div className={classes.mapContainer}>
                <Map index={distance} isRiding={isRiding} saveRoute={setRoute}/>
            </div>

            <div onClick={() => !isRiding ? startRide() : stopRide() } className={classes.buttonContainer}>
                { !isRiding ? <StartButton style={{button: classes.button, text: classes.buttonText}}/> : <StopButton style={{button: classes.button, text: classes.buttonText}}/> }
            </div>

            <JournalModal open={open} distance={formatDistance()} time={formatTime()} amount={distance} route={route} closeModal={closeModal} />
        </div>
    )
}