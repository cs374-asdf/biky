import FrequestComponent from "../component/friend/Frequest";
import FriendList from "../component/friend/Friends";
import React from "react";
import flist from "../data/FriendData.json";
import frlist from "../data/FrequestData.json";

export default function Friends({ friendRef, frequestRef }) {
  // Firebase comeon
  // json 파일 여기서 불러오기
  const [frequests, setFrequests] = React.useState([]);
  const [friendlist, setFriendlist] = React.useState([]);


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

  React.useEffect(
    () => {
      friendRef.on('value', snapshot => {
        const friendData = snapshot.val()
        console.log(friendData);
        setFriendlist(friendData)
      })

      frequestRef.on('value', snapshot => {
        const frequestData = snapshot.val()
        console.log(frequestData)
        setFrequests(frequestData)
      })
    }, []
  )

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
