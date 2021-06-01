import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import PeopleIcon from "@material-ui/icons/People";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "60px",
    position: "fixed",
    bottom: 0,
    zIndex: 1,
  },
});

const noNavBar = (pathname) => {
  return (
    pathname === '/biky' || 
    pathname === '/biky/login' || 
    pathname === '/biky/404' ||
    pathname === '/biky/') ||
    pathname === '/biky/tutorial'
}

const NavBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(window.location.pathname);
  let history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

    history.listen((location, action) => {
        setValue(location.pathname)
    });

    return (
      <div>
        {noNavBar(value) ? null : 
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="FRIEND"
        value="/biky/friend"
        icon={<PeopleIcon />}
        component={Link}
        to="/biky/friend"
      ></BottomNavigationAction>
      <BottomNavigationAction
        label="HOME"
        value="/biky/home"
        icon={<HomeIcon />}
        component={Link}
        to="/biky/home"
      />
      <BottomNavigationAction
        label="JOURNAL"
        value="/biky/journal"
        icon={<DirectionsBikeIcon />}
        component={Link}
        to="/biky/journal"

      />
    </BottomNavigation>
}
    </div>
  );

};

export default withRouter(NavBar);
