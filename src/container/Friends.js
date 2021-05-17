import FrequestComponent from "../component/friend/Frequest";
import FriendList from "../component/friend/Friends";
import React from "react";
import flist from "../data/FriendData.json";
import frlist from "../data/FrequestData.json";
import journals from '../data/journal.js'

function getJournalsByFriend() {
  let journalsByFriend = {}
  for (let i = 0; i < flist.length; i++) {
    let f = flist[i]
    journalsByFriend[f.id] = journals.filter(j => j.friends.includes(f.id))
  }

  return journalsByFriend
}

export default function Friends() {
  // Firebase comeon
  // json 파일 여기서 불러오기
  const [frequests, setFrequests] = React.useState(frlist);
  const [friendlist, setFriendlist] = React.useState(flist);
  const journalsByFriend = getJournalsByFriend();


  const acceptFrequest = (fid) => {
    var newFriend = {
      id: friendlist.length,
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
    setFriendlist(friendlist.concat([newFriend]));
    setFrequests(frequests.filter((item) => item.id !== fid));
  };

  const rejectFrequest = (fid) => {
    setFrequests(frequests.filter((item) => item.id !== fid));
  };
  return (
    <div>
      <FrequestComponent
        frequests={frequests}
        onRejectClick={rejectFrequest}
        onAcceptClick={acceptFrequest}
      />
      <FriendList flist={friendlist} journalsByFriend={journalsByFriend}/>
    </div>
  );
}
