import React from 'react';

export default function Distance(props) {
  const style = props.style;
  var distance = props.distance;

  return (
    <div className={style} style={{ width: "100px" }}>
        { distance }
    </div>
  )
}