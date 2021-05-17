import React from 'react';

export default function StopButton(props) {
  const style = props.style;

  return (
    <div className={style.button}>
      <div className={style.text}>
        Stop Ride
      </div>
    </div>
  )
}