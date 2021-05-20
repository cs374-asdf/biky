import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import Grid from "@material-ui/core/Grid";
import logo from "../img/logo.png";
import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/3.png";
import img5 from "../img/3.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
  },
  badgeBox: {
    width: "100%",
    height: "100%",
  },
  badge: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  eachBadge: {
    margin: theme.spacing(2, 0),
  },
  buttonBase: {
    width: "100%",
    borderBottom: "dotted 1px lightgray"
  },
  arrow: {
    margin: theme.spacing(1, 1),
  },

  bold: {
    fontWeight: "bold",
    fontSize: "20px"
  },
}));

const badges = [
  {
    oid: 0,
    thumbnail: logo,
    title: "배지 이름0",
    description: "배지 설명0",
  },
  {
    oid: 1,
    thumbnail: img1,
    title: "배지 이름1",
    description: "배지 설명1",
  },
  {
    oid: 2,
    thumbnail: img2,
    title: "배지 이름2",
    description: "배지 설명2",
  },
  {
    oid: 3,
    thumbnail: img3,
    title: "배지 이름3",
    description: "배지 설명3",
  },
  {
    oid: 4,
    thumbnail: img4,
    title: "배지 이름4",
    description: "배지 설명4",
  },
  {
    oid: 5,
    thumbnail: img5,
    title: "배지 이름5",
    description: "배지 설명5",
  },
];

export default function BadgeDetail() {
  const classes = useStyles();

  const [val, setVal] = useState({
    representativeBadge: 0,
  });

  function handleClick(value) {
    setVal({
      representativeBadge: value,
    });
  }

  function backward() {
    window.location.replace("/myPage");
  }

  const eachBadge = badges.map((badge, idx) => (
    <Paper
      onClick={() => {
        handleClick(badge.oid);
        console.log(val)
      }}
    >
      <ButtonBase className={classes.buttonBase} style={ idx === val.representativeBadge ? { backgroundColor: "lightgray"} : {} }>
        <Grid container spacing={2} className={classes.eachBadge}>
          <Grid item>
            <Box className={classes.badgeBox}>
              <img className={classes.badge} src={badge.thumbnail} />
            </Box>
          </Grid>

          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography variant="h6" align="left">
                {badge.title}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2" align="left">
                {badge.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </ButtonBase>
    </Paper>
  ));

  return (
    <Box p={3}>
      <ButtonBase>
        <ArrowBackIosOutlinedIcon
          className={classes.arrow}
          onClick={() => {
            backward();
          }}
        ></ArrowBackIosOutlinedIcon>
      </ButtonBase>

      <div className={classes.root}>
        <Typography className={classes.bold} style={{ marginBottom: "10px" }}>Representative Badge</Typography>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <Box className={classes.badgeBox}>
                <img
                  className={classes.badge}
                  src={badges[val.representativeBadge].thumbnail}
                />
              </Box>
            </Grid>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h6">
                  {badges[val.representativeBadge].title}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="body2">
                  {badges[val.representativeBadge].description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>

      <div className={classes.root}>
        <Typography className={classes.bold} style={{ marginBottom: "10px" }}>Other Badges</Typography>
        <Box style={{ border: "solid 1px lightgray", overflow: "scroll", maxHeight: "calc(100vh - 390px)" }}>
          {eachBadge}
        </Box>
      </div>
    </Box>
  );
}
