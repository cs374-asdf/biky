import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import Box from '@material-ui/core/Box';
// https://material-ui.com/components/modal/

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

export default function Frequest() {
  const classes = useStyles();
  const [modalStyle] = React.useState({top: `50%`, left: `50%`,transform: `translate(-50%, -50%)`,});
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
// https://stackoverflow.com/questions/42363198/how-to-add-close-icon-in-material-ui-dialog-header-top-right-corner
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">
        
        <Box display="flex" alignItems="center">
            <Box flexGrow = {1}>Frequest</Box>
            <Box>
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                    </IconButton>
                </Box>
        </Box>
        </h2>
      <p id="simple-modal-description">
        Hello 맹구다 맹구
      </p>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Frequest Mail
      </button>
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
