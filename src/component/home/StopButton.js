import { Button, Typography } from '@material-ui/core'

import React from 'react';

export default function StopButton(props) {
  const style = props.style;

  return (
    <Button
      className={style.button}
      variant="contained"
      style={{ backgroundColor: '#A9A9A9' }}
    >
      <Typography className={style.text}>Stop Ride</Typography>
    </Button>
  )
}