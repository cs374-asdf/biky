import JournalItem from './JournalItem'
import React from 'react';

export default function JournalList({ journals, openJournal, friendsByJournal }) {
  var journalList = journals ? journals.map(journal => <JournalItem
    key={journal.id}
    openJournal={openJournal}
    journal={journal}
    friends={friendsByJournal[journal.id]}
  />) : <p> 아직 게시글이 없어요!
    </p>

  return (
    <div>
      {journalList}
    </div>
  );
};