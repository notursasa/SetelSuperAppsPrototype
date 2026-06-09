import React, { useState } from 'react';
import './Parking.css';

const Parking = ({ walletBalance, onPayParking, onBack, onShowToast }) => {
  const [activeTab, setActiveTab] = useState('AUTOMATED'); // AUTOMATED, STREET
  const [isAutomatedEnabled, setIsAutomatedEnabled] = useState(true);
  
  // Street Parking States
  const [selectedCouncil, setSelectedCouncil] = useState('DBKL');
  const [duration, setDuration] = useState(1); // Hours
  const [isProcessing, setIsProcessing] = useState(false);

  const hourlyRate = 0.80;
  const totalFee = duration * hourlyRate;

  const handlePayStreetParking = () => {
    if (walletBalance < totalFee) {
      onShowToast("Insufficient wallet balance for parking.");
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      onPayParking(totalFee);
      setIsProcessing(false);
      onShowToast(`Successfully paid RM ${totalFee.toFixed(2)} for Street Parking`);
      onBack();
    }, 1500);
  };

  const renderAutomated = () => (
    <div className="tab-content animate-fade-in">
      <div className="lpr-banner">
        <h3>Cashless & ticketless automated parking</h3>
        <p>Powered by License Plate Recognition (LPR)</p>
      </div>

      <div className="vehicle-card">
        <div className="vehicle-header">
          <span className="vehicle-icon">🚗</span>
          <div className="vehicle-info">
            <h4>My Honda Civic</h4>
            <div className="license-plate">
              <span>WXY 1234</span>
            </div>
          </div>
        </div>
        
        <div className="toggle-row">
          <span>Enable Automated Parking</span>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={isAutomatedEnabled} 
              onChange={() => setIsAutomatedEnabled(!isAutomatedEnabled)} 
            />
            <span className="slider round"></span>
          </label>
        </div>
        {!isAutomatedEnabled && (
          <p className="toggle-hint">Turn on to enter parking facilities automatically like a boss.</p>
        )}
      </div>

      <div className="locations-list">
        <h4>Supported Locations</h4>
        <ul>
          <li>
            <div className="location-icon">🏢</div>
            <div className="location-details">
              <h5>Suria KLCC</h5>
              <span>Kuala Lumpur</span>
            </div>
          </li>
          <li>
            <div className="location-icon">🛍️</div>
            <div className="location-details">
              <h5>Sunway Pyramid</h5>
              <span>Subang Jaya</span>
            </div>
          </li>
          <li>
            <div className="location-icon">🏥</div>
            <div className="location-details">
              <h5>Damansara Specialist Hospital 2</h5>
              <span>Petaling Jaya</span>
            </div>
          </li>
          <li>
            <div className="location-icon">✈️</div>
            <div className="location-details">
              <h5>Senai International Airport</h5>
              <span>Johor</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  const renderStreet = () => (
    <div className="tab-content animate-fade-in">
      <div className="street-banner">
        <h3>Pay, monitor & extend easily</h3>
        <p>Valid across participating councils</p>
      </div>

      <div className="form-group">
        <label>Select Council</label>
        <select 
          value={selectedCouncil} 
          onChange={(e) => setSelectedCouncil(e.target.value)}
          className="parking-select"
        >
          <option value="DBKL">Dewan Bandaraya Kuala Lumpur (DBKL)</option>
          <option value="MBPJ">Majlis Bandaraya Petaling Jaya (MBPJ)</option>
          <option value="MBSA">Majlis Bandaraya Shah Alam (MBSA)</option>
          <option value="MPSJ">Majlis Perbandaran Subang Jaya (MPSJ)</option>
        </select>
      </div>

      <div className="form-group">
        <label>Select Location / Zone</label>
        <select className="parking-select">
          <option>Zone A (Standard)</option>
          <option>Zone B (Premium)</option>
        </select>
      </div>

      <div className="vehicle-selector">
        <label>Vehicle</label>
        <div className="selected-vehicle">
          <span className="license-plate">WXY 1234</span>
        </div>
      </div>

      <div className="duration-selector">
        <label>Duration (Hours)</label>
        <div className="duration-controls">
          <button 
            className="duration-btn" 
            onClick={() => setDuration(Math.max(1, duration - 1))}
            disabled={duration <= 1}
          >-</button>
          <div className="duration-display">
            <span className="duration-val">{duration}</span>
            <span className="duration-unit">hr</span>
          </div>
          <button 
            className="duration-btn" 
            onClick={() => setDuration(duration + 1)}
          >+</button>
        </div>
      </div>

      <div className="payment-summary">
        <div className="summary-row">
          <span>Parking Fee (RM 0.80/hr)</span>
          <span>RM {totalFee.toFixed(2)}</span>
        </div>
        <div className="summary-row wallet-balance-row">
          <span>Setel Wallet Balance</span>
          <span>RM {walletBalance.toFixed(2)}</span>
        </div>
      </div>

      <div className="payment-bottom-bar">
        <button 
          className={`btn btn-primary parking-submit-btn ${isProcessing ? 'processing' : ''}`} 
          onClick={handlePayStreetParking}
          disabled={isProcessing || walletBalance < totalFee}
        >
          {isProcessing ? 'Processing...' : `Pay RM ${totalFee.toFixed(2)}`}
        </button>
      </div>
    </div>
  );

  return (
    <div className="parking-screen animate-slide-up">
      <div className="parking-header">
        <button className="back-btn" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h2>Parking</h2>
        <div style={{width: '24px'}}></div>
      </div>

      <div className="parking-tabs">
        <button 
          className={`tab-btn ${activeTab === 'AUTOMATED' ? 'active' : ''}`}
          onClick={() => setActiveTab('AUTOMATED')}
        >
          Automated
        </button>
        <button 
          className={`tab-btn ${activeTab === 'STREET' ? 'active' : ''}`}
          onClick={() => setActiveTab('STREET')}
        >
          Street
        </button>
      </div>

      <div className="parking-scroll-area">
        {activeTab === 'AUTOMATED' ? renderAutomated() : renderStreet()}
      </div>
    </div>
  );
};

export default Parking;
