import Avatar from "@material-ui/core/Avatar";
import { Delete } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function FriendItem({ friend, removeFriend }) {
  return (
    <div style={{ display: "inline-block", marginRight: "10px", marginBottom: "10px" }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="row"
        width="100%"
        borderRadius="borderRadius"
        style={{
          backgroundColor: "white",
          boxShadow: "0px 1.77918px 3.55836px rgba(0, 0, 0, 0.25)",
        }}
        mr={2}
        key={friend.id}
      >
        <Box mr={1} mt={1} mb={1} ml={1}>
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
        <Box mt={1} mb={1} mr={1}>
          <Typography variant="body2" color="textPrimary">
            {friend.name}
          </Typography>
        </Box>
        <Box>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => removeFriend(friend)}
          >
            <Delete />
          </IconButton>
        </Box>
      </Box>
    </div>
    // <ListItem key={friend.id}>
    //   <ListItemAvatar>
    //     <Avatar
    //       alt={friend.name}
    //       src={process.env.PUBLIC_URL + friend.picture}
    //       style={{
    //         border: "2px solid lightgray",
    //         width: "30px",
    //         height: "30px",
    //       }}
    //     />{" "}
    //   </ListItemAvatar>
    //   <ListItemText primary={friend.name} />
    //   <ListItemSecondaryAction>
    //     <IconButton
    //       edge="end"
    //       aria-label="delete"
    //       onClick={() => removeFriend(friend)}
    //     >
    //       <Delete />
    //     </IconButton>
    //   </ListItemSecondaryAction>
    // </ListItem>
  );
}
