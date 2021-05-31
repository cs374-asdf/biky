// </>
//   )
// }

import "@tensorflow/tfjs-backend-cpu";

import * as cocoSsd from "@tensorflow-models/coco-ssd";

import {
  Button,
  IconButton,
  Theme,
  Tooltip,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";

import { PhotoCamera } from "@material-ui/icons";

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
    color: theme.palette.primary.main,
  },
}));

export default function PhotoUploader({ onSubmit, addHashtag }) {
  const classes = useStyles();
  const [imgData, setImgData] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const readImage = (file) => {
    return new Promise((rs, rj) => {
      const fileReader = new FileReader();
      fileReader.onload = () => rs(fileReader.result);
      fileReader.onerror = () => rj(fileReader.error);
      fileReader.readAsDataURL(file);
    });
  };

  const detectObjectsOnImage = async (imageElement) => {
    // 이 이미지 지웠을 때에 hashtag 지우는 방식 알아내야 함
    const model = await cocoSsd.load({});
    const newp = await model.detect(imageElement, 2);
    const result = newp.map((value) => value.class);
    setPredictions(predictions.concat(result));
    console.log(result);
    addHashtag(result);
  };

  const handleSubmit = async ({ target }) => {
    setLoading(true);
    onSubmit(Array.from(target.files));

    for (var i = 0; i < target.files.length; i++) {
      var file = target.files[i];
      // create 하고 지우는 이상한 짓 안하고 생긴 image 가져다 쓸 방안? 지금 저기서 만든 친구를 가져다 쓰려면 CORS 쓰면서 난리남..
      var imageElement = document.createElement("img");
      var imgData = await readImage(file);
      imageElement.src = imgData;

      imageElement.onload = async () => {
        await detectObjectsOnImage(imageElement);
        setLoading(false);
        imageElement.remove();
      };
    }
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
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera fontSize="large" />
          </IconButton>
        </label>
      </Tooltip>
    </>
  );
}
