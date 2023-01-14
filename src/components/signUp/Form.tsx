import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import 'components/signUp/Form.css'

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setpasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [requestError, setrequestError] = useState(false);

  async function SignUp() {
    debugger;
    try {
      const res = await axios.post(
        'http://localhost:3001/api/v1/users',
        { user:
          {
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
            gender: gender,
            username: name
          }
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }}
        );
      
      setrequestError(false);
      return {
        accessToken: res.headers['access-token'],
        client: res.headers['client'],
        uid: res.headers['uid']
      }
    }
    catch(e: any){
      debugger;
      setrequestError(true);
    }
  }

  return (
    <form
      onSubmit={e => {
      e.preventDefault();
      SignUp();
    }}>

      {requestError === true?
        <p className="signup-error">An error has occurred</p>: null
      }
      <h1 className="input-title">SIGN UP</h1>

      <div className="input-element">
        <label htmlFor="name">NAME</label>
        <input
          type="text"
          name="name"
          onChange={e => {
            setName(e.target.value);
          }}
        />
      </div>

      <div className="input-element">
        <label htmlFor="email">EMAIL</label>
        <input 
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
        <label htmlFor="confirm-password">CONFIRM PASSWORD</label>
        <input
          type="password"
          name="confirm-password"
          onChange={e => {
            setpasswordConfirmation(e.target.value);
          }}
        />
      </div>

      <div className="input-element">
        <label htmlFor="gender">GENDER</label>
        <select name="gender"
          onChange={e => {
            setGender(e.target.value);
          }}          
        >
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
  )  
}

export default Form;
