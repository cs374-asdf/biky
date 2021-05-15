import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Friends from './container/Friends';
import JournalEditor from './container/journal/JournalEditor';
import JournalMain from "./container/journal/JournalMain"
import NavigationBar from "./component/NavigationBar"
import Settings from './container/Settings';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={JournalMain} />
        <Route path="/edit/:id" exact component={JournalEditor} />
        <Route path="/setting" exact component={Settings} />
        <Route path="/friend" component={Friends} />
        {/* <Redirect from="*" to="/" /> */}
      </Switch>
    </BrowserRouter>);
}

export default App;
