import React from 'react'
import { Button, Typography } from '@material-ui/core'

export default function StartButton(props) {
  const style = props.style

  return (

    <Button className={style.button} variant="contained" color="primary">
      <Typography className={style.text} color="textPrimary">
        Start Ride
      </Typography>
    </Button>
  )
}
