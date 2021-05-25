import Avatar from "../../component/Avatar";
import Button from "@material-ui/core/Button";
import FilterIcon from "@material-ui/icons/FilterList";
import JournalDetail from "../../component/journal/JournalDetail";
import JournalList from "../../component/journal/JournalList";
import Modal from "@material-ui/core/Modal";
import Profile from '../Profile'
import React from "react";
import SearchBar from "../../component/common/SearchBar";
import { makeStyles } from "@material-ui/core/styles";

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
    borderBottom: "solid 1px black",
  },
  content: {
    position: "relative",
    height: "calc(100vh - 160px)",
    overflow: "scroll",
    // border: "solid 1px black",
  },
});

function getFriendsByJournal(journals, flist) {
  let friendsByJournal = {};
  for (let i = 0; i < journals.length; i++) {
    let j = journals[i];
    friendsByJournal[j.id] = flist.filter(
      (f) => j.friends && j.friends.includes(f.id)
    );
  }

  return friendsByJournal;
}

export default function JournalMain({ journalRef, friendRef }) {
  // var journalRef = db.ref("/" + user + "/journals");
  // var friendRef = db.ref("/" + user + "/friends");
  const classes = useStyles();
  // firebase subscribe를 해서 journal document가 바뀌면 다시 다운받도록 함
  const [journals, setJournals] = React.useState([]);
  const [friendsByJournal, setFriendsByJournal] = React.useState([]);

  React.useEffect(() => {
    journalRef.on("value", (snapshot) => {
      const journalData = snapshot.val();
      console.log(journalData);
      let journalList = journalData ? Object.values(journalData) : [];
      friendRef.once("value", (snapshot) => {
        let friendData = snapshot.val();
        let friendList = friendData ? Object.values(friendData) : [];
        setJournals(journalList);
        setFriendsByJournal(getFriendsByJournal(journalList, friendList));
      });
    });
  }, []);

  const [selected, setSelected] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (journal) => {
    setOpen(true);
    setSelected(journal);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <div className={classes.verticalAlign}>Journal</div>
      </div>
      
      <Profile/>


      <div className={classes.content}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "20px",
            borderBottom: "solid 1px black",
          }}
        >
          <SearchBar />
          <Button
            variant="contained"
            color="secondary"
            size="medium"
            startIcon={<FilterIcon />}
          >
            Filter
          </Button>
        </div>

        <div>
          <JournalList
            journals={journals}
            openJournal={handleOpen}
            friendsByJournal={friendsByJournal}
          />

          <Modal open={open} onClose={handleClose}>
            <JournalDetail
              journal={selected}
              friends={selected ? friendsByJournal[selected.id] : null}
              handleClose={handleClose}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
}
