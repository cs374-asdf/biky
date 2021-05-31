import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { spacing } from '@material-ui/system'
import { styled } from '@material-ui/core/styles'
import { useHistory } from "react-router-dom";

const logo = '/images/logo.png'

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  width: '60%',
  height: '40px',
  padding: '0 30px',
  marginBottom: '10px',
})

const useStyles = makeStyles((theme) => ({
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'linear-gradient(0deg, #FFEDE8, #FFFFF5)',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
  },
  logo: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(34),
  },
  character: {
    width: '60%',
  },
}))

export default function LoginInitial() {
  const classes = useStyles()
  let history = useHistory();


  function handleClick() {
    history.push('/biky/login')
  }

  return (
    <div className={classes.background}>
      <CssBaseline />
      <Grid container className={classes.logo} justify="center">
        <img src={process.env.PUBLIC_URL + logo} alt="logo" />
      </Grid>
      <Grid container alignItems="center" direction="column" spacing={1}>
        <MyButton onClick={handleClick}>
          Log in
        </MyButton>
        <Typography
          className={classes.character}
          align="center"
          variant="body2"
        >
          Don't have an account?
        </Typography>
         <div onClick={() => alert("Please look for next update for sign up!")}> <b>SIGN UP</b> </div>
  
      </Grid>
    </div>
  )
}
