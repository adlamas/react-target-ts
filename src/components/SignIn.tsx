import menu from 'assets/images/menu.png'
import SignInForm from 'components/signIn/Form'
import RightSection from 'components/common/RightSection'

const SignIn = () => {
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
              <SignInForm />
            </div>
          </section>
              <RightSection />
        </section>
      </body>
    </div>
  );
}

export default SignIn;
