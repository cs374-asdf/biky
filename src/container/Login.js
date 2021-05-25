import React, { useState } from 'react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { styled } from '@material-ui/core/styles'
import { useHistory } from "react-router-dom";

const logo = '/images/logo.png'

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  width: '60vw',
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
  grid: {
    margin: 'auto',
  },
  textField: {
    width: '60vw',
    background: '#FFFFFF',
    marginBottom: '2vh'
  },
  submit: {
    marginTop: '3vh',
  },
  login: {
    marginBottom: '2vh',
  },
  logo: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(15),
  },

  form: {
    display: "flex",
    alignItems:"center",
    flexDirection:"column",
  }
}))

export default function Login() {
  const classes = useStyles()

  const [val, setVal] = useState({
    id: 'id123',
    password: 'password123',
  })

  let history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault()
    if (val.id.length === 0)
    {
      alert("You should enter ID!")
      return
    }

    if (val.password.length === 0)
    {
      alert("You should enter password!")
      return
    }

    // alert(`아이디: ${val.id} 비밀번호: ${val.password}`)
    history.push(`/biky/home`);
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setVal({
      ...val,
      [name]: value,
    })
  }

  return (
    <div className={classes.background}>
      {/* <Box className={classes.root}> */}
        <Grid container className={classes.logo} justify="center">
          <img src={process.env.PUBLIC_URL + logo} alt="logo" />
        </Grid>


        <div className={classes.form}>
            <Typography variant="h5" className={classes.login}>
              Login
            </Typography>
            
            <TextField
              type="id"
              name="id"
              required
              fullWidth
              variant="outlined"
              onChange={onChange}
              placeholder="Enter ID"
              className={classes.textField}
            />
            
            <form onSubmit={handleSubmit}>
            <TextField
              type="password"
              name="password"
              required
              fullWidth
              variant="outlined"
              onChange={onChange}
              placeholder="Enter password"
              className={classes.textField}
            />
          </form>

          <MyButton onClick={handleSubmit} className={classes.submit}>
            Submit
          </MyButton>
        </div>

    </div>
  )
}
