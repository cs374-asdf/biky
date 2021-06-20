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
import React, { useEffect, useRef, useState } from "react";
import { formatDistance, formatTime } from "../util/format";
import { routeEnd, routeOri, routeStart } from "../data/route"

import Avatar from "../component/Avatar";
import { Button } from "@material-ui/core";
import Profile from "./Profile";
import dayjs from "dayjs";
import { getRandomPhoto } from "../data/photo";
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
    height: "145px",
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
    height: "calc(40% - 145px)",
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
    position: "relative",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "25px",
    color: theme.palette.common.white,
  },
  startButton: {
    position: "relative",
    height: "calc(100% - 20px)",
    textAlign: "center",
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "25px",
    margin: "10px",
    width: "calc(100% - 20px)",
    color: theme.palette.primary.main,
  },
  stopButton: {},
}));

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomTitle() {
  const randomTitles = [
    "Met a beautiful cat",
    "Dundun dance",
    "Met a dirty goose",
    "Sunny day",
    "Final exam",
    "Happy bike ride",
    "Bike ride after Fantastic HCI class"
  ];
  let selector = randomInt(0, randomTitles.length - 1);
  return randomTitles[selector];
}

const weatherTypes = ["sunny", "cloudy", "rainy"];

function getRidingTime(time, wizard) {
  if (!wizard) return time
  const {startPauseTime, endPauseTime} = wizard
  if (!startPauseTime || !endPauseTime) return time
  
  const [spHour, spMin] = startPauseTime.split(':')
  const [epHour, epMin] = endPauseTime.split(':')

  const pauseTime = (epHour - spHour) * 60 + (epMin - spMin)
//   console.log('pauseTime: ', pauseTime)
  const resultTime = time - pauseTime
  return resultTime >= 0 ? resultTime : 0
}

function getRidingPlace(wizard) {
  if (!wizard) return 'Boramae Park'
  const { place } = wizard
  if (!place) return 'Borameae Park'
  return place
}


export default function Home({ journalRef, wizardRef }) {
  const classes = useStyles();
  const [isRiding, setIsRiding] = useState(false);
  const [open, setOpen] = useState(false);
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);
  const [route, setRoute] = useState([]);
  const [index, setIndex] = useState(0);

  const [weather, setWeather] = useState('loading');

  const increment = useRef(null);

  const [hashtags, setHashtags] = useState([]);
  const [startTime, setStartTime] = useState(dayjs());
  const [wizard, setWizard] = useState(null);
  const [mode, setMode] = useState("none");
  const [tooltipOpen, setTooltipOpen] = useState(true)

  React.useEffect(
    () => {
      console.log("wizard changed")
      if (wizardRef) {
        wizardRef.on('value', snapshot => {
            const wiz = snapshot.val()
            setWizard(wiz)
            setWeather(wiz.weather)
            setMode(wiz.mode)
            setIsRiding(wiz.isRiding)
            console.log(wiz)
          })
        console.log("wizard mode")
      }
      else {
        setWeather(weatherTypes[randomInt(0, weatherTypes.length)])
        console.log("non-wizard mode")
      }
    }, 
    [wizardRef]
  )

  React.useEffect(
    () => {
      journalRef.on("value", (snapshot) => {
        const journalData = snapshot.val();
      let journalList = journalData ? Object.values(journalData) : [];
      console.log(journalList.length, " set tooltipOpen")
      if (journalList.length >= 2) setTooltipOpen(false)
      else setTooltipOpen(true)
          })
    }, [journalRef, setTooltipOpen]
  )

  useEffect(() => {
    if(mode === "none") {

    } else {
        clearInterval(increment.current);
        if(mode === "e11s") {
            setTime(0);
            setDistance(0);
        } else if(mode === "ori") {
            setTime(63*3/60);
            setDistance(0.378*2);
        } else if(mode === "e11e") {
            setTime(143*5.5/60);
            setDistance(0.858*3);
        }

        // increment.current = setInterval(() => {
        //     setTime((time) => time + 1/60);
        // }, 1000);
    }
  }, [mode])


  const createJournal = () => {
    let id = journalRef.push().key;

    const endTime = startTime.add(time, "minute");
    const randomPhotos = getRandomPhoto(3);
    const randomTitle = getRandomTitle();

    const ridingTime = getRidingTime(time, wizard);

    let newJournal = {
      createdAt: new Date().toString(),
      id,
      route,
      hashtags,
      distance: distance,
      time: ridingTime,
      date: endTime.format("YYYY. MM. DD"),
      weather,
      startTime: startTime.toString(),
      endTime: endTime.toString(),
      title: randomTitle,

      desc: `I rode ${parseInt(distance * 10) / 10} km at ${getRidingPlace(wizard)}!`,
      photos: randomPhotos,
      emojis: hashtags,
      metaphors: {
        tree: (parseInt(distance * 10) / 10) * 0.05,
        taxi: (parseInt(distance * 10) / 10) * 1000,
        burger: (parseInt(distance * 10) / 10) * 0.1,
      },
    };

    journalRef.child(id).set(newJournal);
    return id;
  };

  const startRide = () => {
    setStartTime(dayjs());
    setIsRiding(true);
    if (wizard && wizard.mode !== 'none') {
      // increment.current = setInterval(() => {
      //   // setIndex((index) => index + 1);
      //   // setDistance((distance) => distance + 0.006);
      //   // setTime((time) => time + 1/60);
      //   // console.log(distance, time);
      //   // console.log(wizard.mode);
      // }, 1000); // 1초에 한 번 업데이트
    } else {
        increment.current = setInterval(() => {
            setIndex((index) => index + 10*1/6);
            setDistance((distance) => distance + 2*10*0.001);
            setTime((time) => time + 10*5*1/360);
            // console.log(wizard.mode);
        }, 1000 / 20); // 1초에 6번 업데이트
    }
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
    setIndex(0);
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

      <Profile />

      <div className={classes.content}>
        <div className={classes.weatherContainer}>
          <Weather weather={weather} temperature={wizard ? wizard.temperature : 15}/>
          <Dust fineDust={(wizard && wizard.fineDust) ? wizard.fineDust : randomInt(10, 70)} ultraFineDust={(wizard && wizard.ultraFineDust) ? wizard.ultraFineDust : randomInt(10, 200)} />
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
          <Map index={index} mode={wizard ? wizard.mode : 'none'} isRiding={isRiding} saveRoute={setRoute} />
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
        tooltipOpen={tooltipOpen}
        distance={formatDistance(distance)}
        time={formatTime(getRidingTime(time, wizard))}
        amount={distance}
        route={route}
        closeModal={closeModal}
      />
    </div>
  );
}
