import React, { useState } from 'react';
import './FuelPrice.css';

const FuelPrice = ({ onBack }) => {
  const [region, setRegion] = useState('PENINSULAR'); // PENINSULAR, BORNEO

  const fuelData = {
    PENINSULAR: [
      {
        id: 'ron95',
        name: 'RON95',
        desc: 'PETRONAS Primax 95 with Pro-Drive',
        color: '#facc15', // Yellow
        price: '3.72',
        budiPrice: '1.99',
        change: '-RM0.20'
      },
      {
        id: 'ron97',
        name: 'RON97',
        desc: 'PETRONAS Primax 97 with Pro-Race',
        color: '#10b981', // Green
        price: '4.35',
        change: '-RM0.30'
      },
      {
        id: 'diesel-b10',
        name: 'Diesel B10/B20',
        desc: 'PETRONAS Dynamic Diesel Euro 5 with Pro-Drive - B10 / B20',
        color: '#3b82f6', // Blue
        price: '4.67',
        change: '-RM0.20'
      },
      {
        id: 'diesel-b7',
        name: 'Diesel B7',
        desc: 'PETRONAS Dynamic Diesel Euro 5 with Pro-Drive - B7',
        color: '#6366f1', // Indigo
        price: '4.87',
        change: '-RM0.20'
      }
    ],
    BORNEO: [
      {
        id: 'ron95',
        name: 'RON95',
        desc: 'PETRONAS Primax 95 with Pro-Drive',
        color: '#facc15',
        price: '3.72',
        budiPrice: '1.99',
        change: '-RM0.20'
      },
      {
        id: 'ron97',
        name: 'RON97',
        desc: 'PETRONAS Primax 97 with Pro-Race',
        color: '#10b981',
        price: '4.35',
        change: '-RM0.30'
      },
      {
        id: 'diesel-b10',
        name: 'Diesel B10/B20',
        desc: 'PETRONAS Dynamic Diesel Euro 5 with Pro-Drive - B10 / B20',
        color: '#3b82f6',
        price: '2.15',
      },
      {
        id: 'diesel-b7',
        name: 'Diesel B7',
        desc: 'PETRONAS Dynamic Diesel Euro 5 with Pro-Drive - B7',
        color: '#6366f1',
        price: '2.35',
      }
    ]
  };

  const currentData = fuelData[region];

  return (
    <div className="fuel-price-screen animate-slide-up">
      <div className="parking-header">
        <button className="back-btn" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h2>Fuel Prices</h2>
        <div style={{width: '24px'}}></div>
      </div>

      <div className="price-scroll-area">
        <div className="date-banner">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="calendar-icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          <div>
            <span className="week-label">This week</span>
            <span className="date-range">Thu, 4 Jun 2026 - Wed, 10 Jun 2026</span>
          </div>
        </div>

        <div className="region-tabs">
          <button 
            className={`region-btn ${region === 'PENINSULAR' ? 'active' : ''}`}
            onClick={() => setRegion('PENINSULAR')}
          >
            Peninsular Malaysia
          </button>
          <button 
            className={`region-btn ${region === 'BORNEO' ? 'active' : ''}`}
            onClick={() => setRegion('BORNEO')}
          >
            Sabah & Sarawak
          </button>
        </div>

        <div className="prices-list">
          {currentData.map(fuel => (
            <div className="fuel-card" key={fuel.id}>
              <div className="fuel-card-header">
                <div className="fuel-identity">
                  <div className="fuel-color-dot" style={{ backgroundColor: fuel.color }}></div>
                  <div className="fuel-title-group">
                    <h3>{fuel.name}</h3>
                    <p>{fuel.desc}</p>
                  </div>
                </div>
              </div>
              
              <div className="fuel-price-details">
                <div className="price-main">
                  <span className="price-label">Pump price</span>
                  <div className="price-value-group">
                    <span className="currency">RM</span>
                    <span className="amount">{fuel.price}</span>
                    {fuel.change && (
                      <span className="price-change">{fuel.change}</span>
                    )}
                  </div>
                </div>
                
                {fuel.budiPrice && (
                  <div className="price-budi">
                    <span className="budi-badge">BUDI95</span>
                    <div className="price-value-group">
                      <span className="currency">RM</span>
                      <span className="amount">{fuel.budiPrice}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="promo-card">
          <div className="promo-icon">🚗</div>
          <div className="promo-text">
            <h4>Skip the queue</h4>
            <p>Pay for fuel from your vehicle with Setel</p>
          </div>
          <button className="btn-small">Learn more</button>
        </div>

      </div>
    </div>
  );
};

export default FuelPrice;
