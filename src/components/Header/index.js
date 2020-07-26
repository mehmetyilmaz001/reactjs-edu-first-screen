import React from 'react';

const Header = (props) => {
    return (
      <header className="App-header">
          {props.title}
      </header>
    )
}

export default Header;