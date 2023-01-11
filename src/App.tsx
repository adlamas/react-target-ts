import './App.css';

import menu from "./assets/images/menu.png"
import i6Icon from './assets/images/i6.png'
import appStoreIcon from './assets/images/appstore.png'
import facebookIcon from './assets/images/Facebook.png'
import twitterIcon from './assets/images/Twitter.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <section className="main-section">
          <section className="main-section--left-side">
            <div className="hamburguer-menu">
              <img src={menu} alt="menu" />
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
                  <select name="gender">
                    <option value="select-your-gender">SELECT YOUR GENDER</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="not-to-say">Prefer not to say</option>
                  </select>
                </div>

                <div className="input-element">
                  <input type="submit" name="sign-up" value="SIGN UP" />
                </div>

                <div className="sign-in-section" >
                  <p className='sign-in-text'>SIGN IN</p>
                </div>
              </form>
            </div>
          </section>
          <section className="main-section--right-side">
            <div className='right-image'>
              <div className='image principal-image'><img src={i6Icon} alt="i6"/></div>
              <div className='image'><img src={appStoreIcon} alt="appstore" /></div>
              <div className='image'>
                <img src={facebookIcon} alt="facebook" className="social-icon"/>
                <img src={twitterIcon} alt="twitter" className="social-icon"/>
              </div>
            </div>
          </section>
        </section>
      </body>
    </div>
  );
}

export default App;
