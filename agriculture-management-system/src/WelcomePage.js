import React, { useState, useEffect } from 'react';
import './WelcomePage.css';

function WelcomePage() {
  const [headerText, setHeaderText] = useState('Murakaza Neza!');

  useEffect(() => {
    const texts = ['Murakaza Neza!', 'Bienvenue!', 'Welcome!', 'Karibu sana!'];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setHeaderText(texts[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="WelcomePage">
      <div className="container">
        <div className="left">
          <h1>{headerText}</h1>
          <p>Iolemp ipsum lolemp ipsum log tums</p>
          <p> sarum dem tuu zapp iturrmum dee.</p>
          <div className="title-box"> 
            <h4><span className="high">INTEGRATED</span></h4>
            <h6> <span className="highlight">AGRICULTURE</span>MANAGEMENT</h6>
            <h5> INFORMATION SYSTEM</h5>
          </div>
          <div className="login-box">
            <button className="login-button">Log in to access the system</button>
            <div className="links">
            
              <a href="/home">Back to home screen</a>
              <a href="/register">New Registration</a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="ministry">
          <p><span>Republic of Rwanda</span> </p>
            <p>Ministry of Agriculture </p>
            <p>And Animal Resources</p>
            </div>
            <div className="h3-container">
            <h4>INTEGRATED </h4>
            <h4>AGRICULTURE MANAGEMENT</h4>
            <h4>INFORMATION SYSTEM</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
