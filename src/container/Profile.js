// import '../index.css'

import { deepOrange, deepPurple } from '@material-ui/core/colors'

import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
    position: 'relative',
  },
  container: {display: 'flex', 
  textDecorationLine: 'none',
  textDecorationColor: 'black',
  alignItems: 'center', justifyContent: 'flex-end', margin: '5px'}

}))

export default function Profile() {
  const classes = useStyles()

  return (
      <div className={classes.root}>
        <Link className={classes.container} to="/biky/myPage">
          <div style={{marginRight: '10px'}}> Nayeon Min </div>
          <div>       
            <Avatar
              src={process.env.PUBLIC_URL + '/images/nayeon.png'}
              // component={Link}
              // to="/biky/myPage"
              />
          </div>
        </Link>
      </div>
  )
}
