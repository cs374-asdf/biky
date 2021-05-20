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
import db from "./firebaseInit";

const journalRef = "/nayeon/journals";
const frequestRef = "/nayeon/frequests";
const friendRef = "/nayeon/friends";

function App() {
  console.log(db);

  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route
          path="/biky/"
          exact
          render={() => <Home journalRef={db.ref(journalRef)} />}
        />
        <Route
          path="/biky/journal"
          exact
          render={() => (
            <JournalMain
              journalRef={db.ref(journalRef)}
              friendRef={db.ref(friendRef)}
            />
          )}
        />
        <Route
          path="/biky/edit/:id"
          exact
          render={() => (
            <JournalEditor
              journalRef={db.ref(journalRef)}
              friendRef={db.ref(friendRef)}
            />
          )}
        />
        <Route path="/biky/login" exact component={Login} />
        <Route path="/biky/loginInitial" exact component={LoginInitial} />
        <Route path="/biky/myPage" exact component={MyPage} />
        <Route path="/biky/badgeDetail" exact component={BadgeDetail} />
        <Route
          path="/biky/friend"
          render={() => (
            <Friends
              friendRef={db.ref(friendRef)}
              frequestRef={db.ref(frequestRef)}
              journalRef={db.ref(journalRef)}
            />
          )}
        />
        {/* <Redirect from="*" to="/" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
