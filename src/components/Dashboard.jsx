import React from 'react';
import './Dashboard.css';

const Dashboard = ({ onTriggerGeolocation, onFeatureNotImplemented }) => {
  return (
    <div className="dashboard-scroll-area">
      {/* Top Header Bar */}
      <header className="authentic-header">
        <div className="header-top">
          <div className="scanner-icon" onClick={onFeatureNotImplemented} style={{ cursor: 'pointer' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2M16 4h2a2 2 0 012 2v2M16 20h2a2 2 0 002-2v-2M9 12h6" /></svg>
          </div>
          <div className="header-divider"></div>
          <div className="balance-info" onClick={onFeatureNotImplemented} style={{ cursor: 'pointer' }}>
            <div className="balance-value">RM 74.00 <span>v</span></div>
            <div className="balance-action">TOP-UP</div>
          </div>
          <div className="header-divider"></div>
          <div className="points-info" onClick={onFeatureNotImplemented} style={{ cursor: 'pointer' }}>
            <div className="points-value"><span className="mesra-logo">M</span> 2.6k pts</div>
            <div className="points-action">REDEEM</div>
          </div>
        </div>
      </header>

      {/* Main Action Card */}
      <section className="fuel-station-card">
        <div className="station-header">
          <svg className="fuel-icon" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
          <span>FUEL STATION</span>
        </div>
        <h2 className="station-name">PETRONAS Kota Damansara</h2>
        <button className="btn btn-primary authentic-btn" onClick={onFeatureNotImplemented}>PURCHASE FUEL</button>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="services-grid authentic-grid">
          <div className="service-item" onClick={onFeatureNotImplemented} style={{ cursor: 'pointer' }}>
            <div className="auth-icon-wrapper"><span role="img" aria-label="Petrol credit card">💳</span></div>
            <span className="service-label">Petrol credit<br/>card</span>
          </div>
          <div className="service-item" onClick={onFeatureNotImplemented} style={{ cursor: 'pointer' }}>
            <div className="auth-icon-wrapper"><span role="img" aria-label="Parking">🅿️</span></div>
            <span className="service-label">Parking</span>
          </div>
          <div className="service-item" onClick={onFeatureNotImplemented} style={{ cursor: 'pointer' }}>
            <div className="auth-icon-wrapper"><span role="img" aria-label="Café Mesra">☕</span></div>
            <span className="service-label">Café Mesra<br/>pick-up</span>
          </div>
          <div className="service-item" onClick={onFeatureNotImplemented} style={{ cursor: 'pointer' }}>
            <div className="auth-icon-wrapper"><span role="img" aria-label="Car service">🚗</span></div>
            <span className="service-label">Car service</span>
          </div>
          
          <div className="service-item" onClick={onFeatureNotImplemented} style={{ cursor: 'pointer' }}>
            <div className="auth-icon-wrapper"><span role="img" aria-label="PETRONAS Shop">🛍️</span></div>
            <span className="service-label">PETRONAS<br/>Shop</span>
          </div>
          <div className="service-item" onClick={onFeatureNotImplemented} style={{ cursor: 'pointer' }}>
            <div className="auth-icon-wrapper"><span role="img" aria-label="Insurance">🛡️</span></div>
            <span className="service-label">Motor takaful<br/>& insurance</span>
          </div>
          <div className="service-item" onClick={onFeatureNotImplemented} style={{ cursor: 'pointer' }}>
            <div className="auth-icon-wrapper"><span role="img" aria-label="EV Charging">⚡</span></div>
            <span className="service-label">EV charging</span>
          </div>
          <div className="service-item" onClick={onFeatureNotImplemented} style={{ cursor: 'pointer' }}>
            <div className="auth-icon-wrapper"><span role="img" aria-label="Fuel Price">⛽</span></div>
            <span className="service-label">Fuel price</span>
          </div>
        </div>

        <div className="view-more-container">
          <button className="view-more-btn" onClick={onFeatureNotImplemented}>View more services <span role="img" aria-label="wave">👋</span></button>
        </div>
      </section>

      {/* Promo Section Mock */}
      <section className="get-started-section">
        <h3>Get started with Setel</h3>
        <div className="promo-scroll">
          <div className="promo-card bg-pink">
            <div className="promo-text">Refer & Earn</div>
          </div>
          <div className="promo-card bg-blue">
            <div className="promo-text">Setel Share</div>
          </div>
        </div>
      </section>
      
      {/* Pad bottom for navbar */}
      <div style={{ height: '80px' }}></div>
    </div>
  );
};

export default Dashboard;
