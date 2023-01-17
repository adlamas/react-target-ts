import 'components/signUp/Form.css'
import 'components/signIn/Form.css'
import smiliesIcon from 'assets/images/smilies.png'
import { useState } from 'react';
import Paths from 'constants/paths';


const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={e => {
      e.preventDefault();
    }}
      className='main-page-form'
    >
      <div className=''>
        <img src={smiliesIcon} alt="Two faces smiling" />
      </div>
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
          <input style={{}}
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

        <h6 className="forgot-password">Forgot your password?</h6>
      </section>
      
      <h5 className="connect-with">CONNECT WITH FACEBOOK</h5>
      <div className="sign-in-section">
        <a href={Paths.SIGN_UP}><p className='sign-in-text'>SIGN UP</p></a>
      </div>
    </form>
  )  
}

export default Form;
