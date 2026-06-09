import React, { useState } from 'react';
import './PurchaseFuel.css';

const PurchaseFuel = ({ walletBalance, onBack }) => {
  const [selectedPump, setSelectedPump] = useState(null);

  const pumps = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="fuel-screen animate-slide-up">
      <div className="fuel-header">
        <button className="back-btn" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h2>Purchase Fuel</h2>
        <div style={{width: '24px'}}></div>
      </div>

      <div className="station-info">
        <h3>PETRONAS Kota Damansara</h3>
        <p>Select your pump number to begin</p>
      </div>

      <div className="pump-grid">
        {pumps.map(pump => (
          <div 
            key={pump} 
            className={`pump-card ${selectedPump === pump ? 'selected' : ''}`}
            onClick={() => setSelectedPump(pump)}
          >
            <span className="pump-icon">⛽</span>
            <span className="pump-number">{pump}</span>
          </div>
        ))}
      </div>

      {selectedPump && (
        <div className="payment-bottom-bar animate-slide-up">
          <div className="payment-details">
            <span className="payment-label">Paying with</span>
            <span className="payment-method">Setel Wallet (RM {walletBalance.toFixed(2)})</span>
          </div>
          <button className="btn btn-primary" onClick={() => alert("Simulation Complete: Fuel Authorized!")}>
            Authorize Pump {selectedPump}
          </button>
        </div>
      )}
    </div>
  );
};

export default PurchaseFuel;
