import React from 'react';
import './app.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import PublicLayout from './layouts/PublicLayout';


const PublicRoute = ({ children, ...rest }) => {
  return (
    <Route
    {...rest}
    render={() =>
      (
        <PublicLayout>
          {children}
        </PublicLayout>
      ) 
    }
  />
  )
}


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          
          <PublicRoute path="/" exact>
            <UserList />
          </PublicRoute>

          <PublicRoute path="/user-detail/:name" exact>
            <UserDetail />
          </PublicRoute>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
