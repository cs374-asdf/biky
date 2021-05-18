import "./App.css";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import BadgeDetail from "./container/BadgeDetail";
import Friends from "./container/Friends";
import Home from "./container/Home";
import JournalEditor from "./container/journal/JournalEditor";
import JournalMain from "./container/journal/JournalMain";
import Login from "./container/Login";
import LoginInitial from "./container/LoginInitial";
import MyPage from "./container/MyPage";
import NavigationBar from "./component/NavigationBar";
import db from './firebaseInit'
import firebase from "firebase";
import logo from "./logo.svg"
  ;

function App() {
  // const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_API_KEY,
  //   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  //   databaseURL: process.env.REACT_APP_DATABASE_URL,
  //   projectId: process.env.REACT_APP_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  //   appId: process.env.REACT_APP_APP_ID,
  // };

  // if (firebase.apps.length === 0)
  //   firebase.initializeApp(firebaseConfig);
  // else
  //   firebase.app()
  console.log(db)

  const journalRef = "/nayeon/journals"
  const frequestRef = "/nayeon/frequests"
  const friendRef = "/nayeon/friends"


  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/journal"
          exact
          render={() => <JournalMain journalRef={db.ref(journalRef)} />}
        />
        <Route path="/edit/:id" exact component={JournalEditor} />
        <Route path="/login" exact component={Login} />
        <Route path="/loginInitial" exact component={LoginInitial} />
        <Route path="/myPage" exact component={MyPage} />
        <Route path="/badgeDetail" exact component={BadgeDetail} />
        <Route path="/friend" render={() => <Friends friendRef={db.ref(friendRef)} frequestRef={db.ref(frequestRef)} />} />
        {/* <Redirect from="*" to="/" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
