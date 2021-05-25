import "@fontsource/roboto";

import Avatar from "../component/Avatar";
import Box from "@material-ui/core/Box";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { badges } from '../data/badge'
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const logo = '/images/logo.png'

const taxi = '/images/home/metaphor_taxi.png'
const burger = '/images/home/metaphor_burger.png'
const tree = '/images/home/metaphor_tree.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
  },

  badgeBox: {
    width: '100%',
    height: '100%',
  },
  badge: {
    // position: "absolute",
    // margin: "0 auto",
    display: 'inline-block',
    width: '100%',
    top: '100%',
    // transform: "translateY(-50%)"
  },


  page: {
    position: 'relative',
    // maxWidth: "550px",
    margin: '0 auto',
    // border: "solid 1px blue",
  },
  verticalAlign: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'inline-block',
  },
  header: {
    position: 'relative',
    height: '49px',
    fontSize: '30px',
    fontWeight: 'bold',
    borderBottom: 'solid 1px black',
    textAlign: 'center',
  },
  content: {
    position: 'relative',
    height: 'calc(100vh - 110px)',
    overflow: 'scroll',
    // border: 'solid 1px black',
  },

  bold: {
    fontWeight: 'bold',
    fontSize: '20px',
  },

  roundBox: {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '5px',
    padding: '15px',
    // border: "solid 1px black",
  },
  avatar: {
    position: 'relative',
    display: 'inline-block',
    textAlign: 'center',
    // width: '30%',
    width: "90px",
    height: '100%',
    // border: "solid 1px black",
  },
  personalInfo: {
    // position: "absolute",
    display: 'inline-block',
    width: 'calc(100% - 90px - 10px)',
    // border: "solid 1px black",
    // top: "50%",
    marginLeft: '10px',
    // transform: "translateY(-50%)",
    lineHeight: '200%',
  },
  recordsContainer: {
    position: 'relative',
    width: '100%',
    margin: '15px 0',
    // border: "solid 1px black",
  },
  metaphorContainer: {
    position: 'relative',
    width: '100%',
    // border: "solid 1px black",
  },
  metaphorItem: {
    position: 'relative',
    display: 'inline-block',
    width: 'calc(100% / 3)',
    // border: "solid 1px black",
  },

    badgeBox: {
    width: "100%",
    height: "100%",
    maxHeight: "50px",
    maxWidth: "50px",
    overflow: "hidden",
  },
  badge: {
    margin: "auto",
    display: "block",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },

}));


function ShowMetaphors(image, val) {
  const classes = useStyles()

  return (
    <div className={classes.metaphorItem} style={ image === taxi ? { minWidth: "130px" } : {}}>
      <img
        src={process.env.PUBLIC_URL + image}
        width="60%"
        style={{ width: '50px' }}
      />
      <div
        style={{
          position: 'absolute',
          display: 'inline-block',
          // border: "solid 1px black",
          // textAlign: 'center',
          width: 'calc(40% - 10px)',
          top: '50%',
          transform: 'translateY(-50%)',
          marginLeft: "10px",
        }}
      >
        {val}
      </div>
    </div>
  )
}


export default function MyPage({mainBadge}) {
  const classes = useStyles();
  let history = useHistory();

  function handleClick() {
    history.push("/biky/badgeDetail")

  }

  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <div className={classes.verticalAlign}>My Page</div>
      </div>

      <div className={classes.content}>
        <Box fontFamily="roboto" p={'10px'}>
          <div>
            <Box className={classes.roundBox}>
              <div style={{ position: 'relative' }}>
                <div className={classes.avatar}>
                  <div>
                    <div
                      style={{ display: 'inline-block', marginBottom: '5px' }}
                    >
                      {/* <Avatar/> */}
                      <img
                        src={process.env.PUBLIC_URL + '/images/nayeon.png'}
                        width="100%"
                        alt="profile"
                      />
                    </div>
                  </div>
                  Nayeon Min
                </div>

                <div className={classes.personalInfo} style={{ whiteSpace: "nowrap" }}>
                  {/* <Typography> */}
                    Age: 28
                    <br />
                    Gender: Female
                    <br />
                    Job: Freelancer Designer
                    <br />
                    Favorite: Boramae Park
                    <br />
                  {/* </Typography> */}
                </div>
              </div>
            </Box>

            <Box className={classes.recordsContainer}>
              <Box className={classes.roundBox}>
                              <Typography className={classes.bold}>Records</Typography>

                <Typography
                  style={{ marginBottom: '10px', lineHeight: '200%' }}
                >
                  You rode a bike for &nbsp;
                  <div style={{ fontWeight: 'bold', fontSize: '18px', display: "inline-block" }}>
                    1029.9km and 47.7hrs!
                  </div>
                </Typography>
                <div className={classes.metaphorContainer}>
                  {ShowMetaphors(taxi, "1,031,870")}
                  {ShowMetaphors(burger, "103.5")}
                  {ShowMetaphors(tree, "51.49")}
                </div>
              </Box>
            </Box>

      <div>
        <Paper className={classes.paper} onClick={handleClick}>
          <Typography className={classes.bold} style={{ marginBottom: "10px" }}>
          Representative Badge
        </Typography>

          <Grid container spacing={2}>
            <Grid item>
              <Box className={classes.badgeBox}>
                <img
                  className={classes.badge}
                  src={
                    process.env.PUBLIC_URL +
                    badges[mainBadge].thumbnail
                  }
                  alt="대표 뱃지"
                />
              </Box>
            </Grid>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h6">
                  {badges[mainBadge].title}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="body2">
                  {badges[mainBadge].description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>

          </div>
        </Box>
      </div>
    </div>
  )
}
