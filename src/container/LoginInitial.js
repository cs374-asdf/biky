import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';

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
});


const useStyles = makeStyles((theme) => ({
  background: {
    background: 'linear-gradient(0deg, #FFEDE8, #FFFFF5)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    bottom: 0,
  },
  logo: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(26),
  },
  character: {
    width: '60%'
  }
}));

export default function LoginInitial() {
  const classes = useStyles();

  function handleClick() {
    window.location.replace("/login")
  }

  return (
    <Container className={classes.background}>
      <CssBaseline />
      <Grid container className={classes.logo} justify="center">
        <img src={process.env.PUBLIC_URL + logo} alt="logo" />
      </Grid>
      <Grid container alignItems="center" direction="column" spacing={1}>
        <MyButton item onClick={handleClick}>Log in</MyButton>
        <Typography item className={classes.character} align="center" variant="body2">
          Don't have an account? <b>SIGN UP</b>
        </Typography>
      </Grid>
    </Container>
  );
}