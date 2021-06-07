import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { ButtonBase } from "@material-ui/core";
import FriendSimpleView from "./FriendSimpleView";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MyAppBar from "./AppBar";

const useStyles = makeStyles((theme) => ({
  paper: {
    top: `50%`,
    left: `50%`,
    position: "absolute",
    width: "80%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    transform: `translate(-50%, -50%)`,
    maxHeight: "80vh",
    overflow: "scroll",
    padding: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const modalStyle = {
  top: "50%",
  left: "50%",
  transform: `translate(-${50}%, -${50}%)`,
};

export function FriendSelector({ friend, onClick, disabled }) {
  return (
    <ButtonBase onClick={onClick}>
      <FriendSimpleView friend={friend} disabled={disabled} />
    </ButtonBase>
  );
}

export default function FriendAddPage({
  allFriends,
  selectedFriends,
  addFriend,
  removeFriend,
  close,
}) {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <MyAppBar onSubmit={close} string="Friend" />
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        style={{ padding: "1%" }}
      >
        {allFriends.map((friend) => (
          <FriendSelector
            friend={friend}
            onClick={() =>
              selectedFriends.includes(friend)
                ? removeFriend(friend)
                : addFriend(friend)
            }
            disabled={selectedFriends.includes(friend)}
            key={friend.id}
          />
        ))}
      </Box>
    </div>
  );
}
