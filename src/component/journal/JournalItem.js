import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import FriendSimpleView from './FriendSimpleView';
import { Link } from 'react-router-dom';
import React from 'react';
import {nullToList} from '../../util/format'
import {getIconComponent} from '../../util/icon'
import DateComponent from './DateComponent'

export function getDivs(items) {
  if (!items) return <div> empty </div>
  return items.map(item => <div key={item}> {item} </div>)
}

export function getFriends(friends) {
  if (!friends) return <div> no friends... </div>
  return friends.map(friend => <FriendSimpleView key={friend.id} friend={friend} />)
}


export function getMetaphors(metaphor) {
  if (!metaphor) return <div> empty metaphor </div>
  return <div>
    <div> 나무 {metaphor.tree} 그루 </div>
    <div> 택시 {metaphor.taxi} 번 </div>
    <div> 햄버거 {metaphor.hamburger} 개 </div>
  </div>
}

export default function JournalItem({ journal, openJournal, friends }) {
  if (!journal)
    return null;

  const emojis = nullToList(journal.emojis).map(getIconComponent)

  console.log(journal)
  return (
    <Card onClick={() => openJournal(journal)}>
      <CardHeader
        title={journal.title} />
      <CardContent>   <DateComponent startTime={journal.startTime} endTime={journal.endTime}/>
      <CardContent>{journal.desc}</CardContent>
      <CardContent>{getFriends(friends)}</CardContent>
      <CardContent>{getDivs(journal.hashtags)}</CardContent>
      <CardContent>{emojis}</CardContent>
      <CardContent>{journal.distance} km</CardContent>
      {/* TODO 적절한 양식으로 friends 보여주기! object의 배열임에 주의*/}

      {/* <CardContent> {journal.friends} </CardContent> */}
 </CardContent>
      <CardContent>{journal.weather} </CardContent>
      <CardContent>{getMetaphors(journal.metaphor)} </CardContent>
    </Card >
  );
}