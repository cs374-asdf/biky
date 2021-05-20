import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import { ButtonBase } from "@material-ui/core";
import FriendSimpleView from "./FriendSimpleView";
import React from 'react';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '80%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

  },
}));

const modalStyle = {
  top: '50%',
  left: '50%',
  transform: `translate(-${50}%, -${50}%)`,
}

export function FriendSelector({ friend, onClick, disabled }) {
  return (
    <ButtonBase onClick={onClick}>
      <FriendSimpleView friend={friend} />
    </ButtonBase>
  );

}

export default function FriendAddPage({ allFriends, selectedFriends, addFriend }) {

  return <div>

    {allFriends.map(
      friend =>
        <FriendSelector
          friend={friend}
          onClick={() => addFriend(friend)}
          disabled={selectedFriends.includes(friend)}
          key={friend.id}
        />
    )}

    친구를 추가해보시지
  </div>
}