// 방법1
// create인 경우, edit인 경우 이동
// 마지막 라우트의 id를 읽어서 요청을 보냄

import { nullToList, toList } from "../../util/format";

import FriendAddPage from "../../component/journal/FriendAddPage";
import JournalForm from "../../component/journal/JournalForm";
import { Modal } from "@material-ui/core";
import PictureSelector from "../../component/journal/PictureSelector";
import React from "react";
import { mockJournal } from "../../data/journal";
import { useParams } from "react-router-dom";

function getFriends(ids, allFriends) {
  return allFriends.filter((friend) => ids.includes(friend.id));
}

function getJournal(jid, initJournals) {
  const j = initJournals[String(jid)];
  // const j = initJournals.find(j => String(j.id) === String(jid))
  if (!j) {
    console.log(`No such journal: ${jid}`);
    return mockJournal;
  }
  console.log(j);
  return j;
}

export default function JournalEditor({ journalRef, friendRef }) {
  // 라우트 params 불러오기
  // create인 경우 vs. edit인 경우
  // const id = 1;
  let { id } = useParams();
  const [journal, setJournal] = React.useState(mockJournal);
  const [loading, setLoading] = React.useState(true);
  const [allFriends, setAllFriends] = React.useState([]);

  React.useEffect(() => {
    journalRef.once("value", (snapshot) => {
      const journalData = snapshot.val();
      console.log(journalData);
      const j = getJournal(id, journalData);
      friendRef.once("value", (snapshot) => {
        const friendData = snapshot.val();
        console.log(friendData);
        let allFriends = toList(friendData);
        let friends = nullToList(j.friends);
        setFriends(getFriends(friends, allFriends));
        setAllFriends(allFriends);
        setJournal(j);
        setPictures(nullToList(j.photos));
        setLoading(false);
      });
    });
  }, [journalRef, id, friendRef]);

  const onSubmit = ({ title, desc, hashtags }) => {
    const newJournal = {
      ...journal,
      title,
      desc,
      friends: friends.map((friend) => friend.id),
      hashtags,
      photos: pictures,
    };

    // id 에 해당하는 파이어베이스 데이터를 newJournal로 업데이트
    journalRef.child(journal.id).set(newJournal);

    // 새로운 저널일 경우 처리해주기
  };
  const [friendPageOpen, setFriendAddPageOpen] = React.useState(false);
  const [pictureSelectorOpen, setPictureSelectorOpen] = React.useState(false);
  const [pictures, setPictures] = React.useState([]);
  const [friends, setFriends] = React.useState([]);

  const removeFriend = (friend) => {
    setFriends(friends.filter((item) => item !== friend));
  };

  const addFriend = (friend) => {
    if (friends.includes(friend)) return;
    setFriends([...friends, friend]);
  };

  const onSubmitPictures = (selected) => {
    setPictures(selected);
    setPictureSelectorOpen(false);
  };

  const removePicture = (pic) => {
    setPictures(pictures.filter((item) => item !== pic));
  };

  if (loading) return <div> loading... </div>;

  const MyPictureSelector = React.forwardRef((props, ref) => (
    <PictureSelector
      pictures={pictures}
      onSubmit={onSubmitPictures}
      ref={ref}
    />
  ));

  return (
    <div>
      <JournalForm
        journal={journal}
        onSubmit={onSubmit}
        openFriendAddPage={() => setFriendAddPageOpen(true)}
        friends={friends}
        removeFriend={removeFriend}
        addFriend={addFriend}
        openPictureSelector={() => setPictureSelectorOpen(true)}
        pictures={pictures}
        removePicture={removePicture}
      />
      <Modal open={friendPageOpen} onClose={() => setFriendAddPageOpen(false)}>
        <FriendAddPage
          allFriends={allFriends}
          selectedFriends={friends}
          addFriend={addFriend}
          removeFriend={removeFriend}
          close={() => setFriendAddPageOpen(false)}
        />
      </Modal>

      <Modal
        open={pictureSelectorOpen}
        onClose={() => setPictureSelectorOpen(false)}
      >
        <MyPictureSelector />
      </Modal>
    </div>
  );
}
