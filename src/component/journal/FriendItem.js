import Avatar from '@material-ui/core/Avatar';
import { Delete } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

export default function FriendItem({ friend, removeFriend }) {
  return (
    <ListItem key={friend.id}>
      <ListItemAvatar>
        <Avatar alt={friend.name} src={require("" + friend.picture).default} />
      </ListItemAvatar>
      <ListItemText primary={friend.name} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={() => removeFriend(friend)}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
