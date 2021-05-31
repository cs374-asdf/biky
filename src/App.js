import "./App.css";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
import PhotoUploader from "./component/journal/PhotoUploader";
import React from "react";
import Tutorial from "./container/Tutorial";
import fire from "./firebaseInit";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Noto Sans",
  },
  palette: {
    primary: {
      main: "#ff85ac",
      light: "#FFEDE8", // primary color
    },
    secondary: {
      main: "#FF8E53",
      light: "#FFF9E8", // secondary color
    },
  },
});


function App() {
  const [mainBadge, setMainBadge] = React.useState(0);
  const [ref, setRef] = React.useState(null);

  const [journalRef, setJournalRef] = React.useState(null);
  const [frequestRef, setFrequestsRef] = React.useState(null);
  const [friendRef, setFriendRef] = React.useState(null);

  const [image, setImage] = React.useState(null);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route
            path="/biky/home"
            exact
            render={() => {
              if (journalRef)
               return <Home 
                journalRef={fire.db.ref(journalRef)} 
                wizardRef={fire.db.ref('wizard/')}                
                />
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
                    journalRef={fire.db.ref(journalRef)}
                    friendRef={fire.db.ref(friendRef)}
                  />
                );
              window.location.href = "/biky";
            }}
          />
          <Route
            path="/biky/edit/:id"
            exact
            render={() => {
              if (journalRef && friendRef)
                return (
                  <JournalEditor
                    storageRef={fire.storage.ref('/photos')}
                    journalRef={fire.db.ref(journalRef)}
                    friendRef={fire.db.ref(friendRef)}
                  />
                );
              window.location.href = "/biky";
            }}
          />
          <Route
            path="/biky/login"
            exact
            render={() => (
              <Login
                db={fire.db}
                setJournalRef={(name) =>
                  setJournalRef(`/user/${name}/journals`)
                }
                setFriendRef={(name) => 
                  setFriendRef(`/user/${name}/friends`)
                }                  
                setFrequestsRef={(name) =>
                  setFrequestsRef(`/user/${name}/frequests`)
                }
              />
            )}
          />
          <Route path="/biky/" exact component={LoginInitial} />
          <Route
            path="/biky/myPage"
            exact
            render={() => {
              if (journalRef) return <MyPage mainBadge={mainBadge} />;
              window.location.href = "/biky";
            }}
          />
          <Route
            path="/biky/badgeDetail"
            exact
            render={() => {
              if (friendRef && journalRef)
                return (
                  <BadgeDetail
                    changeMainBadge={(id) => setMainBadge(id)}
                    mainBadge={mainBadge}
                  />
                );

              window.location.href = "/biky";
            }}
          />
          <Route
            path="/biky/friend"
            render={() => {
              if (friendRef && journalRef)
                return (
                  <Friends
                    friendRef={fire.db.ref(friendRef)}
                    frequestRef={fire.db.ref(frequestRef)}
                    journalRef={fire.db.ref(journalRef)}
                  />
                );

              window.location.href = "/biky";
            }}
          />
          <Route
            path="/biky/tutorial"
            render={() => {
              return <Tutorial/>
            }} />

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
