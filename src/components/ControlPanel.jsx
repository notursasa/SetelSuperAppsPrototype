import React from 'react';
import './ControlPanel.css';

const ControlPanel = ({ showMap, onToggleMap, onTriggerNotification, onReset }) => {
  return (
    <div className="control-panel">
      <div className="control-panel-header">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        <span>Simulation Controls</span>
      </div>
      
      <div className="control-actions">
        <label className="cp-toggle-switch">
          <input type="checkbox" checked={showMap} onChange={onToggleMap} />
          <span className="cp-slider round"></span>
          <span className="cp-toggle-label">Map View</span>
        </label>

        <button className="control-btn primary" onClick={onTriggerNotification}>
          <span>🔔</span> Trigger Notification
        </button>

        <button className="control-btn secondary" onClick={onReset}>
          <span>🔄</span> Reset Prototype
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
