import React, { useState } from 'react'

import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

const badge0 = '/images/sick.jpg'
const badge1 = '/images/cat.png'
const badge2 = '/images/fry.png'
const badge3 = '/images/squirrel.png'

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
    maxHeight: '50px',
    maxWidth: '50px',
    overflow: 'hidden',
  },
  badge: {
    margin: 'auto',
    display: 'block',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
  eachBadge: {
    margin: theme.spacing(2, 0),
  },
  buttonBase: {
    width: '98%',
    borderBottom: 'dotted 1px lightgray',
  },
  arrow: {
    margin: theme.spacing(1, 1),
  },

  bold: {
    fontWeight: 'bold',
    fontSize: '20px',
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
}))

const badges = [
  {
    oid: 0,
    thumbnail: badge0,
    title: 'Ride a Bike Too Much',
    description:
      'You rode a bike too much and even did lots of assignments. You should take care of your body.',
  },
  {
    oid: 1,
    thumbnail: badge1,
    title: 'Meet lots of cute cats',
    description: 'You met lots of cute cats. Cats are perfect.',
  },
  {
    oid: 2,
    thumbnail: badge2,
    title: 'Become fried egg',
    description:
      'You rode a bike in sunny day very often. You may become fried egg.',
  },
  {
    oid: 3,
    thumbnail: badge3,
    title: 'Wow a squirrel',
    description:
      'You met a squirrel while riding a bike. It is very unique experience',
  },
]

export default function BadgeDetail() {
  const classes = useStyles()

  const [val, setVal] = useState({
    representativeBadge: 0,
  })

  function handleClick(value) {
    setVal({
      representativeBadge: value,
    })
  }

  function backward() {
    window.location.href = '/biky/myPage'
  }

  const eachBadge = badges.map((badge, idx) => (
    <ButtonBase
      className={classes.buttonBase}
      style={
        idx === val.representativeBadge ? { backgroundColor: 'lightgray' } : {}
      }
      onClick={() => {
        handleClick(badge.oid)
        console.log(val)
      }}
      key={idx}
    >
      <Grid container spacing={2} className={classes.eachBadge}>
        <Grid item>
          <Box className={classes.badgeBox}>
            <img
              className={classes.badge}
              src={process.env.PUBLIC_URL + badge.thumbnail}
              alt={badge.title}
            />
          </Box>
        </Grid>

        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography variant="h6" align="left">
              {badge.title}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body2" align="left">
              {badge.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ButtonBase>
  ))

  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <ButtonBase
          style={{
            position: 'absolute',
            left: '28px',
            top: '7%',
            display: 'inline-block',
          }}
        >
          <ArrowBackIosOutlinedIcon
            className={classes.arrow}
            onClick={() => {
              backward()
            }}
          ></ArrowBackIosOutlinedIcon>
        </ButtonBase>
        <div className={classes.verticalAlign}>My Page</div>
      </div>

      <div className={classes.content}>
        <Box p={3}>
          <div className={classes.root}>
            <Typography
              className={classes.bold}
              style={{ marginBottom: '10px' }}
            >
              Representative Badge
            </Typography>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <Box className={classes.badgeBox}>
                    <img
                      className={classes.badge}
                      src={
                        process.env.PUBLIC_URL +
                        badges[val.representativeBadge].thumbnail
                      }
                      alt="대표 뱃지"
                    />
                  </Box>
                </Grid>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="h6">
                      {badges[val.representativeBadge].title}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body2">
                      {badges[val.representativeBadge].description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>

          <div className={classes.root}>
            <Typography
              className={classes.bold}
              style={{ marginBottom: '10px' }}
            >
              Other Badges
            </Typography>
            <Box
              style={{
                border: 'solid 1px lightgray',
                overflow: 'hidden',
                // maxHeight: 'calc(100vh - 390px)',
                width: '100%',
              }}
            >
              {eachBadge}
            </Box>
          </div>
        </Box>
      </div>
    </div>
  )
}
