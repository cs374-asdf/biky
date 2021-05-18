import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '../component/Avatar';
import FriendList from "../component/Friends/Friends";
import FrequestComponent from "../component/Friends/Frequest";
import flist from "./FriendsData/FriendData.json";
import frlist from "./FriendsData/FrequestData.json";

const useStyles = makeStyles({
  page: {
      position: "relative",
      // maxWidth: "550px",
      margin: "0 auto",
      // border: "solid 1px blue",
  },
  verticalAlign: {
      position: "absolute",
      top: "50%",
      transform: "translate(-50%, -50%)",
      display: "inline-block",
  },
  header: { 
      position: "relative",
      height: "49px",
      fontSize: "30px",
      fontWeight: "bold",
      borderBottom: "solid 1px black",
      textAlign: "center",
  },
  avatar: {
      position: "relative",
      height: "50px",
      // border: "solid 1px black",
  },
  content: {
      position: "relative",
      height: "calc(100vh - 160px)",
      // border: "solid 1px black",
  },
});

export default function Friends() {
  const classes = useStyles();
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
    <div className={classes.page}>
      <div className={classes.header}>
        <div className={classes.verticalAlign}>Friends</div>
      </div>

      <div className={classes.avatar}>
          <div className={classes.verticalAlign} style={{ right: "10px", transform: "translateY(-50%)" }}> 
              Nayeon Min  <div style={{ display: "inline-block" }}><Avatar /></div>
          </div>
      </div>

      <div className={classes.content}>
        <FrequestComponent
          frequests={frequests}
          onRejectClick={rejectFrequest}
          onAcceptClick={acceptFrequest}
        />
        <FriendList flist={friendlist} />
      </div>
    </div>
  );
}
