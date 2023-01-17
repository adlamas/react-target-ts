import axios from 'axios';
import Endpoints from 'constants/endpoints'
import { useState } from 'react';
import 'components/signUp/Form.css'
import { redirect, useNavigate } from "react-router-dom";

const Form = () => {
  const [ formValues, setFormValues ] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    gender: '',
  })

  const [requestError, setrequestError] = useState(false);
  const nav = useNavigate();

  const SignUp = async () => {
    const signUpEndpoint: string = `${process.env.REACT_APP_API_BASE_URL}/${Endpoints.USERS}`

    try {
      const res = await axios.post(
        signUpEndpoint,
        { user:
          {
            email: formValues.email,
            password: formValues.password,
            gender: formValues.gender,
            password_confirmation: formValues.confirmPassword,
            username: formValues.name
          }
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }}
        );
      
      setrequestError(false);
      //return {
      //  accessToken: res.headers['access-token'],
      //  client: res.headers['client'],
      //  uid: res.headers['uid']
      //}
      nav("/");
    }
    catch(e: any){
      setrequestError(true);
    }
  }

  return (
    <form
      onSubmit={e => {
      e.preventDefault();
      SignUp();
    }}>

      {requestError && <p className="signup-error">An error has occurred</p>}

      <h1 className="input-title">SIGN UP</h1>

      <div className="input-element">
        <label htmlFor="name">NAME</label>
        <input
          type="text"
          name="name"
          onChange={e => {
              setFormValues({...formValues, [e.target.name]: e.target.value })
          }}
        />
      </div>

      <div className="input-element">
        <label htmlFor="email">EMAIL</label>
        <input 
          type="email"
          name="email"
          onChange={e => {
            setFormValues({...formValues, [e.target.name]: e.target.value })
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
            setFormValues({...formValues, [e.target.name]: e.target.value })
        }}
        />
      </div>

      <div className="input-element">
        <label htmlFor="confirm-password">CONFIRM PASSWORD</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={e => {
            setFormValues({...formValues, [e.target.name]: e.target.value })
        }}
        />
      </div>

      <div className="input-element">
        <label htmlFor="gender">GENDER</label>
        <select name="gender"
          onChange={e => {
            setFormValues({...formValues, [e.target.name]: e.target.value })
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
