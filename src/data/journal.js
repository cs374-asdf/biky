import dayjs from "dayjs";

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
      endTime: dayjs().add(2, 'hour'), weather: "sunny",
      metaphor: { tree: 1, taxi: 2, hamburger: 3 },
      map: "../",
      route: [
        [126.91462625155943, 37.49468356316903],
        [126.91466456325881, 37.49457548665683],
        [126.91467809668889, 37.4945003236157],
        [126.91469501347642, 37.494409948906565],
        [126.91470290797731, 37.49436968291182],
        [126.91484578727844, 37.49369203740101],
        [126.91634996665469, 37.493628630563954],
        [126.91635767048872, 37.494331551409644],
        [126.91753635713798, 37.49434377606901],
        [126.9184608172214, 37.49440489929814],
        [126.91876897058253, 37.49367752962703],
      ],
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
      endTime: dayjs().add(1, 'hour'), weather: "sunny",
      metaphor: { tree: 1, taxi: 2, hamburger: 3 },
      map: "../",
      route: []
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
      endTime: dayjs().add(2, 'hour'), weather: "sunny",
      metaphor: { tree: 1, taxi: 2, hamburger: 3 },
      map: "../",
      route: []

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
      endTime: dayjs().add(2, 'hour'), weather: "sunny",
      metaphor: { tree: 1, taxi: 2, hamburger: 3 },
      map: "../",
      route: []
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
      map: "../",
      route: []
    },
  ]

export const mockJournal = {
  // 수정 가능
  title: "제목1",
  desc: "내용1",
  friends: ["1"],
  hashtags: ["happy"],
  photos: ["../"],

  // 수정 불가능
  emojis: ["happy", "exited"],
  distance: 100,
  startTime: dayjs(),
  endTime: dayjs().add(2, "hour"),
  weather: "sunny",
  metaphor: { tree: 1, taxi: 2, hamburger: 3 },
  map: "../",
  route: [
    [126.91462625155943, 37.49468356316903],
    [126.91466456325881, 37.49457548665683],
    [126.91467809668889, 37.4945003236157],
    [126.91469501347642, 37.494409948906565],
    [126.91470290797731, 37.49436968291182],
    [126.91484578727844, 37.49369203740101],
    [126.91634996665469, 37.493628630563954],
    [126.91635767048872, 37.494331551409644],
    [126.91753635713798, 37.49434377606901],
    [126.9184608172214, 37.49440489929814],
    [126.91876897058253, 37.49367752962703],
  ],
};

export default initJournals;
