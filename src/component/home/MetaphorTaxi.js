import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const taxi = '/images/home/metaphor_taxi.png'

const useStyles = makeStyles((theme) => ({
  background: {
    position: 'relative',
    background: 'linear-gradient(45deg, #A0BFE3, #F0A2B0)',
    borderRadius: '10px',
    padding: '10px',
  },
  img: {
    display: 'inline-block',
    // border: "solid 1px black",
    width: '15%',
  },
  text: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'inline-block',
    color: 'white',
    // fontSize: "15px",
    // fontWeight: "bold",
    // margin: "0 auto",
    // border: "solid 1px black",
    width: 'calc(85% - 20px)',
    // paddingLeft: "10px",
    textAlign: 'center',
  },
}))

export default function MetaphorTaxi(props) {
  const classes = useStyles()
  var amount = props.amount

  return (
    <div className={classes.background}>
      <img
        src={process.env.PUBLIC_URL + taxi}
        alt="taxi"
        className={classes.img}
      />
      <Typography className={classes.text} variant="h6">
        You saved {amount * 1000} won!
      </Typography>
    </div>
  )
}
