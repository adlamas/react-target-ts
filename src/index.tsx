import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUp from 'components/SignUp';
import SignIn from 'components/SignIn';
import Welcome from 'components/Welcome';
import reportWebVitals from './reportWebVitals';
import Paths from 'constants/paths';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={Paths.ROOT} element={<SignIn />} />
        <Route path={Paths.SIGN_UP} element={<SignUp />} />
        <Route path={Paths.WELCOME} element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
