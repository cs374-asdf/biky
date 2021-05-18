import { IconButton, Typography } from "@material-ui/core";

import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import MailIcon from "@material-ui/icons/Mail";
import Modal from "@material-ui/core/Modal";
import React from "react";
import SearchBar from "../common/SearchBar";
import { makeStyles } from "@material-ui/core/styles";

// https://material-ui.com/components/modal/

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "80%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: "18px",
  },
  mailIcon: {
    position: "absolute", 
    display: "inline-block", 
    marginLeft: "10px"
  }
}));

function ReceivedElement(props) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      flexDirection="row"
      width="calc(100% - 20px)"
      style={{ 
        backgroundColor: "lightgray",
        borderRadius: "5px",
        marginBottom: "7px",
        padding: "10px",
      }}
    >
      <Box>
        <Avatar
          alt={props.name}
          src={process.env.PUBLIC_URL + props.picture}
          style={{
            border: "2px solid lightgray",
            width: "30px",
            height: "30px"
          }}
        />
      </Box>
      <Box style={{ margin: "0 7px" }}>
        <Typography variant="body2" color="textPrimary">
          {props.name}
        </Typography>
      </Box>

      <Box style={{ border: "solid 1px black", position: "relative", float: "right" }}>
        <div style={{ display: "inline-block" }}>
          <IconButton
            style={{ color: "green" }}
            onClick={() => {
              props.onAcceptClick(props.oid);
            }}
          >
            <CheckCircleIcon />
          </IconButton>
        </div>
        <div style={{ display: "inline-block" }}>
          <IconButton
            style={{ color: "red" }}
            onClick={() => {
              props.onRejectClick(props.oid);
            }}
          >
            <CancelIcon />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
}

export default function Frequest(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState({
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  });
  const [open, setOpen] = React.useState(false);

  function fillTable(el) {
    // https://javascript.plainenglish.io/material-ui-icons-and-lists-a98c8ccbdac0
    return (
      <ReceivedElement
        key={el.id}
        oid={el.id}
        name={el.name}
        picture={el.picture}
        onRejectClick={props.onRejectClick}
        onAcceptClick={props.onAcceptClick}
      />
    );
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // https://stackoverflow.com/questions/42363198/how-to-add-close-icon-in-material-ui-dialog-header-top-right-corner
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box display="flex" flexDirection="column">
        <Box flex={1} display="flex" alignItems="center" flexDirection="row">
          <Box flexGrow={1}>
            <Typography variant="h4" color="textPrimary">
              <b>Frequest</b>
            </Typography>
          </Box>
          <Box>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        <Box flex={4}>
          <Typography variant="subtitle1" color="textPrimary" style={{ padding: "7px 0" }}>
            <b>Received Frequests</b>
          </Typography>
          <Box display="flex" alignItems="center" flexDirection="column" style={{ paddingBottom: "5px" }}>
            {props.frequests.length === 0 ? (
              <Typography variant="body1" color="textPrimary">
                You have received no frequests
              </Typography>
            ) : (
              props.frequests.map(fillTable)
            )}
          </Box>
        </Box>
        <Divider />
        <Box flex={4}>
          <Typography variant="subtitle1" color="textPrimary" style={{ padding: "7px 0" }}>
            <b>Send a Frequest</b>
          </Typography>
          <SearchBar />
        </Box>
      </Box>
    </div>
  );

  return (
    <div className={classes.mailIcon}>
      <IconButton onClick={handleOpen}>
        {props.frequests.length === 0 ? (
          <MailIcon />
        ) : (
          <Badge badgeContent={props.frequests.length} color="primary">
            <MailIcon />
          </Badge>
        )}
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
