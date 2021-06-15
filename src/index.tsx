import React from 'react';
import ReactDOM from 'react-dom';
import ForgotPassword from './signupSection/forgot';
// import ForgotPassword from './signupSection/forgot'
import ResetForm from './signupSection/resetForm'
import 'tailwindcss/dist/base.min.css';
// import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <ForgotPassword/> */}
    <ForgotPassword/>
    <ResetForm/>
  </React.StrictMode>,
  document.getElementById('root')
);
