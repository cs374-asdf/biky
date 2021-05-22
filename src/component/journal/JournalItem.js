import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import FriendSimpleView from "./FriendSimpleView";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import React from "react";
import { nullToList } from "../../util/format";
import { getIconComponent } from "../../util/icon";
import DateComponent from "./DateComponent";
import { Box } from "@material-ui/core";

const Hamburger = "/images/hamburger.png";
const Taxi = "/images/taxi.png";
const Tree = "/images/tree.png";

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
  return hashtags.map((hashtag) => (
    <div style={{ display: "inline" }} key={hashtag}>
      #{`${hashtag} `}
    </div>
  ));
}

export function getFriends(friends) {
  if (!friends) return <div> no friends... </div>;
  return friends.map((friend) => (
    <FriendSimpleView key={friend.id} friend={friend} />
    /*
    <div
      style={{
        display: "inline",
      }}
    >
      {" "}
      {friend}{" "}
    </div>
    */
  ));
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
              left: "60px",
            }}
          >
            {metaphor.hamburger} burgers
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
      flex={1}
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
      }}
    >
      <div
        style={{
          background: "#CCCCCC",
          display: "flex",
          flexWrap: "wrap",
          height: "30px",
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          {/* journal.startTime하니까 오류남.. */}
          {journal.weather}
          <DateComponent
            startTime={journal.startTime}
            endTime={journal.endTime}
          />
        </div>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          style={{
            marginLeft: "auto",
          }}
        >
          {emojis.map((emoji) => emojiItem(emoji))}
        </Box>
      </div>

      <div
        style={{
          background: "#DDDDDD",
          position: "relative",
          top: "30px",
          display: "flex",
          flexWrap: "noWrap",
          height: "60px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "#CDCDCD",
            minWidth: "50%",
            width: "50%",
            height: "30px",
            fontSize: "20px",
            marginTop: "auto",
          }}
        >
          <div>{journal.title}</div>
        </div>

        <div
          style={{
            marginTop: "auto",
            minWidth: "5vw",
          }}
        ></div>

        <div
          style={{
            marginLeft: "auto",
            marginTop: "auto",
            height: "25px",
          }}
        >
          {getHashtags(journal.hashtags)}
        </div>
      </div>

      <div
        style={{
          background: "#BCBCBC",
          position: "relative",
          top: "55px",
          width: "65%",
          height: "120px",
          overflow: "hidden",
        }}
      >
        {journal.desc}
      </div>

      <div
        style={{
          background: "#CCCCCC",
          position: "relative",
          top: "85px",
          width: "65%",
          height: "70px",
          display: "flex",
          flexWrap: "noWrap",
        }}
      >
        <div
          style={{
            width: "160px",
          }}
        >
          {/* {getMetaphors(journal.metaphor, Math.floor(Math.random() * 3))} */}
          {getMetaphors(journal.metaphor)}
        </div>

        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              marginLeft: "auto",
            }}
          >
            {getFriends(friends)}
          </div>
          <div
            style={{
              marginTop: "auto",
            }}
          >
            {journal.distance} km
          </div>
        </div>
      </div>

      <div
        style={{
          height: "85px",
        }}
      ></div>

      {/* <div
        style={{
          background: "#CCCCCC",
          position: "relative",
          float: "left",
        }}
      >
        map
      </div> */}
    </Card>
  );
}
