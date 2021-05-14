import { Button, Card, CardMedia } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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

  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

}));

const modalStyle = {
  top: '50%',
  left: '50%',
  transform: `translate(-${50}%, -${50}%)`,
}

const allPictures = ['picture1', 'picture2']

function MyAppBar({ handleSubmit }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
            Photos
          </Typography>

          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu"
            onClick={handleSubmit}
          >
            <CheckIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default function PictureSelector({ pictures, onSubmit }) {

  const handleSubmit = () => {
    console.log(pictures)
    onSubmit(pictures)
  }

  return <div>
    <MyAppBar onSubmit={handleSubmit} />

    {allPictures.map(
      picture =>
        <Card>
          picture
          <CardMedia>

          </CardMedia>
        </Card>
    )}

    사진을 추가해보시지
  </div>
}