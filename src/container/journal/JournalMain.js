import Button from '@material-ui/core/Button';
import FilterIcon from '@material-ui/icons/FilterList';
import JournalDetail from '../../component/journal/JournalDetail'
import JournalList from '../../component/journal/JournalList'
import Modal from '@material-ui/core/Modal';
import React from 'react';
import SearchBar from '../../component/journal/SearchBar';

const initJournals =
  [
    {
      title: '제목1', desc: '내용1',
      friends: ['friend1'],
      hashtags: ['happy'],
      photos: ["/images/photo1.jpg"],
      emojis: ["happy", "exited"],
      distance: 100,
      time: new Date(),
      weather: "sunny",
      metaphor: { tree: 1, taxi: 2, hamburger: 3 },
      map: "../"
    },

    {
      title: '제목2', desc: '내용2',
      friends: ['friend1', 'friend2'],
      hashtags: ['happy'],
      photos: ['/images/photo2.jpg'],
      emojis: ["happy", "exited"],
      distance: 200,
      time: new Date(),
      weather: "sunny",
      metaphor: { tree: 1, taxi: 2, hamburger: 3 },
      map: "../"
    },

    {
      title: '제목3', desc: '내용3',
      friends: [],
      hashtags: ['sad'],
      photos: ['/images/photo3.jpg'],
      emojis: ["sad"],
      distance: 300,
      time: new Date(),
      weather: "sunny",
      metaphor: { tree: 1, taxi: 2, hamburger: 3 },
      map: "../"
    },

    {
      title: '제목4', desc: '내용4',
      friends: ['friend1'],
      hashtags: ['happy'],
      photos: ['/images/photo1.jpg', '/images/photo2.jpg'],
      emojis: ["happy", "exited"],
      distance: 20,
      time: new Date(),
      weather: "sunny",
      metaphor: { tree: 1, taxi: 2, hamburger: 3 },
      map: "../"
    },

    {
      title: '제목5', desc: '내용5',
      friends: ['friend1'],
      hashtags: ['happy'],
      photos: [],
      emojis: ["happy", "exited"],
      distance: 20,
      time: new Date(),
      weather: "sunny",
      metaphor: { tree: 1, taxi: 2, hamburger: 3 },
      map: "../"
    },
  ]

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
  };


  return (
    <div>
      <SearchBar />
      {/* <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<FilterIcon />}
        >
          필터
      </Button> */}

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