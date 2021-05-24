import { emojiItem, getFriends, getHashtags } from './JournalItem'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import PictureList from './PictureList';
import React from 'react';
import StaticMap from '../home/StaticMap'
import dayjs from 'dayjs'
import {getIconComponent} from '../../util/icon'
import { makeStyles } from '@material-ui/core/styles';
import {nullToList} from '../../util/format'

const useStyles = makeStyles((theme) => ({
  row: {
    flex: 1, display:'flex',  flexDirection: "row", justifyContent: 'space-between', alignItems: 'flex-end',
    marginBottom: '20px'
  },

  centeredRow: {
    flex: 1, display:'flex',  flexDirection: "row", justifyContent: 'space-between', alignItems: 'center',
    marginBottom: '20px'
  },

  actions: {
    flex: 1, display:'flex',  flexDirection: "row", justifyContent: 'flex-end', alignItems: 'center',
        marginBottom: '20px'

  }


}));

function formatTime(time) {
  console.log("time: ", time);
  return dayjs(time).format("YYYY년 M월 D일 H시 m분"); // '25/01/2019'
}

function getTime(start, end) {
  return (
    <div>
      {formatTime(start)} 부터 {formatTime(end)} 까지
    </div>
  );
}

export default function JournalDetail({ journal, friends }) {
  const classes = useStyles();

  if (!journal) return null;


  const emojis = nullToList(journal.emojis).map(getIconComponent)

  return (
    <Card
      style={{
        margin: "20px",
        padding: "20px",
        maxHeight: '90%',
        overflow: "scroll",
        flexDirection: "column",
      }}
      display="flex"    
    >
      <div className={classes.actions}>
        <div style={{display: 'inline-block', maxWidth: '50%'}}>
        <Button
          disabled={false}
          component={Link}
          to={`/biky/edit/${journal.id}`}
        >
        <img
          alt="edit button"
            src={process.env.PUBLIC_URL + "/images/edit.png"}
          />
        </Button>
        </div>
        <div style={{display: 'inline-block', maxWidth: '50%'}}>
            <Button onClick={() => alert("삭제")}>
              <img
              alt="delete button"
            src={process.env.PUBLIC_URL + "/images/delete.png"}
          />

            </Button>
        </div>
      </div>   


      <div className={classes.row}>
          <div style={{display: 'inline-block', fontSize: 30, maxWidth: '70%'}}>
            {journal.title}
          </div>
          <div style={{display: 'inline-block'}}>
            {journal.date}
          </div>
      </div>

      <div className={classes.row}>
        <div style={{display: 'inline-block', maxWidth: '50%'}}>
          <div style={{display: 'flex'}}>
            {emojis.map((emoji) => emojiItem(emoji))}
          </div>
        </div>
        <div style={{display: 'inline-block'}}>
          <div style={{display: 'flex'}}>
            {getHashtags(journal.hashtags)}
          </div>
        </div>
      </div>

      <div className={classes.row}>
        <div style={{flexWrap: 'wrap'}}>
          {getFriends(friends)}
        </div>
      </div>


      <div className={classes.row}>
        {journal.desc}
      </div>   

      <div className={classes.centeredRow}>
        <div style={{display: 'inline-block', maxWidth: '50%'}}>
          메타포
        </div>
        <div style={{display: 'inline-block'}}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{fontSize: 24}}> {journal.distance}km </div>
            <div style={{fontSize: 15}}> 2h 0m </div>
          </div>
        </div>
      </div>

      <div className={classes.centeredRow}>
          <PictureList pictures={journal.photos} isEditing={false}/>
      </div>   

      <div>
        <StaticMap
        route={journal.route}
        zoom={15}
        width={"100%"}
        />      
      </div>
    </Card>
  );
}
