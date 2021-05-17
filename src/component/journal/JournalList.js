import JournalItem from './JournalItem'
import React from 'react';

export default function JournalList({ journals, openJournal }) {
  var journalList = journals ? journals.map(journal => <JournalItem 
    key={journal.id}
    openJournal={openJournal}
    journal={journal} />) : <p> 아직 게시글이 없어요! </p>

  return (
    <div>
      {journalList}
    </div>
  );
};