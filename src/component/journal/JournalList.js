import JournalItem from './JournalItem'
import Loading from '../Loading';
import React from 'react';
import _ from 'lodash'

export default function JournalList({ journals, openJournal, friendsByJournal }) {
  if (!journals || !journals.length)
  return <Loading/>

  
  var journalList =  _.sortBy(journals, (journal) => new Date(journal.createdAt)).reverse().map(journal => 
  { 
    return <JournalItem
    key={journal.id}
    openJournal={openJournal}
    journal={journal}
    friends={friendsByJournal[journal.id]}
  />})

  return (
    <div>
      {journalList}
    </div>
  );
};