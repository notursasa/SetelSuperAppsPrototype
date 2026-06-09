import React from 'react';
import './NotificationModal.css';

const NotificationModal = ({ onAccept, onDecline }) => {
  return (
    <div className="notification-modal glass-panel animate-slide-up">
      <div className="modal-header">
        <span className="badge">Location Triggered</span>
        <button className="close-btn" onClick={onDecline}>×</button>
      </div>
      
      <div className="banner-image">
        <img src="/car_wash_banner.png" alt="Premium Car Wash" />
      </div>

      <div className="modal-content">
        <h2>Auto-Spa Premium Wash</h2>
        <p className="vendor-info">By AutoSpa 3rd-Party Partner</p>
        
        <p className="description">
          We noticed you're parked at Menara Maxis. Get your car washed while you work! We'll handle everything.
        </p>
        
        <div className="price-tag">
          <span className="original-price">RM 45</span>
          <span className="discounted-price">RM 38.00</span>
        </div>

        <div className="action-buttons">
          <button className="btn btn-secondary" onClick={onDecline}>Maybe Later</button>
          <button className="btn btn-primary" onClick={onAccept}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
