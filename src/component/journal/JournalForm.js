import { List, ListItem } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FriendItem from './FriendItem'
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '80%'
    },
  },

  hashtagGroup: {
    display: 'flex',
    flexDirection: 'row'

  }
}));

export default function JournalForm({ journal, onSubmit, openFriendAddPage, friends, removeFriend, addFriend }) {
  const classes = useStyles();
  const [title, setTitle] = React.useState(journal.title);
  const [desc, setDesc] = React.useState(journal.desc);
  const [hashtags, setHashtags] = React.useState(journal.hashtags);
  const [photos, setPhotos] = React.useState(journal.photos);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handleSubmit = () => {
    let newJournal = {
      ...journal,
      title, desc, friends, hashtags, photos
    }

    onSubmit(newJournal)
  }

  const addHashtag = (event) => {
    event.preventDefault();
    let hashtag = event.target.newTag.value;
    setHashtags([...hashtags, hashtag])
    event.target.newTag.value = ""
  }

  const removeHashtag = (hashtag) => {
    setHashtags(hashtags.filter(item => item !== hashtag))
  }


  return (
    <div className={classes.root} noValidate autoComplete="off">
      <TextField onChange={handleTitleChange} id="title" label="제목" variant="outlined" defaultValue={journal.title} />
      <TextField onChange={handleDescChange} id="desc" label="내용" variant="outlined" multiline defaultValue={journal.desc} />
      <Button onClick={handleSubmit}> 저장 </Button>


      <List dense>
        {friends.map(friend =>
          <FriendItem friend={friend} removeFriend={removeFriend} />)}
        <ListItem>
          <Button onClick={openFriendAddPage}>+</Button>
        </ListItem>
      </List>



      <div className={classes.hashtagGroup}>
        {hashtags.map(hashtag => <div> #{hashtag}
          <IconButton aria-label="delete" key={hashtag} onClick={() => removeHashtag(hashtag)}>
            <DeleteIcon />
          </IconButton>
        </div>)
        }
        <form onSubmit={addHashtag}>
          <TextField id="newTag" placeholder="+ New Hashtag" />
        </form>
      </div>

    </div>
  );
}