import "@fontsource/roboto";

import Box from "@material-ui/core/Box";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const logo = '/images/logo.png'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
  badgeBox: {
    width: "100%",
    height: "100%",
  },
  badge: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  buttonBase: {
    width: "100%",
  },
}));

export default function MyPage() {
  const classes = useStyles();

  function handleClick() {
    window.location.replace("/badgeDetail");
  }

  return (
    <Box fontFamily="roboto" p={3} height="100vh">
      <div>
        <Box mb={2} bgcolor="#ffc400">
          personal information
        </Box>

        <Box mt={2}>
          <Typography>Records</Typography>
          <Box bgcolor="primary.main">1000km 탔네요!</Box>
        </Box>

        <div className={classes.root}>
          <Typography>Badge</Typography>

          <Paper
            className={classes.paper}
            onClick={() => {
              handleClick();
            }}
          >
            <ButtonBase className={classes.buttonBase}>
              <Grid container spacing={2}>
                <Grid item>
                  <Box className={classes.badgeBox}>
                    <img className={classes.badge} src={logo} />
                  </Box>
                </Grid>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="h6" align="left">
                      배지 이름
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body2" align="left">
                      배지 설명asdfasdfasdfasdfasdfasdfs
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </ButtonBase>
          </Paper>
        </div>
      </div>
    </Box>
  );
}
