import React from 'react';
import Typography from '@material-ui/core/Typography';
import dayjs from 'dayjs';

export default function DateComponent({startTime, endTime})
{

  const formatted = dayjs(startTime).format("YYYY. M. D.")
  const start = dayjs(startTime).format("H시 M분")
  const end = dayjs(endTime).format('H시 M분')
  return <div> 
    <Typography variant="h6">
      {formatted}
    </Typography>
    <Typography>
      {start} 부터 {end} 까지
    </Typography>
    </div>
}
