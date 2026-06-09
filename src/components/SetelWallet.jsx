import React, { useState } from 'react';
import './SetelWallet.css';

const SetelWallet = ({ balance, onTopUp, onBack, onShowToast }) => {
  const [view, setView] = useState('HOME'); // HOME, TOPUP
  const [topUpAmount, setTopUpAmount] = useState(50);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleTopUpSubmit = () => {
    setIsProcessing(true);
    setTimeout(() => {
      onTopUp(topUpAmount);
      setIsProcessing(false);
      setView('HOME');
      onShowToast(`Successfully topped up RM ${topUpAmount.toFixed(2)}`);
    }, 1500);
  };

  const renderHome = () => (
    <div className="wallet-home animate-fade-in">
      <div className="wallet-header">
        <button className="back-btn" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h2>Wallet</h2>
        <div className="header-right">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        </div>
      </div>

      <div className="balance-card">
        <p className="balance-label">Available Balance</p>
        <h1 className="balance-amount">RM {balance.toFixed(2)}</h1>
        <div className="wallet-actions">
          <div className="action-btn" onClick={() => setView('TOPUP')}>
            <div className="action-icon topup-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            </div>
            <span>Top-up</span>
          </div>
          <div className="action-btn" onClick={() => onShowToast('Scan feature locked in prototype')}>
            <div className="action-icon scan-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
            </div>
            <span>Scan/Pay</span>
          </div>
          <div className="action-btn" onClick={() => onShowToast('Transfer feature locked in prototype')}>
            <div className="action-icon transfer-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
            </div>
            <span>Transfer</span>
          </div>
        </div>
      </div>

      <div className="transaction-history">
        <div className="history-header">
          <h3>Recent Transactions</h3>
          <span className="view-all">View all</span>
        </div>
        
        <div className="transaction-item">
          <div className="tx-icon purchase-icon">⛽</div>
          <div className="tx-details">
            <h4>PETRONAS Kota Damansara</h4>
            <span className="tx-date">Today, 9:41 AM</span>
          </div>
          <div className="tx-amount negative">-RM 50.00</div>
        </div>

        <div className="transaction-item">
          <div className="tx-icon reward-icon">☕</div>
          <div className="tx-details">
            <h4>Café Mesra</h4>
            <span className="tx-date">Yesterday, 8:15 AM</span>
          </div>
          <div className="tx-amount negative">-RM 12.50</div>
        </div>

        <div className="transaction-item">
          <div className="tx-icon topup-history-icon">💰</div>
          <div className="tx-details">
            <h4>Top-up Wallet</h4>
            <span className="tx-date">2 days ago</span>
          </div>
          <div className="tx-amount positive">+RM 100.00</div>
        </div>
      </div>
    </div>
  );

  const renderTopUp = () => (
    <div className="topup-view animate-slide-up">
      <div className="fuel-header">
        <button className="back-btn" onClick={() => setView('HOME')} disabled={isProcessing}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h2>Top-up Wallet</h2>
        <div style={{width: '24px'}}></div>
      </div>

      <div className="topup-content">
        <div className="amount-input-group">
          <span className="currency-symbol">RM</span>
          <input 
            type="number" 
            value={topUpAmount} 
            onChange={(e) => setTopUpAmount(Number(e.target.value))}
            className="amount-input"
            disabled={isProcessing}
          />
        </div>

        <div className="quick-amounts">
          {[20, 50, 100, 200].map(amt => (
            <button 
              key={amt} 
              className={`quick-amt-btn ${topUpAmount === amt ? 'active' : ''}`}
              onClick={() => setTopUpAmount(amt)}
              disabled={isProcessing}
            >
              RM {amt}
            </button>
          ))}
        </div>

        <div className="payment-method-section">
          <h3>Payment Method</h3>
          <div className="method-card">
            <div className="method-icon"><span role="img" aria-label="card">💳</span></div>
            <div className="method-details">
              <h4>Maybank Visa</h4>
              <span>**** **** **** 4242</span>
            </div>
            <div className="method-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
          </div>
        </div>
      </div>

      <div className="payment-bottom-bar">
        <button 
          className={`btn btn-primary topup-submit-btn ${isProcessing ? 'processing' : ''}`} 
          onClick={handleTopUpSubmit}
          disabled={isProcessing || topUpAmount <= 0}
        >
          {isProcessing ? 'Processing...' : `Top-up RM ${topUpAmount.toFixed(2)}`}
        </button>
      </div>
    </div>
  );

  return (
    <div className="wallet-screen">
      {view === 'HOME' ? renderHome() : renderTopUp()}
    </div>
  );
};

export default SetelWallet;
