import React, { useState, useEffect } from 'react';
import './FeatureSimulation.css';

const FeatureSimulation = ({ featureName, icon, onBack }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate network load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [featureName]);

  return (
    <div className="feature-screen animate-slide-up">
      <div className="feature-header">
        <button className="back-btn" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h2>{featureName}</h2>
        <div style={{width: '24px'}}></div>
      </div>

      <div className="feature-content">
        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading {featureName}...</p>
          </div>
        ) : (
          <div className="simulated-state animate-fade-in">
            <div className="feature-hero-icon">
              <span role="img" aria-label={featureName}>{icon}</span>
            </div>
            <h3>{featureName}</h3>
            <p>This is a simulated screen for the prototype presentation.</p>
            
            <div className="mock-ui-elements">
              <div className="mock-card"></div>
              <div className="mock-card delay-1"></div>
              <div className="mock-card delay-2"></div>
            </div>

            <button className="btn btn-primary" onClick={onBack}>Return to Dashboard</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureSimulation;
