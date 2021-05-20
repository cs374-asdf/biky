import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import React from "react";

const Hamburger = "/images/hamburger.png";
const Taxi = "/images/taxi.png";
const Tree = "/images/tree.png";

function getDivs(items) {
  return items.map((item) => (
    <div style={{ display: "inline" }} key={item}>
      {" "}
      {item}{" "}
    </div>
  ));
}

function getFriends(friends) {
  return friends.map((friend) => (
    <div
      style={{
        display: "inline",
      }}
    >
      {" "}
      {friend}{" "}
    </div>
  ));
}

function getMetaphor(metaphor, randomIndex) {
  if (randomIndex === 0) {
    return (
      <Card
        style={{
          background: "linear-gradient(45deg, #73A15D, #94C25A)",
          width: "100%",
          height: "10vh",
          borderRadius: "15px",
          padding: "10%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={Tree}
            style={{
              position: "absolute",
              width: "13%",
              top: "auto",
              left: "auto",
            }}
          />
          <Typography
            variant="body1"
            style={{
              fontSize: "1.3em",
              color: "white",
              position: "absolute",
              top: "auto",
              left: "auto",
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
          width: "80%",
          height: "10vh",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "spaceAround",
            alignItems: "center",
          }}
        >
          <img
            src={Taxi}
            style={{
              position: "absolute",
              width: "13%",
              top: "15%",
              left: "3%",
            }}
          />
          <Typography
            variant="body1"
            style={{
              fontSize: "1.3em",
              color: "white",
              position: "absolute",
              top: "30%",
              left: "20%",
            }}
          >
            {metaphor.taxi} won
          </Typography>
        </div>
      </Card>
    );
  } else {
    return (
      <Card
        style={{
          background: "linear-gradient(45deg, #EED28B, #DB7E61)",
          width: "80%",
          height: "10vh",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "spaceAround",
            alignItems: "center",
          }}
        >
          <img
            src={Hamburger}
            style={{
              position: "absolute",
              width: "12%",
              top: "19%",
              left: "2%",
            }}
          />
          <Typography
            variant="body1"
            style={{
              fontSize: "1.15em",
              color: "white",
              position: "absolute",
              top: "31%",
              left: "16%",
            }}
          >
            {metaphor.hamburger} burgers
          </Typography>
        </div>
      </Card>
    );
  }
}

export default function JournalItem({ journal, openJournal }) {
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
          background: "#DDDDDD",
          display: "flex",
          flexWrap: "wrap",
          height: "100px",
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          {/* startTime하니까 오류남.. */}
          날짜
        </div>

        <div
          style={{
            marginLeft: "auto",
          }}
        >
          {getDivs(journal.emojis)}
        </div>

        <div
          style={{
            marginTop: "auto",
            width: "50%",
            fontSize: "2em",
          }}
        >
          {journal.title}
        </div>
        <div
          style={{
            marginLeft: "auto",
            marginTop: "auto",
          }}
        >
          {getDivs(journal.hashtags)}
        </div>
      </div>

      <div
        style={{
          background: "#BCBCBC",
          position: "relative",
          top: "5vw",
          width: "65%",
          minHeight: "25vh",
        }}
      >
        {journal.desc}
      </div>

      <div
        style={{
          background: "#CCCCCC",
          position: "relative",
          top: "10vw",
          width: "65%",
          height: "15vh",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "35%",
          }}
        >
          {/* {getMetaphor(journal.metaphor, Math.floor(Math.random() * 3))} */}
          {getMetaphor(journal.metaphor, 2)}
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
            {getDivs(journal.friends)}
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

      {/* <CardContent> {journal.map} </CardContent> */}
    </Card>
  );
}
