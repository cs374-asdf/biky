import { List, ListItem } from "@material-ui/core";
import { getIconComponent, hashtagsDB } from "../../util/icon";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteIcon from "@material-ui/icons/Delete";
import FriendItem from "./FriendItem";
import HashtagSelector from "./HashtagSelector";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import PictureList from "./PictureList";
import React from "react";
import StaticMap from "../home/StaticMap";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import StaticMap from "../home/StaticMap";
import CancelIcon from "@material-ui/icons/Cancel";
import Box from "@material-ui/core/Box";
import { getIconComponent, hashtagsDB } from "../../util/icon";
import { formatTime, formatDistance } from "../../util/format";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      // margin: theme.spacing(1),
      marginBottom: "10px",
      width: "100%",
    },
  },

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
  content: {
    position: "relative",
    height: "calc(100vh - 130px)",
    overflowY: "scroll",
    padding: "10px",
    // border: "solid 1px black",
  },

  hashtagGroup: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  picture: {},

  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },

  textField: {
    marginTop: "10px",
    flexGrow: 1,
  },
  addButton: {
    border: "solid 1px lightgray",
    marginLeft: "10px",
    display: "inline-block",
    marginBottom: "10px",
  },
  submitButton: {
    width: "100%",
    textAlign: "center",
    // border: "solid 1px black",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#4BA9FF",
    borderRadius: "10px",
    padding: "10px",
    marginTop: "10px",
  },
}));

function showWeather(weather) {
  return (
    <div
      style={{
        display: "inline-block",
        width: "calc(100% - 30px)",
        backgroundColor: "lightblue",
        borderRadius: "5px",
        padding: "10px",
        height: "100px",
        verticalAlign: "top",
        marginRight: "10px",
      }}
    >
      {weather}
    </div>
  );
}

function weatherIcon(weather) {
  return (
    <div style={{ display: "inline-block", verticalAlign: "top" }}>
      {getIconComponent(weather)}
    </div>
  );
}

function contentSuggestion(text) {
  const length = text.length;
  return (
    <div
      style={{
        width: "calc(100% - 20px)",
        // border: "solid 1px lightgray",
        borderRadius: "5px",
        padding: "5px 10px",
        boxShadow: "0px 1.43351px 2.86702px rgba(0, 0, 0, 0.25)",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          display: "inline-block",
          backgroundColor: "pink",
          color: "white",
          width: "15px",
          height: "15px",
          textAlign: "center",
          padding: "3px",
          fontWeight: "bold",
          fontSize: "14px",
          borderRadius: "20px",
          marginRight: "10px",
          // verticalAlign: "top",
        }}
      >
        {text[length - 1]}
      </div>
      <div
        style={{
          display: "inline-block",
          width: "calc(100% - 31px)",
          // border: "solid 1px lightgray",
        }}
      >
        {text}
      </div>
    </div>
  );
}

// const formatTime = (time) => {
//   const intTime = parseInt(time);
//   const getSeconds = `0${intTime % 60}`.slice(-2);
//   const minutes = `${Math.floor(intTime / 60)}`;
//   const getMinutes = `0${minutes % 60}`.slice(-2);
//   const getHours = `0${Math.floor(intTime / 3600)}`.slice(-2);
//   return `${getHours} : ${getMinutes} : ${getSeconds}`;
// };

