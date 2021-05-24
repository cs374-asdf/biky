import JournalItem from './JournalItem'
import React from 'react';
import _ from 'lodash'
export default function JournalList({ journals, openJournal, friendsByJournal }) {
  if (!journals || !journals.length)
  return (<p> 
      아직 게시글이 없어요!
    </p>)

  var journalList =  _.sortBy(journals, 'createdAt').reverse().map(journal => <JournalItem
    key={journal.id}
    openJournal={openJournal}
    journal={journal}
    friends={friendsByJournal[journal.id]}
  />)

  return (
    <div>
      {journalList}
    </div>
  );
};