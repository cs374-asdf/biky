import { deepOrange, deepPurple } from '@material-ui/core/colors'

import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      // margin: theme.spacing(1),
    },
  },
}))

export default function LetterAvatars() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Avatar
        src={process.env.PUBLIC_URL + '/images/nayeon.png'}
        component={Link}
        to="/biky/myPage"
      />
    </div>
  )
}
