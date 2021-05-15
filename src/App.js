import logo from './logo.svg';
import './App.css';
import NavigationBar from "./component/NavigationBar"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Diary from "./container/Diary"
import Friends from './container/Friends';
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
        <Route path="/" exact component={Diary} />
        <Route path="/login" exact component={Login}/>
        <Route path="/loginInitial" exact component={LoginInitial}/>
        <Route path="/myPage" exact component={MyPage}/>
        <Route path="/badgeDetail" exact component={BadgeDetail}/>
        <Route path="/setting" exact component={Settings} />
        <Route path="/friend" component={Friends} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>);
}

export default App;
