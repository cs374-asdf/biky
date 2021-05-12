import React from 'react';
import './Friends.css'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Box from '@material-ui/core/Box';
import { Icon, InlineIcon } from '@iconify/react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import hatchingChick from '@iconify-icons/twemoji/hatching-chick';
import frontFacingBabyChick from '@iconify-icons/twemoji/front-facing-baby-chick';
import LinearProgress from '@material-ui/core/LinearProgress';

import flist from './FriendData.json';
// https://material-ui.com/components/lists/
// https://material-ui.com/components/cards/
// https://material-ui.com/components/progress/

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%">
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={3}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};


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

function fillTable(el)
{
  var icon_name;
  if (el.level_badge === 1){
    icon_name = hatchingChick;
  }
  else{
    icon_name = frontFacingBabyChick;
  }
  // https://javascript.plainenglish.io/material-ui-icons-and-lists-a98c8ccbdac0
  var sentence = "total intimacy: "+el.total_intimacy+", time: "+ el.spent_time +", distance: "+ el.distance;
    return(
      <React.Fragment key={el.id}>
        <ListItem button>
        <ListItemIcon>
          <Icon style={{ fontSize: 30 }} icon={icon_name}/>
        </ListItemIcon>
        <ListItemAvatar>
          <Avatar alt={el.name} src={require(""+el.picture).default}/>
        </ListItemAvatar>
        <ListItemText primary = {el.name} />
        <ListItemAvatar>
          <LinearProgress variant="determinate" value={el.total_intimacy} />
        </ListItemAvatar>
      </ListItem>
      <Divider variant="inset" component="li" />
      </React.Fragment>
      
      
    );
}