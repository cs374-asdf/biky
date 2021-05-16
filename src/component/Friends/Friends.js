import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FilterListIcon from "@material-ui/icons/FilterList";
import Box from "@material-ui/core/Box";
import { Icon } from "@iconify/react";
import Avatar from "@material-ui/core/Avatar";
import hatchingChick from "@iconify-icons/twemoji/hatching-chick";
import frontFacingBabyChick from "@iconify-icons/twemoji/front-facing-baby-chick";
import chickenIcon from "@iconify-icons/twemoji/chicken";
import eggIcon from "@iconify-icons/twemoji/egg";

import { IconButton } from "@material-ui/core";

// https://material-ui.com/components/lists/
// https://material-ui.com/components/cards/
// https://material-ui.com/components/progress/
// https://material-ui.com/components/accordion/

function FriendListItemInner(props) {
  var icon_name;
  if (props.intimacy < 25) {
    icon_name = eggIcon;
  } else if (props.intimacy < 50) {
    icon_name = frontFacingBabyChick;
  } else if (props.intimacy < 75) {
    icon_name = hatchingChick;
  } else {
    icon_name = chickenIcon;
  }
  return (
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
          src={process.env.PUBLIC_URL + props.picture}
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
  );
}

function FriendListItem(props) {
  return (
    <Accordion>
      <AccordionSummary
        style={{ width: "95%" }}
        expandIcon={<ExpandMoreIcon />}
      >
        <FriendListItemInner
          key={props.id}
          name={props.name}
          picture={props.picture}
          intimacy={props.intimacy}
        />
      </AccordionSummary>
      <AccordionDetails style={{ backgroundColor: "lightgray" }}>
        <Typography variant="body2" color="textPrimary">
          Rode with {props.name} for {props.time}min and {props.distance}km
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const ProgressStyles = makeStyles((theme) => ({
  pro_bar: {
    backgroundColor: "hsl(0, 0%, 97%)",
    height: "4px",
    marginBottom: "12px",
    marginTop: "12px",
    position: "relative",
  },

  progress_bar_inner: {
    display: "block",
    width: 0,
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#ff85ac",
    transition: "width 1s linear 0s",
    "&::after": {
      content: `""`,
      width: "32px",
      height: "29px",
      backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bike.png"})`,
      backgroundSize: "contain",
      borderRadius: "50%",
      position: "absolute",
      right: "-4px",
      top: "-20px",
    },
  },
}));
// https://bestjquery.com/tutorial/progress-bar/demo17/
function LinearProgressV2(props) {
  const classes = ProgressStyles();
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Box flex={5}>
        <div className={classes.pro_bar}>
          <div
            className={classes.progress_bar_inner}
            style={{
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

function fillTable(el) {
  // https://javascript.plainenglish.io/material-ui-icons-and-lists-a98c8ccbdac0
  return (
    <FriendListItem
      key={el.id}
      name={el.name}
      picture={el.picture}
      intimacy={el.total_intimacy}
      time={el.spent_time}
      distance={el.distance}
    />
  );
}

export default function FriendList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box display="flex" flexDirection="column">
        <Box alignSelf="flex-end">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Box>

        <div>{props.flist.map(fillTable)}</div>
      </Box>
    </div>
  );
}
