import Button from '@material-ui/core/Button';
import FilterIcon from '@material-ui/icons/FilterList';
import JournalDetail from '../../component/journal/JournalDetail'
import JournalList from '../../component/journal/JournalList'
import Modal from '@material-ui/core/Modal';
import React from 'react';
import SearchBar from '../../component/common/SearchBar';
import initJournals from '../../data/journal'

export default function JournalMain() {

  // firebase subscribe를 해서 journal document가 바뀌면 다시 다운받도록 함
  const [journals, setJournals] = React.useState(initJournals);

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
        <SearchBar/>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<FilterIcon />}
        >
          필터
      </Button>
      </div>

      <JournalList journals={journals} openJournal={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
      >
        <JournalDetail journal={selected} />
      </Modal>
    </div>
  );
};