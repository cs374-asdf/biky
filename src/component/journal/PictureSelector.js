import { allPhotos, getRandomPhoto } from '../../data/photo'

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Loading from '../Loading'
import MyAppBar from "./AppBar";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    top: `50%`,
    left: `50%`,
    position: "absolute",
    width: "80%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    transform: `translate(-50%, -50%)`,
    // maxHeight: "80vh",
    // overflowY: "scroll",
    overflowX: 'hidden'
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  selected: {
    border: "2px solid",
    borderColor: theme.palette.primary.main,
  },

  unselected: { 
    backgroundColor: "white", opacity: 0.6,
  },

  gridList: {
    padding: '2%',
  },
}));

export default function PictureSelector({ pictures, onSubmit }) {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(pictures);
  console.log(pictures);

  const handleSubmit = () => {
    onSubmit(selected);
  };

  const togglePic = (pic) => {
    if (selected.includes(pic))
      setSelected(selected.filter((item) => item !== pic));
    else setSelected([...selected, pic]);
  };

  if (!pictures) return <Loading/>;

  return (
    <div className={classes.paper}>
      <MyAppBar onSubmit={handleSubmit} string="Photo" />

      <GridList
        cellHeight={200}
        className={classes.gridList}
        cols={3}
      >
        {allPhotos.map((pic) => (
          <GridListTile
            key={pic}
            cols={1}
            onClick={() => togglePic(pic)}
            className={
              selected.includes(pic) ? classes.selected : classes.unselected
            }
          >
            <img src={process.env.PUBLIC_URL + pic} alt="bike" />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
