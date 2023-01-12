import 'App.css';

import menu from 'assets/images/menu.png'
import SignUpForm from 'components/signUp/Form'
import RightSection from 'components/common/RightSection'

function SignUp() {
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
              <SignUpForm />
            </div>
          </section>
              <RightSection />
        </section>
      </body>
    </div>
  );
}

export default SignUp;
