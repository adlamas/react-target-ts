import React from 'react';
import logo from './logo.svg';
import '../App.css';

import menuIcon from '../assets/images/menu.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <div className="main-section">
          <div className="left-side">
            <div className="right-menu">
              <img src={menuIcon} alt="menu" />
            </div>
            <div className="input-section">
              <form>
                <p>SIGN UP</p>

                <div>
                  <input type="text">
                  </input>
                </div>
              </form>
            </div>
          </div>
          <div className="right-side">
            Right
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
