import React, { useState } from 'react';
import './App.css';

function App() {

  const [ active, serActive ] = useState(false);
  const url = ''
  const toggleMenu = () => {
    serActive(!active);
  //   document.body.classNameList.toggle('open');
  }
  return (
    <div className='parent'>
      <div className="background"></div>
      <button className="navbar-burger" onClick={toggleMenu}></button>
      <div id='container' className={`container${active ? 'open': ''}`}>
        <nav>
          <a href={url} style = {{animationDelay: "0.1s"}}>About</a>
          <a href={url} style = {{animationDelay: "0.2s"}}>Portfolio</a>
          <a href={url} style = {{animationDelay: "0.3s"}}>Services</a>
          <a href={url} style = {{animationDelay: "0.5s"}}>Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default App;