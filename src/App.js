import React, { useState } from 'react';
import './App.css';

function App() {

  const url = ''
  const [active, serActive] = useState(false);

  const toggleMenu = () => {
    serActive(!active);
  }

  return (

    <body className={(active ? 'open' : '')}>
      <div className="background"></div>
      <button className="navbar-burger" onClick={toggleMenu} ></button>
      <div className="menu">
        <nav>
          <a href={url} > About </a>
          <a href={url} > Portfolio </a>
        </nav>
      </div>
    </body>
  );
}

export default App;
