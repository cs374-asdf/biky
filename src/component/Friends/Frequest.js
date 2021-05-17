import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import MailIcon from "@material-ui/icons/Mail";
import Badge from "@material-ui/core/Badge";

// https://material-ui.com/components/modal/

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "80%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ReceivedElement(props) {
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
          alt={props.name}
          src={process.env.PUBLIC_URL + props.picture}
          style={{
            border: "2px solid lightgray",
          }}
        />
      </Box>
      <Box flex={2} mr={4}>
        <Typography variant="body2" color="textPrimary">
          {props.name}
        </Typography>
      </Box>
      <Box flex={1}>
        <IconButton
          style={{ color: "green" }}
          onClick={() => {
            props.onAcceptClick(props.oid);
          }}
        >
          <CheckCircleIcon />
        </IconButton>
      </Box>
      <Box flex={1}>
        <IconButton
          style={{ color: "red" }}
          onClick={() => {
            props.onRejectClick(props.oid);
          }}
        >
          <CancelIcon />
        </IconButton>
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
              Frequest
            </Typography>
          </Box>
          <Box>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <Box flex={4}>
          <Typography variant="subtitle1" color="textPrimary">
            받은 신청
          </Typography>
          <Box display="flex" alignItems="center" flexDirection="column">
            {props.frequests.length === 0 ? (
              <Typography variant="body1" color="textPrimary">
                받은 친구 신청이 없습니다
              </Typography>
            ) : (
              props.frequests.map(fillTable)
            )}
          </Box>
        </Box>
        <Divider />
        <Box flex={4}>
          <Typography variant="subtitle1" color="textPrimary">
            신청 보내기
          </Typography>
          <Typography variant="subtitle1" color="textPrimary">
            상아님의 searachbar 넣을 예정
          </Typography>
        </Box>
      </Box>
    </div>
  );

  return (
    <div style={{ marginTop: "5px", marginRight: "5px" }}>
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
