import React from 'react';
import { useSelector } from 'react-redux';

const Header = (props) => {

    const title = useSelector(state => state.app.title);

    return (
      <header className="App-header">
          {title}
      </header>
    )
}

export default Header;