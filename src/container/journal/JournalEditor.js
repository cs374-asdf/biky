
// 방법1
// create인 경우, edit인 경우 이동
// 마지막 라우트의 id를 읽어서 요청을 보냄

import initJournals, { mockJournal } from './journal'

import FriendAddPage from '../../component/journal/FriendAddPage';
import JournalForm from '../../component/journal/JournalForm';
import { Modal } from '@material-ui/core';
import PictureSelector from '../../component/journal/PictureSelector';
import React from 'react';
import dayjs from 'dayjs'
import friendList from './FriendList.json'
import { useParams } from 'react-router-dom';

function getFriends(ids, allFriends) {
  return allFriends.filter(friend => ids.includes(friend.id))
}


function getJournal(jid) {
  const j = initJournals.find(j => String(j.id) === String(jid))
  if (!j) {
    console.log(`No such journal: ${jid}`)
    return mockJournal;
  }
  return j;
}


export default function JournalEditor() {
  // 라우트 params 불러오기
  // create인 경우 vs. edit인 경우
  // const id = 1;
  let { id } = useParams();

  // 서버에서 불러와야 함
  const journal = getJournal(id)

  // 서버에서 불러와야함
  const allFriends = friendList

  const onSubmit = (newJournal) => {
    console.log(`id: ${id} 에 해당하는 파이어베이스 데이터를 newJournal로 업데이트`)
    console.log(`newJournal: ${newJournal}`)
    // id 에 해당하는 파이어베이스 데이터를 newJournal로 업데이트
  }
  const [friendPageOpen, setFriendAddPageOpen] = React.useState(false);
  const [pictureSelectorOpen, setPictureSelectorOpen] = React.useState(false);

  const [friends, setFriends] = React.useState(getFriends(journal.friends, allFriends));
  // TODO journal.friends 에 있는 id를 가지고 allFriends에 있는 객체를 끌어오자

  const removeFriend = (friend) => {
    setFriends(friends.filter(item => item !== friend))
  }

  const addFriend = (friend) => {
    if (friends.includes(friend)) return;
    setFriends([...friends, friend])
  }

  const [pictures, setPictures] = React.useState(journal.photos)

  const onSubmitPictures = (selected) => {
    setPictures(selected)
    setPictureSelectorOpen(false)
  }

  const removePicture = (pic) => {
    setPictures(pictures.filter(item => item !== pic))
  }


  return (
    <div>
      <JournalForm journal={journal} onSubmit={onSubmit} openFriendAddPage={() => setFriendAddPageOpen(true)}
        friends={friends} removeFriend={removeFriend} addFriend={addFriend}
        openPictureSelector={() => setPictureSelectorOpen(true)}
        pictures={pictures}
        removePicture={removePicture}
      />
      <Modal open={friendPageOpen} onClose={() => setFriendAddPageOpen(false)}>
        <FriendAddPage allFriends={allFriends} selectedFriends={friends} addFriend={addFriend} />
      </Modal>

      <Modal open={pictureSelectorOpen} onClose={() => setPictureSelectorOpen(false)}>
        <PictureSelector pictures={pictures} onSubmit={onSubmitPictures} />
      </Modal>


    </div >
  );
}