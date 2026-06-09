import React from 'react';
import './Receipt.css';

const Receipt = ({ crossSellTotal, onReset }) => {
  const carWashPrice = 38.00;
  const platformCommission = 0.15; // 15%
  const totalAmount = carWashPrice + crossSellTotal;
  const commissionEarned = carWashPrice * platformCommission;

  return (
    <div className="receipt-screen animate-slide-up">
      <div className="success-icon animate-pulse-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
      </div>
      
      <h2>Payment Successful</h2>
      <p className="total-paid">RM {totalAmount.toFixed(2)}</p>
      
      <div className="receipt-card glass-panel">
        <div className="receipt-row">
          <span>Auto-Spa Premium Wash</span>
          <span>RM {carWashPrice.toFixed(2)}</span>
        </div>
        
        {crossSellTotal > 0 && (
          <div className="receipt-row">
            <span>Cafe Mesra Items</span>
            <span>RM {crossSellTotal.toFixed(2)}</span>
          </div>
        )}
        
        <hr className="divider" />
        
        <div className="receipt-row total">
          <span>Total Paid</span>
          <span>RM {totalAmount.toFixed(2)}</span>
        </div>
      </div>

      {/* Demo Insights Panel */}
      <div className="insights-panel glass-panel">
        <h4>Demo Insights (Platform Metrics)</h4>
        <div className="insight-row">
          <span>Platform Commission (15% of Wash)</span>
          <span className="profit">+RM {commissionEarned.toFixed(2)}</span>
        </div>
        <p className="insight-note">High-margin revenue generated without fuel dependency.</p>
      </div>

      <button className="btn btn-secondary back-btn" onClick={onReset}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default Receipt;
