import React, {useState} from 'react';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import background from "../img/LoadingBackground.png";
import Typography from '@material-ui/core/Typography';

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
  root: {
    minWidth: 275,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
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
    
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
    }}>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography variant="h5">
            Login
          </Typography>
        
          <div>
            <div>
              <input 
                type="id"
                name="id"
                onChange={onChange}
                placeholder="Enter ID" />
            </div>

            <div>
              <input
                type="password"
                name="password"
                onChange={onChange} 
                placeholder="Enter password">  
              </input>
            </div>
          </div>

          <MyButton onClick={handleSubmit}>Submit</MyButton>
        </CardContent>
      </Card>
    </div>
  );
}