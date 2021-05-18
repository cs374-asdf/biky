import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { CardActions } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Link } from 'react-router-dom';
import PictureList from './PictureList';
import React from 'react';
import dayjs from 'dayjs'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '80%',
    position: 'absolute',
    maxHeight: '80%',
    padding: theme.spacing(2, 4, 3),

  },
}));

const modalStyle = {
  top: '50%',
  left: '50%',
  position: 'absolute',
  overflow: 'scroll',
  transform: `translate(-${50}%, -${50}%)`,
}

function getDivs(items) {
  return items.map(item => <div key={item}> {item} </div>)
}

function getMetaphors(metaphor) {
  return <div>
    <div> 나무 {metaphor.tree} 그루 </div>
    <div> 택시 {metaphor.taxi} 번 </div>
    <div> 햄버거 {metaphor.hamburger} 개 </div>
  </div>
}

function formatTime(time) {
  console.log('time: ', time)
  return dayjs(time).format('YYYY년 M월 D일 H시 m분') // '25/01/2019'
}

function getTime(start, end) {
  return <div>
    {formatTime(start)} 부터 {formatTime(end)} 까지
  </div>
}

export default function JournalDetail({ journal }) {
  const classes = useStyles();

  if (!journal)
    return null
    
  return (
    <Card style={modalStyle} className={classes.paper}>
      <CardHeader
        title={journal.title} />
      <CardContent>{journal.desc}</CardContent>
      {/* <CardContent>{getDivs(journal.friends)}</CardContent> */}
      <CardContent>{getDivs(journal.hashtags)}</CardContent>
      <CardContent>{getDivs(journal.emojis)}
        <PictureList pictures={journal.photos} isEditing={false} />
      </CardContent>
      <CardContent>{journal.distance} km</CardContent>
      <CardContent>
        {getTime(journal.startTime, journal.endTime)}
      </CardContent>
      <CardContent>{journal.weather} </CardContent>
      <CardContent>{getMetaphors(journal.metaphor)} </CardContent>
      <CardContent>{journal.map} </CardContent>
      <CardActions>
        <Button disabled={false}
          component={Link} to={`/edit/${journal.id}`}
        >
          수정
      </Button>
        <Button onClick={() => alert("삭제")}>
          삭제
        </Button>
      </CardActions>
    </Card >

  );
}