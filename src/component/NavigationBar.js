import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import PeopleIcon from "@material-ui/icons/People";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "60px",
    position: "fixed",
    bottom: 0,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(window.location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="친구"
        value="/biky/friend"
        icon={<PeopleIcon />}
        component={Link}
        to="/biky/friend"
      ></BottomNavigationAction>
      <BottomNavigationAction
        label="홈"
        value="/biky/"
        icon={<HomeIcon />}
        component={Link}
        to="/biky/"
      />
      <BottomNavigationAction
        label="기록"
        value="/biky/journal"
        icon={<DirectionsBikeIcon />}
        component={Link}
        to="/biky/journal"

      />
    </BottomNavigation>
  );
}
