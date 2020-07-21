import React from 'react';
import './app.scss';

const users = [
  {name: "Mehmet", surname: "Yılmaz", city: "Istanbul", title: "Lead Software Developer"},
  {name: "Emral", surname: "Yılmaz", city: "Istanbul", title: "Jr Flutter Developer"},
  {name: "Semih", surname: "Yavuz", city: "Istanbul", title: "Sr. Backend Developer"},
  {name: "Yunus", surname: "Alğan", city: "Istanbul", title: "Fullstack Developer"},
  {name: "Erol", surname: "Ülgü", city: "Istanbul", title: "Analyst"},
];

const Header = (props) => {
  return (
    <header className="App-header">
        {props.title}
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Header title="First Screen Application - Users" />
      <aside>
        <ul>
            {users.map(i => <li>{i.name} {i.surname}</li>)}
        </ul>
      </aside>
    </div>
  );
}

export default App;
