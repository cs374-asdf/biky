import React from 'react'
import { Button, Typography } from '@material-ui/core'

export default function StartButton(props) {
  const style = props.style

  return (
    // <div
    //   className={style.button}
    //   style={{ backgroundColor: 'green', color: 'white' }}
    // >
    //   <div className={style.text}>Start Ride</div>
    // </div>

    <Button className={style.button} variant="contained" color="primary">
      <Typography className={style.text} color="textPrimary">
        Start Ride
      </Typography>
    </Button>
  )
}
