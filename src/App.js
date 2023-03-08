import React from 'react';
import './App.css';

function App() {

  const toggleMenu = () => {
    document.body.classList.toggle('open');
  }
  return (
    <div class='parent'>
      <button
        class='burguer'
        onClick={toggleMenu()}
      ></button>

      <div class='menu'>
        <nav>
          <a
            href='#anything'
            style={{animationDelay: '0.1s'}}
            id='home'
          >HOME</a>
          <a
            id='anything'
            href='#home'
            style={{animationDelay: '0.2s'}}
          >ANYTHINK</a>
        </nav>
      </div>
    </div>
  );
}

export default App;
