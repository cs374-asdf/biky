import Box from "@material-ui/core/Box";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const ProgressStyles = makeStyles((theme) => ({
  pro_bar: {
    backgroundColor: "hsl(0, 0%, 97%)",
    height: "4px",
    marginBottom: "12px",
    marginTop: "12px",
    position: "relative",
  },

  progress_bar_inner: {
    display: "block",
    width: 0,
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#ff85ac",
    transition: "width 1s linear 0s",
    "&::after": {
      content: `""`,
      width: "32px",
      height: "29px",
      backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bike.png"})`,
      backgroundSize: "contain",
      borderRadius: "50%",
      position: "absolute",
      right: "-4px",
      top: "-20px",
    },
  },
}));
// https://bestjquery.com/tutorial/progress-bar/demo17/

export default function LinearProgressBar(props) {
  const classes = ProgressStyles();
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Box flex={5} style={{ transform: "translateY(8px)" }}>
        <div className={classes.pro_bar}>
          <div
            className={classes.progress_bar_inner}
            style={{
              width: props.value + "%",
            }}
            data-value={props.value}
            data-percentage-value={props.value}
          ></div>
        </div>
      </Box>
      {/* <Box flex={1}>
        <Typography variant="body2" color="textPrimary" align="right">
          {props.value}%
        </Typography>
      </Box> */}
    </Box>
  );
}