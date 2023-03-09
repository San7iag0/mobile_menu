import React, { useState } from 'react';
import './App.css';

function App() {

  const url = ''
  const [active, serActive] = useState(false);

  const toggleMenu = () => {
      serActive(!active);
  }

  return (
    <div className=''>
      <div className="background"></div>
      <body className={( active ? 'open' : '' )}>
      <button className="navbar-burger" onClick={toggleMenu} ></button>
        <div className="menu">
          <nav>
            <a href={url} > About </a>
            <a href={url} > Portfolio </a>
          </nav>
        </div>

      </body>
    </div>
  );
}

export default App;
