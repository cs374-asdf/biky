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
  },
});

const noNavBar = (pathname) => {
  console.log(pathname)
  return (pathname === '/biky' || pathname === '/biky/login')
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
        console.log(action, location.pathname, location.state)
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
        label="친구"
        value="/biky/friend"
        icon={<PeopleIcon />}
        component={Link}
        to="/biky/friend"
      ></BottomNavigationAction>
      <BottomNavigationAction
        label="홈"
        value="/biky/home"
        icon={<HomeIcon />}
        component={Link}
        to="/biky/home"
      />
      <BottomNavigationAction
        label="기록"
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
