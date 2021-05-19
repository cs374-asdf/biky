import FrequestComponent from "../component/friend/Frequest";
import FriendList from "../component/friend/Friends";
import React from "react";
// import flist from "../data/FriendData.json";
// import frlist from "../data/FrequestData.json";
// import journals from '../data/journal.js'

function getJournalsByFriend(flist, journals) {
  let journalsByFriend = {};
  for (let i = 0; i < flist.length; i++) {
    let f = flist[i];
    journalsByFriend[f.id] = journals.filter(
      (j) => j.friends && j.friends.includes(f.id)
    );
  }
  console.log(journalsByFriend);

  return journalsByFriend;
}

export default function Friends({ friendRef, frequestRef, journalRef }) {
  // Firebase comeon
  // json 파일 여기서 불러오기
  const [frequests, setFrequests] = React.useState([]);
  const [friendlist, setFriendlist] = React.useState([]);
  const [journalsByFriend, setJournalsByFriend] = React.useState(null);

  const acceptFrequest = (fid) => {
    var newFriend = {
      id: "f" + friendlist.length,
      picture: "",
      name: "",
      total_intimacy: 0,
      spent_time: 0,
      distance: 0,
    };
    for (var i = 0; i < frequests.length; i++) {
      if (frequests[i].id === fid) {
        newFriend.name = frequests[i].name;
        newFriend.picture = frequests[i].picture;
      }
    }
    friendRef.child("f" + friendlist.length).set(newFriend);
    frequestRef.child(fid).remove();
    //setFrequests(frequests.filter((item) => item.id !== fid));
  };

  React.useEffect(() => {
    friendRef.on("value", (snapshot) => {
      const friendData = snapshot.val();
      journalRef.once("value", (snapshot) => {
        console.log(friendData);
        setFriendlist(Object.values(friendData));
        const journals = snapshot.val();
        setJournalsByFriend(
          getJournalsByFriend(
            Object.values(friendData),
            Object.values(journals)
          )
        );
      });
    });

    frequestRef.on("value", (snapshot) => {
      const frequestData = snapshot.val();
      console.log(frequestData);
      setFrequests(frequestData === null ? [] : Object.values(frequestData));
    });
  }, []);

  const rejectFrequest = (fid) => {
    frequestRef.child(fid).remove();
  };

  if (!journalsByFriend) return <div> 로딩중... </div>;
  return (
    <div>
      <FrequestComponent
        frequests={frequests}
        onRejectClick={rejectFrequest}
        onAcceptClick={acceptFrequest}
      />
      <FriendList flist={friendlist} journalsByFriend={journalsByFriend} />
    </div>
  );
}
