import './App.css'

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors'

import BadgeDetail from './container/BadgeDetail'
import Friends from './container/Friends'
import Home from './container/Home'
import JournalEditor from './container/journal/JournalEditor'
import JournalMain from './container/journal/JournalMain'
import Login from './container/Login'
import LoginInitial from './container/LoginInitial'
import MyPage from './container/MyPage'
import NavigationBar from './component/NavigationBar'
import db from './firebaseInit'
import React from 'react'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500], // primary color
    },
    secondary: {
      main: orange[500], // secondary color
    },
  },
})

const journalRef = '/nayeon/journals'
const frequestRef = '/nayeon/frequests'
const friendRef = '/nayeon/friends'

function App() {
  const [mainBadge, setMainBadge] = React.useState(0)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route
            path="/biky/home"
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
          <Route path="/biky/" exact component={LoginInitial} />
          <Route path="/biky/myPage" exact render={() => <MyPage
                      mainBadge={mainBadge}          
          />} />
          <Route path="/biky/badgeDetail" exact render={() => 
          <BadgeDetail
            changeMainBadge={(id)=>setMainBadge(id)}
            mainBadge={mainBadge}
          />}/>
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
    </ThemeProvider>
  )
}

export default App
