import AppBar from "@material-ui/core/AppBar";
import CheckIcon from "@material-ui/icons/Check";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    top: `50%`,
    left: `50%`,
    position: "absolute",
    width: "80%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    transform: `translate(-50%, -50%)`,
    maxHeight: "80vh",
    overflow: "scroll",
    padding: 0,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  selected: {
    border: "2px solid #4caf50",
  },

  unselected: { backgroundColor: "white", opacity: 0.6 },

  gridList: {},
}));

const modalStyle = {
  top: "50%",
  left: "50%",
  transform: `translate(-${50}%, -${50}%)`,
};

const allPictures = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
];

function MyAppBar({ onSubmit }) {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
            Photos
          </Typography>

          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
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

  // TODO 공식문서에는 이렇게 하라고 되어있음. 그런데 이렇게 하면 한 column에 모든 사진이 있음
  // const Pictures = React.forwardRef((props, ref) =>
  //   allPictures.map((pic) => (
  //     <GridList cellHeight={160} className={classes.gridList} cols={3}>
  //       <GridListTile ref={ref} key={pic} cols={1} onClick={() => togglePic(pic)}
  //         className={selected.includes(pic) ? classes.selected : classes.unselected}
  //       >
  //         <img src={process.env.PUBLIC_URL + pic} alt="bike" />
  //       </GridListTile>
  //     </GridList>
  //   )));

  if (!pictures) return <div> 로딩중 </div>;

  return (
    <div className={classes.paper}>
      <MyAppBar onSubmit={handleSubmit} />
      {/* <Pictures /> */}

      <GridList
        cellHeight={200}
        className={classes.gridList}
        cols={3}
        style={{ padding: "1%" }}
      >
        {allPictures.map((pic) => (
          <GridListTile
            key={pic}
            cols={1}
            onClick={() => togglePic(pic)}
            className={
              selected.includes(pic) ? classes.selected : classes.unselected
            }
            spacing={2}
          >
            <img src={process.env.PUBLIC_URL + pic} alt="bike" />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
