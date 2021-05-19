import { IconButton, Typography } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
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
    <div style={{ margin: "5px", marginTop: "5px", width: "100%"}}>
      <Accordion expanded={false} style={{ boxShadow: "0px 1.77918px 3.55836px rgba(0, 0, 0, 0.25)" }}>
        <AccordionSummary>
          <Box 
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            flexDirection="row"
            width="100%"
          >
            <Box flex={1} mr={1}>
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
            <Box flex={8} mr={2} style={{ minWidth: "75px" }}>
              <Typography variant="body2" color="textPrimary">
                {props.name}
              </Typography>
            </Box>

            <Box>
              <div style={{ display: "inline-block", marginRight: "10px" }}>
                <IconButton
                  style={{ color: "green", width: "30px", height: "30px" }}
                  onClick={() => {
                    props.onAcceptClick(props.oid);
                  }}
                >
                  <CheckCircleIcon />
                </IconButton>
              </div>
              <div style={{ display: "inline-block" }}>
                <IconButton
                  style={{ color: "red", width: "30px", height: "30px" }}
                  onClick={() => {
                    props.onRejectClick(props.oid);
                  }}
                >
                  <CancelIcon />
                </IconButton>
              </div>
            </Box>
          </Box>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}

export default function Frequest(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState({
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    maxHeight: "80vh",
    overflow: "scroll"
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
            <IconButton onClick={handleClose} style={{ width: "30px", height: "30px" }}>
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

        <Divider style={{ margin: "10px 0" }} />

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
