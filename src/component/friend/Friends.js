import Box from "@material-ui/core/Box";
import FilterListIcon from "@material-ui/icons/FilterList";
import FriendListItem from './FriendItem'
import { IconButton } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// https://material-ui.com/components/lists/
// https://material-ui.com/components/cards/
// https://material-ui.com/components/progress/
// https://material-ui.com/components/accordion/

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));


function fillTable(friend, journals) {
  // https://javascript.plainenglish.io/material-ui-icons-and-lists-a98c8ccbdac0
  return (
    <FriendListItem
      key={friend.id}
      friend={friend}
      journals={journals}
    />
  );
}

export default function FriendList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box display="flex" flexDirection="column">
        <Box alignSelf="flex-end">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Box>

        <div>{props.flist.map((friend) => fillTable(friend, props.journalsByFriend[friend.id]))}</div>
      </Box>
    </div>
  );
}
