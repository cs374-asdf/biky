import AppBar from '@material-ui/core/AppBar';
import CheckIcon from '@material-ui/icons/Check';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
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

  selected: {
    border: '2px solid orange',
  },

  unselected: {

  },

  gridList: {

  },

}));

const modalStyle = {
  top: '50%',
  left: '50%',
  transform: `translate(-${50}%, -${50}%)`,
}

const allPictures = ['/images/photo1.jpg', '/images/photo2.jpg', '/images/photo3.jpg']

function MyAppBar({ onSubmit }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
            Photos
          </Typography>

          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu"
            onClick={onSubmit}
          >
            <CheckIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default function PictureSelector({ pictures, onSubmit }) {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(pictures)

  const handleSubmit = () => {
    console.log(selected)
    onSubmit(selected)
  }

  const togglePic = (pic) => {
    if (selected.includes(pic))
      setSelected(selected.filter(item => item !== pic))

    else
      setSelected([...selected, pic])
  }

  return <div>
    <MyAppBar onSubmit={handleSubmit} />

    <GridList cellHeight={160} className={classes.gridList} cols={3}>
      {allPictures.map((pic) => (
        <GridListTile key={pic} cols={1} onClick={() => togglePic(pic)}
          className={selected.includes(pic) ? classes.selected : classes.unselected}
        >
          <img src={process.env.PUBLIC_URL + pic} alt="bike" />
        </GridListTile>
      ))}
    </GridList>

    사진을 추가해보시지
  </div>
}
