import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Friends from './container/Friends';
import JournalEditor from './container/journal/JournalEditor';
import JournalMain from "./container/journal/JournalMain"
import NavigationBar from "./component/NavigationBar"
import Settings from './container/Settings';
import Login from './container/Login';
import LoginInitial from './container/LoginInitial';
import MyPage from './container/MyPage';
import BadgeDetail from './container/BadgeDetail';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={JournalMain} />
        <Route path="/edit/:id" exact component={JournalEditor} />

        <Route path="/login" exact component={Login}/>
        <Route path="/loginInitial" exact component={LoginInitial}/>
        <Route path="/myPage" exact component={MyPage}/>
        <Route path="/badgeDetail" exact component={BadgeDetail}/>

        <Route path="/setting" exact component={Settings} />
        <Route path="/friend" component={Friends} />
        {/* <Redirect from="*" to="/" /> */}
      </Switch>
    </BrowserRouter>);
}

export default App;
