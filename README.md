# CS374 Team ASDF Biky

### Github Repository

- [https://github.com/cs374-asdf/biky](https://github.com/cs374-asdf/biky)

### Prototype URL

- [https://cs374-asdf.github.io/biky/](https://cs374-asdf.github.io/biky/)

## Team Members

Sanga Choi ([retroinspect](https://github.com/retroinspect)): Our Religion, Our Love

Nayoung Oh ([Nayoung-Oh](https://github.com/Nayoung-Oh)): Our Craziness

Nicole Lee ([babycroc](https://github.com/babycroc)): Our Brain, Our **Official** Ending Angel

Junho Cho ([idlife](https://github.com/idlife), [Chovy](https://github.com/kaist2015)): Our Eye

## Container Description

### Home

- It shows today's weather, the dust(fine dust and ultra-fine dust) status, and your current position on the map. These are important factors on deciding when and where to start your ride bike.
- When the user presses "Start Ride" at the start of a bike ride, the time, distance, and route data is automatically recorded.
- When the user presses "Stop Ride" at the end of a bike ride, the data is shown organized in a modal, and you can press "Journal Ride" to automatically create a mock journal of the ride.

### Journal

- Shows the list of journals that you have written until now.
- In the journal list, only a simplified view including the date, time and distance, friends you rode with, emojis that summarize the journal content is shown.
- When you click an item in the journal list, you can see a detailed view. You can press the edit icon to move to the editor view.
- In the editor view which is reached by pressing "Journal Ride" in the journal modal that pops up after pressing "Stop Ride" or pressing the edit icon on the detailed view of an individual journal, you can edit all fields. Content is auto-completed by default, and suggestions are provided.

### Friends

- Shows your list of friends.
- In the simplified view, you can see your friend's profile image, name, and the intimacy calculated based on the time and distance rode together.
- If you press a friend item in the list, you can see detailed information such as the time and distance rode together, and the list of journals written when you rode together.
- You can send and receive frequests by pressing the mail icon. Sending requests is currently not implemented because we plan to test users for a short period.

### MyPage

- Shows basic user information, record statistics, and a representative badge.
- The total time and distance for bike riding is shown, also by metaphors for record statistics.
- Pressing the representative badge moves you to a page that shows a detailed list of badges.

<br/>

## Additional Information Related to Implementation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Commit Message

- feat: specific feature
- doc: document modification such as README
- baseline: task not related to certain features (ex. PWA, route)
- style: style modification related to color, layout, etc.

### Local Test

npm start

- URL: localhost:3000
- Recommend to use Naver Whale Mobile Window

### Deploy

At 'dev' branch type next commands

git add .

git commit -m "_Explanation_"

git push

npm run deploy

About 3 minutes delay can exist

Check the result at the following link [biky]!

[biky]: https://cs374-asdf.github.io/biky
