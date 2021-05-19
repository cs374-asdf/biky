import Button from '@material-ui/core/Button';
import FilterIcon from '@material-ui/icons/FilterList';
import JournalDetail from '../../component/journal/JournalDetail'
import JournalList from '../../component/journal/JournalList'
import Modal from '@material-ui/core/Modal';
import React from 'react';
import SearchBar from '../../component/common/SearchBar';
import flist from "../../data/FriendData.json";
import initJournals from '../../data/journal'

function getFriendsByJournal(journals) {
  let friendsByJournal = {}
  for (let i = 0; i < journals.length; i++) {
    let j = journals[i]
    let friends = j.friends
    friendsByJournal[j.id] = flist.filter(f => friends.includes(f.id))
  }

  return friendsByJournal
}

export default function JournalMain({ journalRef }) {

  // firebase subscribe를 해서 journal document가 바뀌면 다시 다운받도록 함
  const [journals, setJournals] = React.useState([]);
  const [friendsByJournal, setFriendsByJournal] = React.useState([])

  React.useEffect(
    () => {
      journalRef.on('value', snapshot => {
        const journalData = snapshot.val()
        console.log(journalData);
        let journals = journalData ? Object.values(journalData) : [];
        setJournals(journals) // journalData = null 일 경우 처리
        setFriendsByJournal(getFriendsByJournal(journals));
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
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SearchBar />
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<FilterIcon />}
        >
          필터
      </Button>
      </div>

      <JournalList journals={journals} openJournal={handleOpen} friendsByJournal={friendsByJournal}/>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <JournalDetail journal={selected} friends={selected ? friendsByJournal[selected.id] : null}/>
      </Modal>
    </div>
  );
};