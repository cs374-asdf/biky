import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PeopleIcon from '@material-ui/icons/People';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { Link } from 'react-router-dom';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('diary');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="친구" value="friend" icon={<PeopleIcon />}
        component={Link} to="/friend">
      </BottomNavigationAction>
      <BottomNavigationAction label="기록" value="diary" icon={<DirectionsBikeIcon />}
        component={Link} to="/"
      />
      <BottomNavigationAction label="통계" value="stats" icon={<EqualizerIcon />}
        component={Link} to="/"
      />
    </BottomNavigation>
  );
}