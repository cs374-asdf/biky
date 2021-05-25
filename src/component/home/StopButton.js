import { Button, Typography } from '@material-ui/core'

import React from 'react';

export default function StopButton(props) {
  const style = props.style;

  return (
    <Button className={style.button} variant="contained" style={{backgroundColor: 'red'}}>
      <Typography className={style.text} color="white">
        Stop Ride
      </Typography>
    </Button>
  )
}