import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IconButton } from '@material-ui/core'
import React from 'react'
import { useHistory } from "react-router-dom";

function getUrl(pageNum) {
  return `url(${process.env.PUBLIC_URL}/images/tutorial/${pageNum}.png)`
}


export default function Tutorial() {
  const [pageNum, setPageNum] = React.useState(0)
  let history = useHistory();


  const onPressPrev = () => {
    setPageNum(pageNum-1)
  }

  const onPressNext = () => {
    if (pageNum === 9)
      history.push("/biky/home");      
    else {
      setPageNum(pageNum+1)
    }
  }
  
  
  return <div style={{
    backgroundImage: getUrl(pageNum), 
    height: '100%',
    backgroundPosition: 'center', 
    backgroundSize: '100% 100%', 
    backgroundRepeat: 'no-repeat',
    display: 'contain',
    zIndex: -1
    }}>

      <div
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          display: 'flex'
        }}
      >
        <IconButton style={(pageNum > 1) ? {color: 'white'} : {color: 'transparent'}} onClick={onPressPrev}> 
        <ArrowBackIosIcon fontSize="large"/> 
        </IconButton >
        <IconButton style={{color: 'white'}} onClick={onPressNext}> 
          <ArrowForwardIosIcon fontSize="large"/> 
        </IconButton >
      </div>

  </div>
}