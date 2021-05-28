import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react'

export default function Loading()
{
  return <div style={{
    // position: 'fixed',
    width: '100%',
    height: '100%',
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  }}>
    <CircularProgress color="secondary" /> 
    </div>
} 