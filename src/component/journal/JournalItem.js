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
    <div
      style={{
        display: "flex",
        float: "right",
      }}
    >
      {temp}
    </div>
  );
}

export function getMetaphors(metaphor) {
  if (!metaphor) return <div> empty metaphor </div>;
  var randomIndex = Math.floor(Math.random() * 3);
  if (randomIndex === 0) {
    return (
      <Card
        style={{
          background: "linear-gradient(45deg, #73A15D, #94C25A)",
          height: "70px",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/tree.png"}
            style={{
              position: "absolute",
              top: "17px",
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
              top: "20px",
              left: "70px",
            }}
          >
            {metaphor.tree} trees
          </Typography>
        </div>
      </Card>
    );
  } else if (randomIndex === 1) {
    return (
      <Card
        style={{
          background: "linear-gradient(45deg, #A0BFE3, #F0A2B0)",
          height: "70px",
          borderRadius: "15px",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/taxi.png"}
          style={{
            position: "absolute",
            top: "17px",
            left: "15px",
            height: "35px",
          }}
        />
        <Typography
          variant="body1"
          style={{
            fontSize: "1.1em",
            color: "white",
            position: "absolute",
            top: "22px",
            left: "61px",
          }}
        >
          {metaphor.taxi} won
        </Typography>
      </Card>
    );
  } else {
    return (
      <Card
        style={{
          background: "linear-gradient(45deg, #EED28B, #DB7E61)",
          height: "70px",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/hamburger.png"}
            style={{
              position: "absolute",
              top: "17px",
              left: "15px",
              height: "35px",
            }}
          />
          <Typography
            variant="body1"
            style={{
              fontSize: "1.15em",
              color: "white",
              position: "relative",
              top: "21px",
              left: "65px",
            }}
          >
            {metaphor.burger} burgers
          </Typography>
        </div>
      </Card>
    );
  }
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
      <Box flex={1} minHeight="60px" display="flex" flexDirection="row">
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
      <Box flex={1} minHeight="60px" display="flex" flexDirection="row">
        <Box flex={4} style={{ maxWidth: "calc(100%-60px)" }}>
          <Typography variant="h3" display="inline">
            {journal.title}
          </Typography>
        </Box>

        <Box
          flex={1}
          display="flex"
          flexDirection="row-reverse"
          minWidth="60px"
        >
          {getHashtags(journal.hashtags)}
        </Box>
      </Box>
      <Box flex={4} display="flex" flexDirection="row">
        <Box flex={1} display="flex" flexDirection="column">
          <Box flex={4}>{journal.desc}</Box>
          <Box flex={1}>{getMetaphors(journal.metaphors)}</Box>
        </Box>
        <Box flex={1}>
          <img
            alt="static Mapbox map of the San Francisco bay area"
            src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/path(wdzcFm_seWRENCPCF%3FfC%5DJkHkCAAkFKwDnC%7D%40)/auto/100x100?access_token=pk.eyJ1IjoiYmFieWNyb2MiLCJhIjoiY2tvaW5rMWlpMDE3czJ3cWYyMXZkZmxidiJ9.8m_FmwtsgjCBUq2Jq9wVcg"
          />
        </Box>
      </Box>
      <Divider />
    </Card>
  );
}

// https://stackoverflow.com/questions/42483449/mapbox-gl-js-export-map-to-png-or-pdf
