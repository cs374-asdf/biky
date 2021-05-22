import { List, ListItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import FriendItem from "./FriendItem";
import HashtagSelector from "./HashtagSelector";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import PictureList from "./PictureList";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import StaticMap from "../home/StaticMap";

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
    flexWrap: 'wrap'
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
    marginTop: "10px"
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
    marginTop: "10px"
}
}));

const hashtagsDB = [
  "happy", "downside", "hello", "high", "hat", "huhuh", "hike", "bike", "dike"
];

function showWeather(weather) {
  return (
    <div style={{
      display: "inline-block",
      width: "calc(100% - 30px)",
      backgroundColor: "lightblue",
      borderRadius: "5px",
      padding: "10px",
      height: "100px",
      verticalAlign: "top",
      marginRight: "10px"
    }}>
      cloudy<br/>
      24
    </div>
  )
}

function contentSuggestion(text) {
  const length = text.length;
  return (
    <div style={{
      width: "calc(100% - 20px)",
      // border: "solid 1px lightgray",
      borderRadius: "5px",
      padding: "5px 10px",
      boxShadow: "0px 1.43351px 2.86702px rgba(0, 0, 0, 0.25)",
    }}>
      <div style={{ 
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
        
      }}>{text[length-1]}</div>
      <div style={{ 
        display: "inline-block",
        width: "calc(100% - 31px)",
        // border: "solid 1px lightgray",
      }}>{text}</div>
    </div>
  )
}

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
  const [title, setTitle] = React.useState(journal.title);
  const [desc, setDesc] = React.useState(journal.desc);
  const [hashtags, setHashtags] = React.useState(journal.hashtags);

  // console.log(journal.title);
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
    if (!hashtags.includes(hashtag))
      setHashtags([...hashtags, hashtag]);
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
          <TextField
            onChange={handleTitleChange}
            id="title"
            label="Title"
            variant="outlined"
            defaultValue={journal.title}
            className={classes.textField}
          />

          

          <div>
            <div style={{ display: "inline-block", width: "50%", verticalAlign: "bottom" }}>
              <Typography>{journal.startTime} ~ {journal.endTime}</Typography>
              <Typography>Distance: {journal.distance} km</Typography>
              {showWeather(journal.weather)}
            </div>
            

            <div style={{ display: "inline-block", width: "50%" }}>
              <StaticMap route={journal.route} height="200px" zoom="14"/>
            </div>
          </div>

          <Typography>Friends</Typography>
          <List dense>
            {friends.map((friend) => (
              <FriendItem
                key={friend.id}
                friend={friend}
                removeFriend={removeFriend}
              />
            ))}
            <ListItem>
              <Button onClick={openFriendAddPage}>+</Button>
            </ListItem>
          </List>

          {/* <div> 오늘 본 고양이는 누구였나요?? </div> */}

          {/* 내용 suggestion */}
          {contentSuggestion("What did you do at Boramae Park?")}
          {contentSuggestion("You rode a bike with Maengoo!")}

          <TextField
            onChange={handleDescChange}
            id="desc"
            label="내용"
            variant="outlined"
            multiline
            defaultValue={journal.desc}
            className={classes.textField}
            multiline={true}
            rows={5}
          />

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
            <HashtagSelector handleSubmit={addHashtag} hashtags={hashtagsDB.filter(hashtag => !hashtags.includes(hashtag))}/>  
          </div>

          <div>
            <Button onClick={openPictureSelector}> 사진 추가 </Button>

            <PictureList
              pictures={pictures}
              removePicture={removePicture}
              isEditing
            />
          </div>

          <Button onClick={handleSubmit} component={Link} className={classes.submitButton} to="/biky/journal">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
