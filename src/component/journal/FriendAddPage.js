import { Button } from '@material-ui/core';
import React from 'react';
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

export default function FriendAddPage({ allFriends, selectedFriends, addFriend }) {

  return <div>
    {/* TODO 친구 리스트/아이템 공통 컴포넌트 적용 */}

    {allFriends.map(
      friend => <div>
        <Button onClick={() => addFriend(friend)}
          disabled={selectedFriends.includes(friend)}
        > {friend.name} </Button>
      </div>
    )}

    친구를 추가해보시지
  </div>
}