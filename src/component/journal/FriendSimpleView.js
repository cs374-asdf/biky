import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import React from 'react';
import Typography from '@material-ui/core/Typography'

export default function FriendSimpleView ({ friend, style }) {
  return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="row"
        width="100%"
        mb={1}
        style={{ borderTop: "1px dashed lightgray" }}
      >
        <Box flex={1} mr={1}>
          <Avatar
            alt={friend.name}
            src={process.env.PUBLIC_URL + friend.picture}
            style={{
              border: "2px solid lightgray",
            }}
          />
        </Box>
        <Box flex={2} mr={4}>
          <Typography variant="body2" color="textPrimary">
            {friend.name}
          </Typography>
        </Box>
      </Box>
  );
}
