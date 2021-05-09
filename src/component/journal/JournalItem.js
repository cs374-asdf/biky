import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';

export default function JournalItem({ journal, openJournal }) {
  return (
    <Card onClick={() => openJournal(journal)}>
      <CardHeader
        title={journal.title}/>
      <CardActions>
        <Button disabled={false} onClick={() => console.log("수정")}>
          수정
        </Button>
        <Button onClick={() => alert("삭제")}>
          삭제
        </Button>
      </CardActions>
      <CardContent>{journal.desc}</CardContent>
    </Card >
  );
}