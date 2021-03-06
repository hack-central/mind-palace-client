import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './views/Landing';
import Home from './views/Home';
import Report from './views/Report';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/report">
          <Report />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
