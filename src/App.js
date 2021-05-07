import logo from './logo.svg';
import './App.css';
import NavigationBar from "./component/NavigationBar"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Diary from "./container/Diary"
import Friends from './container/Friends';
import Settings from './container/Settings';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Diary} />
        <Route path="/setting" exact component={Settings} />
        <Route path="/friend" component={Friends} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>);
}

export default App;
