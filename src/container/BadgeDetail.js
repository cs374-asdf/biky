import React, { useState } from "react";

import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { badges } from '../data/badge'
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

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
    maxHeight: "50px",
    maxWidth: "50px",
    overflow: "hidden",
  },
  badge: {
    margin: "auto",
    display: "block",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
  eachBadge: {
    margin: theme.spacing(2, 0),
  },
  buttonBase: {
    width: "98%",
    borderBottom: "dotted 1px lightgray",
  },
  arrow: {
    margin: theme.spacing(1, 1),
  },

  bold: {
    fontWeight: "bold",
    fontSize: "20px",
  },
}));


export default function BadgeDetail({mainBadge, changeMainBadge}) {
  const classes = useStyles();
  let history = useHistory();

  function backward() {
    history.push("/biky/myPage");
  }

  const eachBadge = badges.map((badge, idx) => (
    <ButtonBase
      className={classes.buttonBase}
      style={
        idx === mainBadge ? { backgroundColor: "lightgray" } : {}
      }
      onClick={() => {
        changeMainBadge(badge.oid);
        console.log(mainBadge);
      }}
      key={idx}
    >
      <Grid container spacing={2} className={classes.eachBadge}>
        <Grid item>
          <Box className={classes.badgeBox}>
            <img
              className={classes.badge}
              src={process.env.PUBLIC_URL + badge.thumbnail}
              alt={badge.title}
            />
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
  ));

  return (
    <Box p={3}>
    <ButtonBase onClick={backward}>
        <ArrowBackIosOutlinedIcon
          className={classes.arrow}
        ></ArrowBackIosOutlinedIcon>
      </ButtonBase>

        <Paper className={classes.root}>
          <Typography className={classes.bold} style={{ marginBottom: "10px" }}>
          Representative Badge
        </Typography>

          <Grid container spacing={2}>
            <Grid item>
              <Box className={classes.badgeBox}>
                <img
                  className={classes.badge}
                  src={
                    process.env.PUBLIC_URL +
                    badges[mainBadge].thumbnail
                  }
                  alt="Representative Badge"
                />
              </Box>
            </Grid>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h6">
                  {badges[mainBadge].title}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="body2">
                  {badges[mainBadge].description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.root} style={{border: "solid 1px lightgray", marginTop: 10}}>
        <Typography className={classes.bold} style={{ marginBottom: "10px" }}>
        Other Badges
        </Typography>

        <div
          style={{
            overflow: "scroll",
            maxHeight: "calc(100vh - 390px)",
          }}>
                    {eachBadge}

        </div>
        </Paper>
    </Box>
  );
}
