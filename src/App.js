import React, { useState } from 'react';
import './app.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import LoginPage from './pages/Login';
import PublicLayout from './layouts/PublicLayout';

import Intro from './components/Intro';
import { useSelector } from 'react-redux';

const PublicRoute = ({ children, location, ...rest }) => {
  
  const user = useSelector(s => s.auth.authUser);

  return (
    <Route
      {...rest}
      render={() => {
        
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        } else {
          return <PublicLayout>
            {children}
          </PublicLayout>
        }
      }

      }
    />
  )
}

function App() {

  const [ introLoaded, setIntroLoaded ] = useState(false);

  if(!introLoaded){
    return  <Intro onLoad={() => setIntroLoaded(true)} />
  }


  return (
    
      <div className="App">
        <Router>
          <Switch>

            <PublicRoute path="/" exact>
              <UserList />
            </PublicRoute>

            <PublicRoute path="/user-detail/:id" exact>
              <UserDetail />
            </PublicRoute>

            <Route path="/login">
              <LoginPage />
            </Route>

          </Switch>
        </Router>
      </div>
    
  );
}

export default App;
