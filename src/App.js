import React from 'react';
import './app.scss';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';


function App() {

  const [ selectedUser, setSelectedUser ] = React.useState(null);

  return (
    <div className="App">
      <UserList onSelectUser={ (user) => setSelectedUser(user)} />

      {selectedUser && <UserDetail user={selectedUser} />}
      
    </div>
  );
}

export default App;