export default function JournalForm({
  journal,
  onSubmit,
  openFriendAddPage,
  friends,
  removeFriend,
  addFriend,
  pictures,
  removePicture,
  openPictureSelector,
}) {
  const classes = useStyles();
  console.log(journal);
  const [title, setTitle] = React.useState(journal.title);
  const [desc, setDesc] = React.useState(journal.desc);
  const [hashtags, setHashtags] = React.useState(journal.hashtags);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit({
      title,
      desc,
      hashtags,
    });
  };

  const addHashtag = (hashtag) => {
    if (!hashtags.includes(hashtag)) setHashtags([...hashtags, hashtag]);
  };

  const removeHashtag = (hashtag) => {
    setHashtags(hashtags.filter((item) => item !== hashtag));
  };

  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <div className={classes.verticalAlign}>Journal</div>
      </div>

      <div className={classes.content}>
        <div className={classes.root} noValidate autoComplete="off">
          <Box display="flex" flexDirection="row" alignItems="center">
            <IconButton
              aria-label="delete"
              onClick={() => {
                setTitle("");
              }}
              className={classes.title}
            >
              <CancelIcon />
            </IconButton>
            <TextField
              onChange={handleTitleChange}
              id="title"
              label="Title"
              variant="outlined"
              value={title}
              defaultValue={journal.title}
              className={classes.textField}
            />
          </Box>

          <div>
            <div style={{ position: "absolute", right: "10px" }}>
              <Typography>
                {weatherIcon(journal.weather)}{" "}
                <div style={{ display: "inline-block", margin: "5px" }}>
                  {journal.date}
                </div>
              </Typography>
              {/* <Typography>{journal.weather}</Typography> */}
              {/* <Typography style={{ marginBottom: "10px" }}>Period: {journal.startTime.slice(undefined, journal.startTime.length - 4)} ~ {journal.endTime.slice(undefined, journal.endTime.length - 4)}</Typography> */}
            </div>

            <Typography style={{ marginBottom: "10px" }}>Records</Typography>
            <StaticMap route={journal.route} />

            {/* <div style={{ margin: "10px 0" }}>
              <div style={{ display: "inline-block", width: "calc(100% - 180px)", height: "70px", backgroundColor: "green", verticalAlign: "middle", marginRight: "10px", padding: "10px" }}>
                Show Metaphor {journal.metaphors.tree} trees
              </div>

              <div style={{ display: "inline-block", width: "150px" }}>
                <Typography style={{ marginBottom: "10px" }}>Distance: {formatDistance(journal.distance)}</Typography>
                <Typography style={{ marginBottom: "10px" }}>Time: {formatTime(journal.time)}</Typography>
              </div>
            </div> */}

            <div style={{ margin: "10px 0" }}>
              <div style={{ display: "inline-block", width: "50%" }}>
                <Typography style={{ marginBottom: "10px" }}>
                  Distance: {formatDistance(journal.distance)}
                </Typography>
              </div>
              <div style={{ display: "inline-block", width: "50%" }}>
                <Typography style={{ marginBottom: "10px" }}>
                  Time: {formatTime(journal.time)}
                </Typography>
              </div>
            </div>

            <div>
              <Typography
                style={{ marginBottom: "10px", display: "inline-block" }}
              >
                Friends
              </Typography>
              <Button onClick={openFriendAddPage} className={classes.addButton}>
                +
              </Button>
              <div>
                {/* <List dense> */}
                {friends.map((friend) => (
                  <FriendItem
                    key={friend.id}
                    friend={friend}
                    removeFriend={removeFriend}
                    style={{ display: "inline-block" }}
                  />
                ))}
                {/* <ListItem> */}
                {/* <Button onClick={openFriendAddPage} style={{ height: "50px", marginTop: "-15px" }}>+</Button> */}
                {/* </ListItem> */}
                {/* </List> */}
              </div>
            </div>
          </div>

          {/* 내용 suggestion */}
          <div>
            {contentSuggestion("What did you do at Boramae Park?")}
            {contentSuggestion("You rode a bike with Maengoo!")}
          </div>

          <TextField
            onChange={handleDescChange}
            id="desc"
            label="Description"
            variant="outlined"
            multiline
            defaultValue={journal.desc}
            rows={5}
          />

          <div>
            <Typography
              style={{ marginBottom: "10px", display: "inline-block" }}
            >
              Pictures
            </Typography>
            <Button onClick={openPictureSelector} className={classes.addButton}>
              +
            </Button>

            <PictureList
              pictures={pictures}
              removePicture={removePicture}
              isEditing
            />
          </div>

          <div className={classes.hashtagGroup}>
            {hashtags.map((hashtag) => (
              <div key={hashtag}>
                #{hashtag}
                <IconButton
                  aria-label="delete"
                  onClick={() => removeHashtag(hashtag)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            ))}
            <HashtagSelector
              handleSubmit={addHashtag}
              hashtags={hashtagsDB.filter(
                (hashtag) => !hashtags.includes(hashtag)
              )}
            />
          </div>

          <Button
            onClick={handleSubmit}
            component={Link}
            className={classes.submitButton}
            to="/biky/journal"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
