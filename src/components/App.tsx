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
                <p className="input-text">SIGN UP</p>

                <div className="input-element">
                  <label htmlFor="name">NAME</label>
                  <input type="text" name="name" />
                </div>

                <div className="input-element">
                  <label htmlFor="email">EMAIL</label>
                  <input type="email" name="email" />
                </div>

                <div className="input-element">
                  <label htmlFor="password">PASSWORD</label>
                  <input type="password" name="password" placeholder="MIN. 6 CHARACTERS LONG" />
                </div>

                <div className="input-element">
                  <label htmlFor="confirm-password">CONFIRM PASSWORD</label>
                  <input type="text" name="confirm-password" />
                </div>

                <div className="input-element">
                  <label htmlFor="gender">GENDER</label>
                  <input type="text" name="gender" />
                </div>

                <div className="input-element">
                  <input type="submit" name="sign-up" value="SIGN UP" />
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
