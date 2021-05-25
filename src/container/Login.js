import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const logo = "/images/logo.png";

const frequest = [
  {
    id: "r0",
    picture: "/images/cactus.png",
    name: "mangoo",
  },
  {
    id: "r1",
    picture: "/images/cat0.jpg",
    name: "junho",
  },
];

const friends = [
  {
    id: "f0",
    picture: "/images/cat1.jpg",
    name: "yuri",
    total_intimacy: 0,
  },
  {
    id: "f1",
    picture: "/images/sky0.jpg",
    name: "nayoung",
    total_intimacy: 0,
  },
  {
    id: "f2",
    picture: "/images/cat2.jpg",
    name: "sanga",
    total_intimacy: 0,
  },
];

const journal = {
  date: "2021. 05. 25",
  desc: "I rode 0.7 km at Boramae Park!",
  distance: 0.7,
  emojis: ["happy", "exited"],
  endTime: "Tue, 25 May 2021 12:17:15 GMT",
  hashtags: ["sad"],
  createdAt: new Date().toString(),
  id: "j0",
  metaphors: {
    burger: 0.06999999999999999,
    taxi: 700,
    tree: 0.034999999999999996,
  },
  photos: ["/images/photo1.jpg", "/images/photo2.jpg"],
  route: [
    [126.91468074800363, 37.49470666236267],
    [126.91474014452083, 37.49415293252939],
    [126.91481439016731, 37.493646325043095],
    [126.91561624314943, 37.493646325043095],
    [126.91635869961434, 37.493669888258175],
    [126.91641809613154, 37.4943178737601],
    [126.91747238431171, 37.494341436763335],
    [126.91845242684539, 37.49436499975911],
  ],
  startTime: "Tue, 25 May 2021 10:03:55 GMT",
  time: 133.33333333333334,
  title: "To the moon 🚀",
  weather: "rainy",
};

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  width: "60vw",
  height: "40px",
  padding: "0 30px",
  marginBottom: "10px",
});

const useStyles = makeStyles((theme) => ({
  background: {
    position: "fixed",
    top: 0,
    left: 0,
    background: "linear-gradient(0deg, #FFEDE8, #FFFFF5)",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  },
  grid: {
    margin: "auto",
  },
  textField: {
    width: "60vw",
    background: "#FFFFFF",
    marginBottom: "2vh",
  },
  submit: {
    marginTop: "3vh",
  },
  login: {
    marginBottom: "2vh",
  },
  logo: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(15),
  },

  form: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

function setDB(db, user) {
  const ref = db.ref("/" + user);
  ref.once("value").then(function (snapshot) {
    var existed = snapshot.hasChild("journals");
    if (!existed) {
      const frequestRef = ref.child("frequests");
      const friendRef = ref.child("friends");
      const journalRef = ref.child("journals");
      for (var i = 0; i < frequest.length; i++) {
        frequestRef.child(frequest[i].id).set(frequest[i]);
      }
      for (var i = 0; i < friends.length; i++) {
        friendRef.child(friends[i].id).set(friends[i]);
      }
      journalRef.child("j0").set(journal);
    }
  });
}

export default function Login({
  db,
  setJournalRef,
  setFriendRef,
  setFrequestsRef,
}) {
  const classes = useStyles();

  const [val, setVal] = useState({
    id: "id123",
    password: "password123",
  });

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (val.id.length === 0) {
      alert("You should enter ID!");
      return;
    }

    if (val.password.length === 0) {
      alert("You should enter password!");
      return;
    }

    // alert(`아이디: ${val.id} 비밀번호: ${val.password}`)
    setJournalRef(val.id);
    setFriendRef(val.id);
    setFrequestsRef(val.id);
    setDB(db, val.id);
    history.push(`/biky/home`);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setVal({
      ...val,
      [name]: value,
    });
  };

  return (
    <div className={classes.background}>
      {/* <Box className={classes.root}> */}
      <Grid container className={classes.logo} justify="center">
        <img src={process.env.PUBLIC_URL + logo} alt="logo" />
      </Grid>

      <div className={classes.form}>
        <Typography variant="h5" className={classes.login}>
          Login
        </Typography>

        <TextField
          type="id"
          name="id"
          required
          fullWidth
          variant="outlined"
          onChange={onChange}
          placeholder="Enter ID"
          className={classes.textField}
        />

        <form onSubmit={handleSubmit}>
          <TextField
            type="password"
            name="password"
            required
            fullWidth
            variant="outlined"
            onChange={onChange}
            placeholder="Enter password"
            className={classes.textField}
          />
        </form>

        <MyButton onClick={handleSubmit} className={classes.submit}>
          Submit
        </MyButton>
      </div>
    </div>
  );
}
