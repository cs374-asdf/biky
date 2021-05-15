import React from "react";
import "./Friends.css";
import PropTypes from "prop-types";
import { hslToRgb, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ButtonBase from "@material-ui/core/ButtonBase";

import Box from "@material-ui/core/Box";
import { Icon, InlineIcon } from "@iconify/react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import hatchingChick from "@iconify-icons/twemoji/hatching-chick";
import frontFacingBabyChick from "@iconify-icons/twemoji/front-facing-baby-chick";
import LinearProgress from "@material-ui/core/LinearProgress";

import flist from "./FriendData.json";
import { PlayCircleFilledTwoTone, RestaurantRounded } from "@material-ui/icons";
// https://material-ui.com/components/lists/
// https://material-ui.com/components/cards/
// https://material-ui.com/components/progress/

function FriendListItem(props) {
  var icon_name;
  if (props.level === 1) {
    icon_name = hatchingChick;
  } else {
    icon_name = frontFacingBabyChick;
  }
  return (
    <ButtonBase variant="contained" style={{ width: "100%" }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="row"
        width="100%"
        mb={1}
      >
        <Box flex={1} mr={1}>
          <Icon style={{ fontSize: 30 }} icon={icon_name} />
        </Box>
        <Box flex={1} mr={1}>
          <Avatar
            alt={props.name}
            src={require("" + props.picture).default}
            style={{
              border: "2px solid lightgray",
            }}
          />
        </Box>
        <Box flex={2} mr={2}>
          <Typography variant="body1" color="textPrimary">
            {props.name}
          </Typography>
        </Box>
        <Box flex={6}>
          <LinearProgressV2 value={props.intimacy} />
        </Box>
      </Box>
    </ButtonBase>
  );
}

FriendListItem.propTypes = {
  level: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  intimacy: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function LinearProgressV2(props) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Box flex={5}>
        <div className="pro_bar">
          <div
            className="progress_bar_inner"
            style={{
              backgroundColor: "#ff85ac",
              width: props.value + "%",
            }}
            data-value={props.value}
            data-percentage-value={props.value}
          ></div>
        </div>
      </Box>
      <Box flex={1}>
        <Typography variant="body2" color="textPrimary" align="right">
          {props.value}%
        </Typography>
      </Box>
    </Box>
  );
}

export default function FriendList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main list">
        {flist.map(fillTable)}
      </List>
    </div>
  );
}

function fillTable(el) {
  // https://javascript.plainenglish.io/material-ui-icons-and-lists-a98c8ccbdac0
  return (
    <FriendListItem
      key={el.id}
      level={el.level_badge}
      name={el.name}
      picture={el.picture}
      intimacy={el.total_intimacy}
    />
  );
}
