// 방법1
// create인 경우, edit인 경우 이동
// 마지막 라우트의 id를 읽어서 요청을 보냄

import { nullToList, toList } from "../../util/format";

import FriendAddPage from "../../component/journal/FriendAddPage";
import JournalForm from "../../component/journal/JournalForm";
import Loading from "../../component/Loading";
import { Modal } from "@material-ui/core";
import React from "react";
import { mockJournal } from "../../data/journal";
import { useParams } from "react-router-dom";

// import { getHashtags } from "../../component/journal/JournalItem";

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
  return j;
}

  async function uploadImageFile(files, storageRef) {
    if (!files) return null;
    const promises = files.map((file) => {
      const ref = storageRef.child(`photos${file.name}`);
      return ref.put(file).then(() => ref.getDownloadURL());
    });

    const downloadURLs = await Promise.all(promises);
    return downloadURLs;
  }


export default function JournalEditor({ journalRef, friendRef, storageRef }) {

  let { id } = useParams();
  const [journal, setJournal] = React.useState(mockJournal);
  const [loading, setLoading] = React.useState(true);
  const [allFriends, setAllFriends] = React.useState([]);
  const [preference, setPreference] = React.useState([]);
  const [friendPageOpen, setFriendAddPageOpen] = React.useState(false);
  const [pictures, setPictures] = React.useState([]);
  const [friends, setFriends] = React.useState([]);
  const [pictureLoading, setPictureLoading] = React.useState(false)
  const [pictureFiles, setPictureFiles] = React.useState(false)

  React.useEffect(() => {
    journalRef.once("value", (snapshot) => {
      const journalData = snapshot.val();
      const j = getJournal(id, journalData);
      setPrefData(journalData ? Object.values(journalData) : []);
      friendRef.once("value", (snapshot) => {
        const friendData = snapshot.val();
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

  const setPrefData = (journals) => {
    const hashtags = journals.map(j => j.hashtags)
    const flatten = hashtags.flat()
    setPreference(flatten);
  };

  React.useEffect( () => {
    async function fetchPicture() {
      const downloadURLs = await uploadImageFile(pictureFiles, storageRef);
      setPictures(pictures => {
        const oldPictures = pictures.slice(0, pictures.length - pictureFiles.length)
        return [...oldPictures, ...downloadURLs]
      });
      setPictureLoading(false)
      setPictureFiles([])
    }

    if (pictureLoading === true) {
      fetchPicture()
    }
  }, [pictureLoading, pictureFiles, storageRef])

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

  const removeFriend = (friend) => {
    setFriends(friends.filter((item) => item !== friend));
  };

  const addFriend = (friend) => {
    if (friends.includes(friend)) return;
    setFriends([...friends, friend]);
  };


  const onSubmitPictures = (selected) => {
    const loadings = selected.map(item => 'loading')
    setPictureLoading(true)
    setPictureFiles(selected)
    setPictures([...pictures, ...loadings])
  };

  const removePicture = (pic) => {
    setPictures(pictures.filter((item) => item !== pic));
  };

  if (loading) return <Loading />;

  return (
    <div>
      <JournalForm
        journal={journal}
        onSubmit={onSubmit}
        openFriendAddPage={() => setFriendAddPageOpen(true)}
        friends={friends}
        removeFriend={removeFriend}
        addFriend={addFriend}
        pictures={pictures}
        removePicture={removePicture}
        onSubmitPictures={onSubmitPictures}
        preference={preference}
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
    </div>
  );
}
