import DeleteIcon from '@material-ui/icons/Delete';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '80%'
    },
  },

  hashtagGroup: {
    display: 'flex',
    flexDirection: 'row'
  },

  picture: {

  },

  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },

}));

export default function PictureList({ pictures, removePicture, isEditing }) {
  const classes = useStyles();

  return (
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {pictures.map(pic => <GridListTile key={pic} className={classes.picture}>
          <img src={process.env.PUBLIC_URL + pic} alt="bike" />

          {isEditing && 
            <GridListTileBar
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`delete ${pic}`} onClick={() => removePicture(pic)}>
                  <DeleteIcon className={classes.title} />
                </IconButton>
              }
            />
          }
        </GridListTile>)}
      </GridList>
  );
}