import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Link } from 'react-router-dom';
import PictureList from './PictureList';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '80%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

  },
}));

const modalStyle = {
  top: '50%',
  left: '50%',
  transform: `translate(-${50}%, -${50}%)`,
}

function getDivs(items) {
  return items.map(item => <div> {item} </div>)
}

function getMetaphors(metaphor) {
  return <div>
    <div> 나무 {metaphor.tree} 그루 </div>
    <div> 택시 {metaphor.taxi} 번 </div>
    <div> 햄버거 {metaphor.hamburger} 개 </div>
  </div>
}

function openJournalEditor(journal) {
  console.log("opening journal")
}

export default function JournalDetail({ journal }) {
  const classes = useStyles();

  return (
    <div style={modalStyle} className={classes.paper}>
      <Card onClick={() => openJournalEditor(journal)}>
        <CardHeader
          title={journal.title} />
        <CardContent>{journal.desc}</CardContent>
        <CardContent>{getDivs(journal.friends)}</CardContent>
        <CardContent>{getDivs(journal.hashtags)}</CardContent>
        <CardContent>{getDivs(journal.emojis)}

          <PictureList pictures={journal.photos} isEditing={false} />

        </CardContent>
        <CardContent>{journal.distance} km</CardContent>
        {/* <CardContent>{journal.time} </CardContent> */}
        <CardContent>{journal.weather} </CardContent>
        <CardContent>{getMetaphors(journal.metaphor)} </CardContent>
        <CardContent>{journal.map} </CardContent>
      </Card >
      <Button disabled={false} onClick={() => console.log("수정")}>
        <Link to="/edit/1">수정</Link>
      </Button>
      <Button onClick={() => alert("삭제")}>
        삭제
        </Button>

    </div>
  );
}