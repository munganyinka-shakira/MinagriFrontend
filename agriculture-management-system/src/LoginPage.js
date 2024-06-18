import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="container">
        <div className="left">
          <div className="ministry">
            <p>Republic of Rwanda</p>
            <p>Ministry of Agriculture</p>
            <p>And Animal Resources</p>
          </div>
          <div className="title">
            <p>INTEGRATED</p>
            <p>AGRICULTURE MANAGEMENT</p>
            <p>INFORMATION SYSTEM</p>
          </div>
        </div>
        <div className="right">
          <div className="language">
            <a href="#">Languages</a>
          </div>
          <h1>Bienvenue!</h1>
          <p>Log in using your AMIS account to access several services and information in the platform</p>
          <form>
            <input type="text" placeholder="Username or email" />
            <input type="password" placeholder="Password" />
            <a href="#" className="forgot-password">Forgot your password?</a>
            <button type="submit">Sign In</button>
          </form>
          <a href="#" className="back-home">Back to home screen</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
