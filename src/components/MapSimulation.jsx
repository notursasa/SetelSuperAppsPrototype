import React, { useState } from 'react';
import './MapSimulation.css';

const MapSimulation = ({ onSimulateArrival }) => {
  const [isDriving, setIsDriving] = useState(false);
  const [hasArrived, setHasArrived] = useState(false);

  const startDrive = () => {
    setIsDriving(true);
    setHasArrived(false);
    
    // Simulate the drive duration before arriving
    setTimeout(() => {
      setIsDriving(false);
      setHasArrived(true);
      onSimulateArrival();
    }, 4000); // 4 seconds of driving
  };

  return (
    <div className="map-simulation-container">
      <div className="map-overlay">
        <div className="map-title">
          <h2>Map Simulation</h2>
          <p>Watch the vehicle arrive at Menara Maxis to trigger the ecosystem loop</p>
        </div>
        
        <div className="interactive-map">
          <img src="/presentation_map.png" alt="City Map" className="map-bg" />
          
          {/* Destination Marker */}
          <div className="location-marker office">
            <div className="marker-pin pulse-ring">🏢</div>
            <div className="marker-label">Menara Maxis</div>
          </div>

          {/* Animated Vehicle */}
          <div className={`moving-vehicle ${isDriving ? 'driving' : ''} ${hasArrived ? 'arrived' : ''}`}>
            <div className="vehicle-icon">🚗</div>
          </div>

          {!isDriving && !hasArrived && (
            <button className="simulate-car-btn animate-pulse-btn" onClick={startDrive}>
              <span role="img" aria-label="play" className="car-icon">▶️</span>
              <span className="car-label">Start Drive</span>
            </button>
          )}
          
          {hasArrived && (
            <button className="simulate-car-btn arrived-state" onClick={() => { setIsDriving(false); setHasArrived(false); }}>
              <span className="car-label">Reset Simulation</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapSimulation;
