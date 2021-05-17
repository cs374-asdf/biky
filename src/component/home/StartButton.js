import React from 'react';

export default function StartButton(props) {
  const style = props.style;

  return (
    <div className={style.button}>
      <div className={style.text}>
        Start Ride
      </div>
    </div>
  )
}