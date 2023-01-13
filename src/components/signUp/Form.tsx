import axios from 'axios';
import { Component } from 'react';
import { render } from 'react-dom';
import { useState } from 'react';


export default class SignUp extends Component {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  gender: string;

  constructor(props: any) {
    super(props);
    this.email = '';
    this.password = '';
    this.passwordConfirmation = '';
    this.gender = '';
    this.username = '';
  }

  async sendSignUp() {
    try {
      debugger;
      const res = await axios.post(
        'http://localhost:3001/api/v1/users',
        { user:
          {
            email: this.email,
            password: this.password,
            password_confirmation: this.passwordConfirmation,
            gender: this.gender
          }
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }}
        );

      debugger;
      return res;
    }
    catch(e){
      console.log(e)
    }
  }

  render(){
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          return this.sendSignUp();
        }}
      >
        <p className="input-title">SIGN UP</p>

        <div className="input-element">
          <label htmlFor="name">NAME</label>
          <input
            type="text"
            name="name"
            onChange={e => {
              this.username = e.target.value;
              console.log(this.username);
            }}
          />
        </div>

        <div className="input-element">
          <label htmlFor="email">EMAIL</label>
          <input 
            type="email"
            name="email"
            onChange={e => {
              this.email = e.target.value;
              console.log(this.email);
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
              this.password = e.target.value;
            }}
          />
        </div>

        <div className="input-element">
          <label htmlFor="confirm-password">CONFIRM PASSWORD</label>
          <input
            type="password"
            name="confirm-password"
            onChange={e => {
            this.passwordConfirmation = e.target.value;
            }}
          />
        </div>

        <div className="input-element">
          <label htmlFor="gender">GENDER</label>
          <select name="gender"
            onChange={e => {
            this.gender = e.target.value;
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
}

