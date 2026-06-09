import React from 'react';
import './BudiMadani.css';

const BudiMadani = ({ onBack }) => {
  return (
    <div className="budi-screen animate-slide-up">
      <div className="budi-header">
        <button className="back-btn" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h2>BUDI MADANI RON95</h2>
        <div style={{width: '24px'}}></div>
      </div>

      <div className="budi-scroll-area">
        <div className="budi-hero">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Jata_Negara_Malaysia.svg" alt="Jata Negara" className="gov-logo" />
          <h1>Enjoy BUDI MADANI RON95 with Setel</h1>
          <p>Get your subsidised fuel effortlessly</p>
        </div>

        <div className="budi-benefits">
          <div className="benefit-item">
            <div className="benefit-icon">📱</div>
            <span>Pay for fuel from your vehicle</span>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🪙</div>
            <span>Earn Mesra points</span>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">📜</div>
            <span>Digital receipts</span>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🎁</div>
            <span>Exclusive promotions</span>
          </div>
        </div>

        <div className="budi-verify-card">
          <div className="verify-content">
            <h3>Verify your Setel account now</h3>
            <p>You must have a verified Setel account to fully enjoy the BUDI MADANI benefits.</p>
            <button className="btn btn-primary verify-btn">Verify Now</button>
          </div>
          <div className="verify-illustration">👤✔️</div>
        </div>

        <div className="budi-info-section">
          <h2>Get up to 200 litres of BUDI95 fuel monthly at PETRONAS</h2>
          <div className="info-cards">
            <div className="info-card success">
              <div className="info-icon">✔️</div>
              <h4>Applicable for:</h4>
              <p>PETRONAS Primax 95 with Pro-Drive</p>
              <p className="budi-price">RM 1.99 / litre</p>
            </div>
            <div className="info-card error">
              <div className="info-icon">❌</div>
              <h4>Not applicable for:</h4>
              <p>PETRONAS Primax 97 with Pro-Race</p>
              <p>Diesel</p>
            </div>
          </div>
        </div>

        <div className="budi-steps-section">
          <h2>How to use BUDI95 with Setel?</h2>
          
          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Launch Setel app</h4>
              <p>Tap on 'Purchase Fuel' on the dashboard.</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Select your pump</h4>
              <p>Choose the pump number you are parked at.</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Select fuel type</h4>
              <p>Ensure you select RON95 to enjoy the subsidised rate.</p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Pay & Pump</h4>
              <p>Complete payment and start pumping.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudiMadani;
