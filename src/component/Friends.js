import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Icon, InlineIcon } from '@iconify/react';
import hatchingChick from '@iconify-icons/twemoji/hatching-chick';
import frontFacingBabyChick from '@iconify-icons/twemoji/front-facing-baby-chick';

// https://material-ui.com/components/lists/
// https://material-ui.com/components/cards/

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.divider,
  },
}));


export default function FriendList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <Icon icon={hatchingChick} />
          </ListItemIcon>
          <ListItemText primary="알병아리" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon icon={frontFacingBabyChick} />
          </ListItemIcon>
          <ListItemText primary="병아리" />
        </ListItem>
      </List>
    </div>
  );
}
