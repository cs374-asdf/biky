import Button from '@material-ui/core/Button';
import FilterIcon from '@material-ui/icons/FilterList';
import JournalDetail from '../../component/journal/JournalDetail'
import JournalList from '../../component/journal/JournalList'
import Modal from '@material-ui/core/Modal';
import React from 'react';
import SearchBar from '../../component/common/SearchBar';
import flist from "../../data/FriendData.json";
import initJournals from '../../data/journal'

function getFriendsByJournal(journals, flist) {
  let friendsByJournal = {}
  for (let i = 0; i < journals.length; i++) {
    let j = journals[i]
    friendsByJournal[j.id] = flist.filter(f => j.friends && j.friends.includes(f.id))
  }

  return friendsByJournal
}

export default function JournalMain({ journalRef, friendRef }) {

  // firebase subscribe를 해서 journal document가 바뀌면 다시 다운받도록 함
  const [journals, setJournals] = React.useState([]);
  const [friendsByJournal, setFriendsByJournal] = React.useState([])

  React.useEffect(
    () => {
      journalRef.on('value', snapshot => {
        const journalData = snapshot.val()
        console.log(journalData);
        let journalList = journalData ? Object.values(journalData) : [];
        friendRef.once('value', snapshot => {
          let friendData = snapshot.val()
          let friendList = friendData ? Object.values(friendData) : [];
          setJournals(journalList)
          setFriendsByJournal(getFriendsByJournal(journalList, friendList));
        })
      })
    }, []
  )

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
    <div>
      <div style={{ width: "100%", height: "50px", border: "1px black solid" }}>
        Journal
      </div>
      <div style={{ width: "100%", height: "50px", border: "1px black solid" }}>
        Nayoung Min
      </div>

      <div
        style={{
          height: "calc(100% - 160px)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "20px",
            border: "1px black solid",
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

        <div
          style={{
            border: "1px black solid",
          }}
        >
          <JournalList journals={journals} openJournal={handleOpen} friendsByJournal={friendsByJournal}/>

          <Modal open={open} onClose={handleClose}>
            <JournalDetail journal={selected} friends={selected ? friendsByJournal[selected.id] : null}/>
          </Modal>
        </div>
      </div>
    </div>
  );
}
