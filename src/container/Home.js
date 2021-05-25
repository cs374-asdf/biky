import {
  Distance,
  Dust,
  JournalModal,
  Map,
  StartButton,
  StopButton,
  Time,
  Weather,
} from '../component/home'
import React, { useRef, useState } from 'react'
import { formatDistance, formatTime } from "../util/format";

import Avatar from "../component/Avatar";
import { Button } from "@material-ui/core";
import Profile from './Profile'
import dayjs from "dayjs";
import {getRandomPhoto} from '../data/photo';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
    height: "135px",
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
    width: "calc(100% - 20px)",
    // border: "solid 1px black",
  },
  buttonText: {
    position: 'relative',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '50px',
  },
  startButton: {
    position: "relative",
    height: "calc(100% - 20px)",
    textAlign: "center",
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "20px",
    margin: "10px",
    width: "calc(100% - 20px)",
    color: theme.palette.primary.main

  },
  stopButton: {},
}));

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomTitle()
{
  const randomTitles = [
    "Met a beautiful cat",
    "No play and all work makes Jack a dull boy",
    "Come along with me",
    "Dundun dance",
    "Here's Jonny",
    "Open the pot, HAL"
  ]
  let selector = randomInt(0, randomTitles.length-1)
  return randomTitles[selector]
}

export default function Home({ journalRef }) {
  // var journalRef = db.ref("/" + user + "/journals");
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

    const endTime = startTime.add(time, 'minute')
    const randomPhotos = getRandomPhoto(3)
    const randomTitle = getRandomTitle()

    let newJournal = {
      createdAt: new Date(),
      id,
      route,
      hashtags,
      distance: parseInt(distance * 10) / 10,
      time,
      date: endTime.format("YYYY. MM. DD"),
      weather: weatherTypes[weather - 1],
      startTime: startTime.toString(),
      endTime: endTime.toString(),
      title: randomTitle,

      desc: `I rode ${(parseInt(distance * 10) / 10)} km at Boramae Park!`,
      photos: randomPhotos,
      emojis: hashtags,
      metaphors: {
        tree: (parseInt(distance * 10) / 10) * 0.05,
        taxi: (parseInt(distance * 10) / 10) * 1000,
        burger: (parseInt(distance * 10) / 10) * 0.1,
      },
    };

    journalRef.child(id).set(newJournal)
    return id
  }

  const startRide = () => {
    setStartTime(dayjs());
    setIsRiding(true);
    increment.current = setInterval(() => {
      setDistance((distance) => distance + 0.1);
      setTime((time) => time + 1000 / 60);
      console.log(distance, time);
    }, 1000 / 6); // 100m/s
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


  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <div className={classes.verticalAlign}>Home</div>
      </div>

      <Profile/>

      <div className={classes.content}>
        <div className={classes.weatherContainer}>
          <Weather weather={weather} />
          <Dust />
        </div>

        {isRiding ? (
          <div className={classes.measuresContainer}>
            <Distance
              distance={formatDistance(distance)}
              style={classes.measures}
            />
            <Time time={formatTime(time)} style={classes.measures} />
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
              style={{ button: classes.startButton, text: classes.buttonText }}
            />
          ) : (
            <StopButton
              style={{ button: classes.button, text: classes.buttonText }}
            />
          )}
        </div>
      </div>

      <JournalModal
        handleJournal={handleJournal}
        open={open}
        distance={formatDistance(distance)}
        time={formatTime(time)}
        amount={distance}
        route={route}
        closeModal={closeModal}
      />
    </div>
  );
}
