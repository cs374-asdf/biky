import "./App.css";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";

import BadgeDetail from "./container/BadgeDetail";
import Friends from "./container/Friends";
import Home from "./container/Home";
import JournalEditor from "./container/journal/JournalEditor";
import JournalMain from "./container/journal/JournalMain";
import Login from "./container/Login";
import LoginInitial from "./container/LoginInitial";
import MyPage from "./container/MyPage";
import NavigationBar from "./component/NavigationBar";
import NotFound from "./NotFound";
import React from "react";
import db from "./firebaseInit";

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Noto Sans',
    
  },
  palette: {
    primary: {
      main: '#ff85ac',
      light: '#FFEDE8', // primary color
    },
    secondary: {
      main: '#FF8E53',
      light: '#FFF9E8', // secondary color
    },
  },
});

const journalRef = "/nayeon/journals";
const frequestRef = "/nayeon/frequests";
const friendRef = "/nayeon/friends";

function App() {
  const [mainBadge, setMainBadge] = React.useState(0);
  const [journalRef, setJournalRef] = React.useState(null);
  const [frequestRef, setFrequestsRef] = React.useState(null);
  const [friendRef, setFriendRef] = React.useState(null);

  

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route
            path="/biky/home"
            exact
            render={() =>{
              if (journalRef)
               return <Home journalRef={db.ref(journalRef)} />
              window.location.href = "/biky"
              } }//
          />
          <Route
            path="/biky/journal"
            exact
            render={() => {
              if (journalRef && friendRef)
              return (
              <JournalMain
                journalRef={db.ref(journalRef)}
                friendRef={db.ref(friendRef)}
              />)
            window.location.href = "/biky"
            }}
          />
          <Route
            path="/biky/edit/:id"
            exact
            render={() => {
              if (journalRef && friendRef)
               return <JournalEditor
                journalRef={db.ref(journalRef)}
                friendRef={db.ref(friendRef)}
              />
            window.location.href = "/biky"
            }}
          />
          <Route
            path="/biky/login"
            exact
            render={() => (
              <Login
                db={db}
                setJournalRef={(name) =>
                  setJournalRef("/" + name + "/journals")
                }
                setFriendRef={(name) => setFriendRef("/" + name + "/friends")}
                setFrequestsRef={(name) =>
                  setFrequestsRef("/" + name + "/frequests")
                }
              />
            )}
          />
          <Route path="/biky/" exact component={LoginInitial} />
          <Route
            path="/biky/myPage"
            exact
            render={() =>{
              if (journalRef)
                return <MyPage mainBadge={mainBadge} />
              window.location.href = "/biky"
              }}
          />
          <Route
            path="/biky/badgeDetail"
            exact
            render={() => {
              if (friendRef && journalRef)
              return <BadgeDetail
                changeMainBadge={(id) => setMainBadge(id)}
                mainBadge={mainBadge}
              />
              
              window.location.href = "/biky"
            }}
          />
          <Route
            path="/biky/friend"
            render={() => {
              if (friendRef && journalRef)
                return <Friends
                  friendRef={db.ref(friendRef)}
                  frequestRef={db.ref(frequestRef)}
                  journalRef={db.ref(journalRef)}
                />

              window.location.href = "/biky"
            }}
          />

          <Route
            path="/biky/404"
            render={() => <NotFound/>}
          />
          <Redirect from="*" to="/biky/404" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
