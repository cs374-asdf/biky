import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';

function getDivs(items) {
  return items.map(item => <div> {item} </div>)

}

function getFriends(friends) {
  return friends.map(friend => <div> {friend} </div>)
}

function getMetaphors(metaphor) {
  return <div>
    <div> 나무 {metaphor.tree} 그루 </div>
    <div> 택시 {metaphor.taxi} 번 </div>
    <div> 햄버거 {metaphor.hamburger} 개 </div>
  </div>
}

export default function JournalItem({ journal, openJournal }) {
  return (
    <Card onClick={() => openJournal(journal)}>
      <CardHeader
        title={journal.title} />
      <CardContent>{journal.desc}</CardContent>
      <CardContent>{getDivs(journal.friends)}</CardContent>
      <CardContent>{getDivs(journal.hashtags)}</CardContent>
      <CardContent>{getDivs(journal.photos)}</CardContent>
      <CardContent>{getDivs(journal.emojis)}</CardContent>
      <CardContent>{journal.distance} km</CardContent>
      {/* <CardContent>{journal.time} </CardContent> */}
      <CardContent>{journal.weather} </CardContent>
      <CardContent>{getMetaphors(journal.metaphor)} </CardContent>
      <CardContent>{journal.map} </CardContent>
    </Card >
  );
}

/*
    {
      title: '제목1', desc: '내용1',
      friends: ['friend1'],
      hashtags: ['happy'],
      photos: ['../'],
      emojis: ["happy", "exited"],
      distance: 100,
      time: new Date(),
      weather: "sunny",
      metaphor: { tree: 1, taxi: 2, hamburger: 3 },
      map: "../"
    },
*/