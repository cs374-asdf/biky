import React from "react";
import FriendList from "../component/Friends/Friends";
import FrequestComponent from "../component/Friends/Frequest";
import flist from "./FriendsData/FriendData.json";
import frlist from "./FriendsData/FrequestData.json";

export default function Friends() {
  // Firebase comeon
  // json 파일 여기서 불러오기
  const [frequests, setFrequests] = React.useState(frlist);
  const [friendlist, setFriendlist] = React.useState(flist);
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
    /*     console.log(frequests);
     */
  };
  return (
    <div>
      <FrequestComponent
        frequests={frequests}
        onRejectClick={rejectFrequest}
        onAcceptClick={acceptFrequest}
      />
      <FriendList flist={friendlist} />
    </div>
  );
}
