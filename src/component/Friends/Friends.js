import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Icon, InlineIcon } from '@iconify/react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import hatchingChick from '@iconify-icons/twemoji/hatching-chick';
import frontFacingBabyChick from '@iconify-icons/twemoji/front-facing-baby-chick';
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


export default function FriendList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
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
  var sentence = "total intimacy: "+el.total_intimacy+", time: "+ el.spent_time +", distance: "+ el.distance;
    return(
      <ListItem button key={el.id}>
        <ListItemIcon>
          <Icon icon={icon_name}/>
        </ListItemIcon>
        <ListItemAvatar>
          <Avatar alt={el.name} src={el.picture}/>
        </ListItemAvatar>
        <ListItemText primary = {el.name} secondary = {sentence} />
      </ListItem>
    );
}