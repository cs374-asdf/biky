import React from 'react';

export default function Time(props) {
  const style = props.style;
  var time = props.time;

  return (
    <div className={style}>
        { time }
    </div>
  )
}