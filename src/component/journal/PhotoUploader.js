// </>
//   )
// }
import {
  Button,
  IconButton,
  Theme,
  Tooltip,
  makeStyles,
} from "@material-ui/core";

import { PhotoCamera } from "@material-ui/icons";
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  photoSelector: {
    color: theme.palette.primary.light,
  },
}));


export default function PhotoUploader ({ onSubmit }) {

  const classes = useStyles();

  const handleSubmit = async ({target}) => {
    const downloadURL = await onSubmit(Array.from(target.files))
    console.log(downloadURL)
  };

  return (
    <>
      <input
        accept="image/jpeg"
        className={classes.input}
        id="photoSelector"
        type="file"
        multiple
        onChange={handleSubmit}
      />
      <Tooltip title="Select Image">
        <label htmlFor="photoSelector">
          <IconButton
            className={classes.photoSelector}
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera fontSize="large" />
          </IconButton>
        </label>
      </Tooltip>
    </>
  );
};

