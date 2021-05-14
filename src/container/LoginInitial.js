import React from 'react';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import background from "../img/LoadingBackground.png";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  width: '70%',
  height: '5vh',
  padding: '0 30px',
});


const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    bottom: 0,
  },
  grid: {
    flexGrow: 1,
    bottom: 0,
  },
}));

export default function LoginInitial() {
  const classes = useStyles();

  function handleClick() {
    window.location.replace ("/login")
  }

  return (
    <Container className={classes.background}>
      <CssBaseline />
      <div className={classes.grid}>
        <Grid container spacing={10}>
          <Grid container item xs={12} spacing={3}>
            <MyButton onClick = {handleClick}>Log in</MyButton>
          </Grid>
          
          <Grid container item xs={12} spacing={3}>
            <Typography>
              Don't have an account? <b>SIGN UP</b>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}