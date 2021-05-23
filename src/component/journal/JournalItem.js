import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import FriendSimpleView from "./FriendSimpleView";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { nullToList } from "../../util/format";
import { getIconComponent } from "../../util/icon";
import DateComponent from "./DateComponent";
import StaticMap from "../home/StaticMap";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { PinDropSharp } from "@material-ui/icons";
import mapboxgl from "mapbox-gl";
import React, { useRef } from "react";
import polyline from "@mapbox/polyline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

export function getDivs(items) {
  if (!items) return <div> empty </div>;
  return items.map((item) => (
    <div style={{ display: "inline" }} key={item}>
      {" "}
      {item}{" "}
    </div>
  ));
}

export function getHashtags(hashtags) {
  var temp = hashtags.map((hashtag) => (
    <div key={hashtag}>#{`${hashtag}`}</div>
  ));
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        fontSize: "small",
      }}
    >
      {temp}
    </div>
  );
}

export function getFriends(friends) {
  if (!friends) return <div> no friends... </div>;
  var temp = friends.map((friend) => (
    <FriendSimpleView key={friend.id} friend={friend} />
  ));
  return (
    <Box display="flex" flexDirection="row" flexWrap="nowrap">
      {temp}
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  tree: {
    background: "linear-gradient(45deg, #73A15D, #94C25A)",
    height: "40px",
    width: "100%",
    borderRadius: "15px",
  },
  taxi: {
    background: "linear-gradient(45deg, #A0BFE3, #F0A2B0)",
    height: "40px",
    width: "100%",
    borderRadius: "15px",
  },
  burger: {
    background: "linear-gradient(45deg, #EED28B, #DB7E61)",
    height: "40px",
    width: "100%",
    borderRadius: "15px",
  },
}));

export function GetMetaphors(metaphor) {
  const classes = useStyles();
  if (!metaphor) return <div> empty metaphor </div>;
  var randomIndex = Math.floor(Math.random() * 3);
  var sent = "";
  var path = "";
  var cn = "";
  switch (randomIndex) {
    case 0: {
      console.log("tree");
      sent = metaphor.tree + " trees";
      path = "/images/tree.png";
      cn = classes.tree;
      break;
    }

    case 1: {
      console.log("taxi");
      sent = metaphor.taxi + " won";
      path = "/images/taxi.png";
      cn = classes.taxi;
      break;
    }

    case 2: {
      console.log("burger");
      sent = metaphor.hamburger + " burgers";
      path = "/images/hamburger.png";
      cn = classes.burger;
      break;
    }
  }
  return (
    <Card className={cn}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + path}
          style={{
            position: "relative",
            top: "2px",
            left: "15px",
            height: "35px",
          }}
        />
        <Typography
          variant="body1"
          style={{
            fontSize: "1.2em",
            color: "white",
            position: "relative",
            top: "2px",
            left: "50px",
          }}
        >
          {sent}
        </Typography>
      </div>
    </Card>
  );
}

function emojiItem(emoji) {
  return (
    <Box
      borderRadius="50%"
      style={{
        backgroundColor: "white",
        boxShadow: "0px 1.77918px 3.55836px rgba(0, 0, 0, 0.25)",
      }}
      width="40px"
      height="40px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      mr={1}
    >
      <Box>{emoji}</Box>
    </Box>
  );
}

function generateurl(route) {
  var url = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/";
  var urlb =
    ")/auto/100x100?access_token=pk.eyJ1IjoiYmFieWNyb2MiLCJhIjoiY2tvaW5rMWlpMDE3czJ3cWYyMXZkZmxidiJ9.8m_FmwtsgjCBUq2Jq9wVcg";
  var corRoute = [];
  route.map((el) => corRoute.push([el[1], el[0]]));
  const out = encodeURIComponent(polyline.encode(corRoute));
  url +=
    "pin-s+0000ff(" +
    corRoute[0][1] +
    "," +
    corRoute[0][0] +
    "),pin-s+ff0000(" +
    corRoute[corRoute.length - 1][1] +
    "," +
    corRoute[corRoute.length - 1][0] +
    "),path(";
  url = url.concat(out, urlb);
  // console.log(url);
  return url;
}

export default function JournalItem({ journal, openJournal, friends }) {
  if (!journal) return null;
  const emojis = nullToList(journal.emojis).map(getIconComponent);
  return (
    <Card
      onClick={() => openJournal(journal)}
      style={{
        margin: "35px",
        padding: "35px",
        flexDirection: "column",
      }}
      display="flex"
      id={journal.id + "main"}
    >
      <Box flex={1} minHeight="40px" display="flex" flexDirection="row">
        <Box flex={4}>
          <DateComponent
            startTime={journal.startTime}
            endTime={journal.endTime}
          />
        </Box>
        <Box flex={4} display="flex" flexDirection="row-reverse">
          {emojis.map((emoji) => emojiItem(emoji))}
        </Box>
      </Box>
      <Box flex={1} display="flex" flexDirection="row">
        <Box
          component="div"
          textOverflow="ellipsis"
          overflow="hidden"
          style={{
            wordWrap: "breakWord",
            whiteSpace: "nowrap",
            fontSize: "x-large",
          }}
        >
          {journal.title}
        </Box>
      </Box>
      <Box flex={1} display="flex" flexDirection="row-reverse">
        {getHashtags(journal.hashtags)}
      </Box>
      <Divider />
      <Box flex={4} display="flex" flexDirection="row" height="110px" p={1}>
        <Box
          my={2}
          component="div"
          textOverflow="ellipsis"
          overflow="hidden"
          mr={2}
          flex={4}
          style={{ wordWrap: "breakWord", whiteSpace: "nowrap" }}
        >
          {journal.desc}
          {/* <Box mt={1}>{getFriends(friends)}</Box> */}
          <Box mt={1}>{GetMetaphors(journal.metaphor)}</Box>
        </Box>

        <Box flex={1}>
          <Grid container justify="center">
            <img
              alt="static Mapbox map"
              src={generateurl(journal.route)}
              style={{
                textAlign: "center",
              }}
            />
          </Grid>
        </Box>
      </Box>
      <Divider />
      <Box flex={1} mt={1}>
        {getFriends(friends)}
      </Box>
    </Card>
  );
}

// https://stackoverflow.com/questions/42483449/mapbox-gl-js-export-map-to-png-or-pdf
