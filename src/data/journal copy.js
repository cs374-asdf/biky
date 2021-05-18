import dayjs from 'dayjs';

const initJournals =
  [
    {
      id: "1",
      title: '제목1', desc: '내용1',
      friends: ['1'],
      hashtags: ['happy'],
      photos: ["/images/photo1.jpg"],
      emojis: ["happy", "exited"],
      distance: 100,
      startTime: dayjs(),
      endTime: dayjs().add(2, 'hour'),      weather: "sunny",
      metaphor: { tree: 1, taxi: 2, hamburger: 3 },
      map: "../"
    },

    {
      id: "2",
      title: '제목2', desc: '내용2',
      friends: ['1', '0'],
      hashtags: ['happy', "exited"],
      photos: ['/images/photo2.jpg'],
      emojis: ["happy", "exited"],
      distance: 200,
      startTime: dayjs(),
      endTime: dayjs().add(1, 'hour'),      weather: "sunny",
      metaphor: { tree: 1, taxi: 2, hamburger: 3 },
      map: "../"
    },

    {
      id: "3",
      title: '제목3', desc: '내용3',
      friends: [],
      hashtags: ['sad'],
      photos: ['/images/photo3.jpg'],
      emojis: ["sad"],
      distance: 300,
      startTime: dayjs(),
      endTime: dayjs().add(2, 'hour'),      weather: "sunny",
      metaphor: { tree: 1, taxi: 2, hamburger: 3 },
      map: "../"
    },

    {
      id: "4",
      title: '제목4', desc: '내용4',
      friends: ['1'],
      hashtags: ['happy'],
      photos: ['/images/photo1.jpg', '/images/photo2.jpg'],
      emojis: ["happy", "exited"],
      distance: 20,
      startTime: dayjs(),
      endTime: dayjs().add(2, 'hour'),      weather: "sunny",
      metaphor: { tree: 1, taxi: 2, hamburger: 3 },
      map: "../"
    },

    {
      id: "5",
      title: '제목5', desc: '내용5',
      friends: ['1'],
      hashtags: ['happy'],
      photos: [],
      emojis: ["happy", "exited"],
      distance: 20,
      startTime: dayjs(),
      endTime: dayjs().add(2, 'hour'),
      weather: "sunny",
      metaphor: { tree: 1, taxi: 2, hamburger: 3 },
      map: "../"
    },
  ]

export const mockJournal = {
  // 수정 가능
  title: '제목1', desc: '내용1',
  friends: ['1'],
  hashtags: ['happy'],
  photos: ['../'],

  // 수정 불가능
  emojis: ["happy", "exited"],
  distance: 100,
  startTime: dayjs(),
  endTime: dayjs().add(2, 'hour'),
  weather: "sunny",
  metaphor: { tree: 1, taxi: 2, hamburger: 3 },
  map: "../"
};

export default initJournals