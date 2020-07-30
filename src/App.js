import React from 'react';
import './app.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path="/" exact>
            <UserList />
          </Route>

          <Route path="/user-detail/:name" exact>
            <UserDetail />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
