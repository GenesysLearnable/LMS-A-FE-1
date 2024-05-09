import React, { useState } from 'react';
import { FaEnvelope, FaGoogle, FaApple } from 'react-icons/fa';
import '../signup.css'


const SignUpPage = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="signup-container">
      <h1>Create an Account</h1>
      <h5>Create an account</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email </label>
          <div className="email-input">   
          <FaEnvelope />
            <input
              type="email"
              id="email"
              placeholder ="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="continue-button">Continue</button>
      </form>
      <p className="login-text">Already have an account? <span>Login</span></p>
      <div>
        <button className="google-button">
          <FaGoogle /> Continue with Google
          
        </button>
        <button className="apple-button">
          <FaApple /> Continue with Apple
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;