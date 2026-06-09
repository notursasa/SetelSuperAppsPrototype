import React from 'react';
import './PushNotification.css';

const PushNotification = ({ onClick }) => {
  return (
    <div className="push-notification animate-slide-down" onClick={onClick}>
      <div className="push-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
      </div>
      <div className="push-content">
        <div className="push-header">
          <span className="push-app-name">Setel System</span>
          <span className="push-time">Now</span>
        </div>
        <p className="push-title">Car Wash Available 🚗</p>
        <p className="push-message">You've arrived at Menara Maxis! Tap to view premium auto-spa offers while you work.</p>
      </div>
    </div>
  );
};

export default PushNotification;
