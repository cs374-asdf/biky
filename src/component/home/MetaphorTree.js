import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const tree = '/images/home/metaphor_tree.png'

const useStyles = makeStyles((theme) => ({
  background: {
    position: 'relative',
    background: 'linear-gradient(45deg, #73A15D, #94C25A)',
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
    // fontSize: '15px',
    // fontWeight: 'bold',
    // margin: '0 auto',
    // border: "solid 1px black",
    width: 'calc(85% - 20px)',
    // paddingLeft: '10px',
    textAlign: 'center',
  },
}))

export default function MetaphorTree(props) {
  const classes = useStyles()
  var amount = props.amount

  return (
    <div className={classes.background}>
      <img src={process.env.PUBLIC_URL + tree} alt="" className={classes.img} />
      <Typography className={classes.text} variant="h6">
        You planted {(amount * 0.05).toFixed(3).replace(/(0+$)/, '')} trees!
      </Typography>
    </div>
  )
}
