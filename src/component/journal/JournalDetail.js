import { Icon, InlineIcon } from "@iconify/react";
import { getDivs, getMetaphors } from "./JournalItem"

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { CardActions } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import DateComponent from "./DateComponent";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import PictureList from "./PictureList";
import React from "react";
import StaticMap from "../home/StaticMap"
import crossMark from '@iconify-icons/twemoji/cross-mark';
import dayjs from "dayjs"
import { getFriends } from "./JournalItem";
import {getIconComponent} from "../../util/icon"
import { makeStyles } from "@material-ui/core/styles";
import {nullToList} from "../../util/format"
import pencilIcon from '@iconify-icons/twemoji/pencil';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "80%",
    position: "absolute",
    maxHeight: "80%",
    padding: theme.spacing(2, 4, 3),
  },

      modal: {
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%)`,
        position: "absolute",
        width: "75%",
        maxHeight: "75vh",
        overflowY: "scroll",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: "none"
    },

    header: {
      display: 'flex',
      justifyContent: 'space-around',
      
    },

    emojiHashtagContainer: {

    },

    friendContainer: {

    },
    
    metaphorDistanceTimeContainer: {

    },
  
}));

const modalStyle = {
  top: "50%",
  left: "50%",
  position: "absolute",
  overflow: "scroll",
  transform: `translate(-${50}%, -${50}%)`,
}

function formatTime(time) {
  console.log("time: ", time)
  return dayjs(time).format("YYYY년 M월 D일 H시 m분") // "25/01/2019"
}

function getTime(start, end) {
  return <div>
    {formatTime(start)} 부터 {formatTime(end)} 까지
  </div>
}

export default function JournalDetail({ journal, friends }) {
  const classes = useStyles();

  if (!journal)
    return null

  const emojis = nullToList(journal.emojis).map(getIconComponent)


  console.log(journal.friends)

  return (
    <Card className={classes.modal}>
      <CardActions>
        <IconButton
          component={Link} to={`/edit/${journal.id}`}
        >
          <Icon icon={pencilIcon}/>
      </IconButton>
        <IconButton onClick={() => alert("삭제")}>
          <Icon icon={crossMark}/>
        </IconButton>
      </CardActions>
      
      <div className={classes.header}>
        <div> {journal.title} </div>
        <DateComponent startTime={journal.startTime} endTime={journal.endTime}/>        
      </div>
              
      <CardContent>
      <div>
        {emojis}
      </div>
      <div>
        {getDivs(journal.hashtags)}
      </div>
      </CardContent>
      <CardContent>{journal.desc}</CardContent>
      {/* TODO 적절한 양식으로 friends 보여주기! object의 배열임에 주의*/}
      {/* <CardContent>{getDivs(journal.friends ? journal.friends : [])}</CardContent> */}

      <CardContent>{journal.distance} km</CardContent>
      <CardContent>
        {getTime(journal.startTime, journal.endTime)}
      </CardContent>
      <CardContent>{journal.weather} </CardContent>
      <CardContent>{getMetaphors(journal.metaphor)} </CardContent>

      <CardContent>
        <StaticMap route={journal.route} zoom={15} width={"100%"} height={"300px"} />
      </CardContent>
      <CardContent>
        <PictureList pictures={journal.photos} isEditing={false} />
      </CardContent>
    </Card >

  );
}