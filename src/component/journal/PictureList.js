import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import DeleteIcon from '@material-ui/icons/Delete';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

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

  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },

  gridList: {

  },

  picture: {

  }

}));



function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

const getGridListCols = (width) => {
  if (isWidthUp('xl', width)) {
    return 5;
  }

  if (isWidthUp('lg', width)) {
    return 4;
  }

  if (isWidthUp('md', width)) {
    return 3;
  }

  return 2;
}

const getGridListCellHeight = (width) => {
    if (isWidthUp('xl', width)) {
      return 400;
    }

    if (isWidthUp('lg', width)) {
      return 300;
    }

    return 200;
}

export default function PictureList({ pictures, removePicture, isEditing }) {
  const classes = useStyles();
  const width = useWidth();

  if (!pictures)
    return null

  const cols = getGridListCols(width)
  const cellHeight = getGridListCellHeight(width)
  
  return (
    <GridList cellHeight={cellHeight} className={classes.gridList} cols={cols} spacing={12}>
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