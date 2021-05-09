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

export default function JournalDetail({journal}) {
  const classes = useStyles();

  return (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{journal.title}</h2>
      <p id="simple-modal-description">
        {journal.desc}
      </p>
    </div>
  );
}