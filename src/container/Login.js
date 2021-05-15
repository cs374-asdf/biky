import React, {useState} from 'react';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  width: 400,
  height: 50,
  padding: '0 30px',
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
  grid: {
    margin: 'auto',
  }
}));

export default function Login() {
  const classes = useStyles();

  const [val, setVal] = useState({
    id : "id123",
    password : "password123",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`아이디: ${val.id} 비밀번호: ${val.password}`);
    window.location.replace ("/diary")
  }

  const onChange = (e) => {
    const {name, value} = e.target;
    setVal({
      ...val,
      [name]: value,
    })
  }

  return (
    
    <Container className={classes.background}>
      <Box className={classes.root}>
        <Typography variant="h5">
          Login
        </Typography>
      
        <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={8}>
            <TextField 
              type="id"
              name="id"
              required
              fullWidth
              variant="outlined"
              onChange={onChange}
              placeholder="Enter ID"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="password"
              name="password"
              required
              fullWidth
              variant="outlined"
              onChange={onChange} 
              placeholder="Enter password" 
            />
          </Grid>
        </Grid>

        <MyButton onClick={handleSubmit}>Submit</MyButton>
      </Box>
    </Container>
  );
}