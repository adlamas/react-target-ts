import 'components/signUp/Form.css'
import smiliesIcon from 'assets/images/smilies.png'

import axios, { AxiosError } from 'axios';
import { useState } from 'react';


const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [requestError, setrequestError] = useState(false);

  async function SignIn() {
  }

  return (
    <form onSubmit={e => { e.preventDefault(); SignIn(); }}
      className='main-form'
    >
      
      {requestError === true?
        <p className="signup-error">An error has occurred</p>: null
      }

      <div className='image'>
        <img src={smiliesIcon} alt="Two faces smiling" />
      </div>
      <h1 className="input-title">TARGET MVD</h1>

      <h3>Find people near you & Connect </h3>
      <h4>
      Create a  target  wherever on the map, specify your interest: Travel,
      Dating, Music, etc and start conecting with others who share your interest.
      </h4>

      <div className="input-element">
        <label htmlFor="email">EMAIL</label>
        <input style={{}}
          type="email"
          name="email"
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="input-element">
        <label htmlFor="password">PASSWORD</label>
        <input
          type="password"
          name="password"
          placeholder="MIN. 6 CHARACTERS LONG"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div className="input-element">
        <input type="submit" name="sign-up" value="SIGN IN" />
        <h6>Forgot your password?</h6>
      </div>
      
      <h5>CONNECT WITH FACEBOOK</h5>
      <div className="sign-in-section" >
        <p className='sign-in-text'>SIGN UP</p>
      </div>
    </form>
  )  
}

export default Form;
