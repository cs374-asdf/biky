import { Button, Typography } from '@material-ui/core'

import React from 'react'

export default function StartButton(props) {
  const style = props.style

  return (

    <Button className={style.button} style={{backgroundColor: '#ff85ac'}} variant="contained">
      <Typography className={style.text} color="textPrimary">
        Start Ride
      </Typography>
    </Button>
  )
}
