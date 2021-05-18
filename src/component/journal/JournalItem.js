import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import React from 'react';

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



export default function JournalItem({ journal, openJournal }) {
  if (!journal)
    return null;

  console.log(journal)
  return (
    <Card onClick={() => openJournal(journal)}>
      <CardHeader
        title={journal.title} />
      <CardContent>{journal.desc}</CardContent>

      <CardContent>{getDivs(journal.hashtags)}</CardContent>
      <CardContent>{getDivs(journal.emojis)}</CardContent>
      <CardContent>{journal.distance} km</CardContent>
      {/* <CardContent> {journal.friends} </CardContent> */}
      {/* <CardContent>{journal.time} </CardContent> */}
      <CardContent>{journal.weather} </CardContent>
      <CardContent>{getMetaphors(journal.metaphor)} </CardContent>
      <CardContent>{journal.map} </CardContent>
    </Card >
  );
}