import {
  Distance,
  Dust,
  JournalModal,
  Map,
  StartButton,
  StopButton,
  Time,
  Weather,
} from "../component/home";
import React, { useRef, useState } from "react";

import Avatar from "../component/Avatar";
import dayjs from "dayjs";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  page: {
    position: "relative",
    // maxWidth: "550px",
    margin: "0 auto",
    // border: "solid 1px blue",
  },
  verticalAlign: {
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    display: "inline-block",
  },
  header: {
    position: "relative",
    height: "49px",
    fontSize: "30px",
    fontWeight: "bold",
    borderBottom: "solid 1px black",
    textAlign: "center",
  },
  avatar: {
    position: "relative",
    height: "50px",
    // border: "solid 1px black",
  },
  content: {
    position: "relative",
    height: "calc(100vh - 160px)",
    overflow: "scroll",
    // border: "solid 1px black",
  },
  weatherContainer: {
    position: "relative",
    width: "100%",
    // height: "25%",
    height: "135px"
    // border: "solid 1px black",
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
    width: "100%",
    height: "60%",
    // border: "solid 1px black",
  },
  buttonContainer: {
    position: "relative",
    width: "100%",
    height: "calc(40% - 135px)",
    minHeight: "50px",
    // border: "solid 1px black",
  },
  button: {
    position: "relative",
    height: "calc(100% - 20px)",
    textAlign: "center",
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "20px",
    margin: "10px",
    // border: "solid 1px black",
  },
  buttonText: {
    position: "relative",
    // border: "solid 1px black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px",
  },
  startButton: {},
  stopButton: {},
});

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Home({ journalRef }) {
  const classes = useStyles();
  var [isRiding, setIsRiding] = useState(false);
  var [open, setOpen] = useState(false);
  var [distance, setDistance] = useState(0);
  var [time, setTime] = useState(0);
  var [route, setRoute] = useState([]);

  const weatherTypes = ["sunny", "cloudy", "rainy"];
  var [weather, setWeather] = useState(randomInt(1, weatherTypes.length));

  const increment = useRef(null);

  const [hashtags, setHashtags] = useState(["happy"]);
  const [startTime, setStartTime] = useState(dayjs());

  const createJournal = () => {
    let id = journalRef.push().key;

    const endTime = startTime.add(time, "minute");
    let newJournal = {
      id,
      route,
      hashtags,
      distance,
      time,
      date: endTime.format("YYYY. MM. DD"),
      weather: weatherTypes[weather - 1],
      startTime: startTime.toString(),
      endTime: endTime.toString(),
      title: "Today's Bike Ride",
      desc: `I rode ${distance} km at Boramae Park!`,
      photos: ["/images/photo1.jpg"],
      emojis: ["happy", "exited"],
      metaphors: {
        tree: distance*1.5,
        taxi: distance*3000,
        burger: distance*2,
      },
    };

    console.log(newJournal);

    journalRef.child(id).set(newJournal);
    return id;
  };

  const startRide = () => {
    setStartTime(dayjs());
    setIsRiding(true);
    increment.current = setInterval(() => {
      setDistance((distance) => distance + 1);
      setTime((time) => time + 1 / 6);
    }, 1000 / 6);
  };

  const stopRide = () => {
    setIsRiding(false);
    clearInterval(increment.current);
    setOpen(true);
  };

  const closeModal = () => {
    console.log("closing modal");
    createJournal();
    setOpen(false);
    setDistance(0);
    setTime(0);
  };

  let history = useHistory();

  const handleJournal = () => {
    const id = createJournal();
    history.push(`/biky/edit/${id}`);
  };

  const formatTime = () => {
    const intTime = parseInt(time);
    const getSeconds = `0${intTime % 60}`.slice(-2);
    const minutes = `${Math.floor(intTime / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(intTime / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  const formatDistance = () => {
    if (distance < 1000) {
      return `${distance}m`;
    } else {
      return `${distance / 1000}km`;
    }
  };

  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <div className={classes.verticalAlign}>Home</div>
      </div>

      <div className={classes.avatar}>
        <div
          className={classes.verticalAlign}
          style={{ right: "10px", transform: "translateY(-50%)" }}
        >
          Nayeon Min{" "}
          <div style={{ display: "inline-block" }}>
            <Avatar />
          </div>
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.weatherContainer}>
          <Weather weather={weather}/>
          <Dust />
        </div>

        {isRiding ? (
          <div className={classes.measuresContainer}>
            <Distance distance={formatDistance()} style={classes.measures} />
            <Time time={formatTime()} style={classes.measures} />
          </div>
        ) : null}

        <div className={classes.mapContainer}>
          <Map index={distance} isRiding={isRiding} saveRoute={setRoute} />
        </div>

        <div
          onClick={() => (!isRiding ? startRide() : stopRide())}
          className={classes.buttonContainer}
        >
          {!isRiding ? (
            <StartButton
              style={{ button: classes.button, text: classes.verticalAlign }}
            />
          ) : (
            <StopButton
              style={{ button: classes.button, text: classes.verticalAlign }}
            />
          )}
        </div>
      </div>

      <JournalModal
        handleJournal={handleJournal}
        open={open}
        distance={formatDistance()}
        time={formatTime()}
        amount={distance}
        route={route}
        closeModal={closeModal}
      />
    </div>
  );
}
