import React from 'react';
import logo from './logo.svg';
import '../App.css';

import menuIcon from '../assets/images/menu.png'
import i6Icon from '../assets/images/i6.png'
import appStoreIcon from '../assets/images/appstore.png'
import facebookIcon from '../assets/images/Facebook.png'
import twitterIcon from '../assets/images/Twitter.png'

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
                <p className="input-title">SIGN UP</p>

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

                <div className="sign-in-section">
                  <span className='sign-in-text' >SIGN IN</span>
                </div>
              </form>
            </div>
          </div>
          <div className="right-side">
            <div className='right-image'>
              <div className='image principal-image'><img src={i6Icon} alt="i6"/></div>
              <div className='image'><img src={appStoreIcon} alt="appstore" /></div>
              <div className='image'>
                <img src={facebookIcon} alt="facebook" className="social-icon"/>
                <img src={twitterIcon} alt="twitter" className="social-icon"/>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
