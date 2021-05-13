
// 방법1
// create인 경우, edit인 경우 이동
// 마지막 라우트의 id를 읽어서 요청을 보냄

import JournalForm from '../../component/journal/JournalForm';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function JournalEditor() {
  // 라우트 params 불러오기
  // create인 경우 vs. edit인 경우
  // const id = 1;
  let { id } = useParams();
  console.log(`JournalEditor: id = ${id}`)


  // 서버에서 불러와야 함
  const journal = {
    // 수정 가능
    title: '제목1', desc: '내용1',
    friends: ['friend1'], 
    hashtags: ['happy'], 
    photos: ['../'], 

    // 수정 불가능
    emojis: ["happy", "exited"],
    distance: 100,
    time: new Date(),
    weather: "sunny",
    metaphor: { tree: 1, taxi: 2, hamburger: 3 },
    map: "../"
  };

  const onSubmit = (newJournal) => {
    console.log(`id: ${id} 에 해당하는 파이어베이스 데이터를 newJournal로 업데이트`)
    console.log(`newJournal: ${newJournal}`)
    // id 에 해당하는 파이어베이스 데이터를 newJournal로 업데이트
  }


  return (
    <div>
      <JournalForm journal={journal} onSubmit={onSubmit} />
    </div >
  );
}

/*
    {
      title: '제목1', desc: '내용1',
      friends: ['friend1'],
      hashtags: ['happy'],
      photos: ['../'],
      emojis: ["happy", "exited"],
      distance: 100,
      time: new Date(),
      weather: "sunny",
      metaphor: { tree: 1, taxi: 2, hamburger: 3 },
      map: "../"
    },
*/