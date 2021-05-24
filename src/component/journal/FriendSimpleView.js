import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  disabled: {
    backgroundColor: "gray",
    opacity: 0.3,
  },
  abled: {
    backgroundColor: "white",
  },
}));
export default function FriendSimpleView({ friend, disabled }) {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      flexDirection="row"
      width="120px"
      borderRadius={10}
      className={disabled ? classes.disabled : classes.abled}
      style={{ boxShadow: "0px 1.77918px 3.55836px rgba(0, 0, 0, 0.25)" }}
      m={1}
    >
      <Box flex={1} mr={1} mt={1} mb={1} ml={1}>
        <Avatar
          alt={friend.name}
          src={process.env.PUBLIC_URL + friend.picture}
          style={{
            border: "1.5px solid lightgray",
            width: "30px",
            height: "30px",
          }}
        />
      </Box>
      <Box flex={2} mt={1} mb={1} style={{ minWidth: "60px" }}>
        <Typography variant="body2" color="textPrimary">
          {friend.name}
        </Typography>
      </Box>
    </Box>
  );
}
