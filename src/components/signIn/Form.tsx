import 'components/signUp/Form.css'
import 'components/signIn/Form.css'

import smiliesIcon from 'assets/images/smilies.png'
import Paths from 'constants/paths';
import SignIn from 'services/signIn/SignIn';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [requestError, setRequestError] = useState(false);
  const nav = useNavigate();  

  const signIn = async () => {
    const res: boolean | Error = await SignIn(email, password);

    if(res === true) {
      setRequestError(false);
      nav(Paths.WELCOME);      
    }
    else if(res instanceof Error) {
      setRequestError(true);
    }
  }

  return (
    <form onSubmit={e => {
      e.preventDefault();
      signIn();
    }}
      className='main-page-form'
    >
      <div>
        <img src={smiliesIcon} alt="Two faces smiling" />
      </div>

      {requestError && <p className="main-page--request-error">An error has occurred</p>}
      <p>
        <h1 className="main-page--title">TARGET MVD</h1>
        <h4 className="main-page--subtitle">Find people near you & Connect </h4>
        <h5 className="main-page--description">
          Create a  target  wherever on the map, specify your interest: Travel,
          Dating, Music, etc and start conecting with others who share your interest.
        </h5>
      </p>     

      <section className='main-page--input-section'>
        <div className="main-page--input-div">
          <label htmlFor="email" className='main-page--input-label'>EMAIL</label>
          <input
            type="email"
            name="email"
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="main-page--input-div">
          <label htmlFor="password" className='main-page--input-label'>PASSWORD</label>
          <input
            type="password"
            name="password"
            placeholder="MIN. 6 CHARACTERS LONG"
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="main-page--input-div main-page--input-sign-in">
          <input type="submit" name="sign-up" value="SIGN IN" />
        </div>

        <h6 className="main-page--forgot-password">Forgot your password?</h6>
      </section>
      
      <h5 className="main-page--connect-with">CONNECT WITH FACEBOOK</h5>
      <div className="main-page--sign-in-section">
        <a href={Paths.SIGN_UP}><p className='main-page--sign-in-text'>SIGN UP</p></a>
      </div>
    </form>
  )  
}

export default Form;
