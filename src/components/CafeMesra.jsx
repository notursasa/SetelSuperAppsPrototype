import React, { useState } from 'react';
import './CafeMesra.css';

const CafeMesra = ({ walletBalance, onPayCafe, onBack, onShowToast }) => {
  const [step, setStep] = useState('STORE_SELECTION'); // STORE_SELECTION, MENU, CART, ORDER_STATUS
  const [selectedStore, setSelectedStore] = useState(null);
  const [cart, setCart] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);

  const menuItems = [
    { id: 'latte', name: 'Latte', price: 10.00, desc: 'Cold, Regular', category: 'Promo', icon: '☕' },
    { id: 'americano', name: 'Americano', price: 8.00, desc: 'Hot, Regular', category: 'Promo', icon: '☕' },
    { id: 'doughnut', name: 'Classic Doughnut', price: 3.90, desc: '', category: 'Promo', icon: '🍩' },
    { id: 'muffin', name: 'Double Chocolate Muffin', price: 6.90, desc: '', category: 'Promo', icon: '🧁' },
    { id: 'croissant', name: 'Butter Croissant', price: 5.90, desc: '', category: 'Pastries', icon: '🥐' },
    { id: 'puff', name: 'Chicken Curry Puff', price: 4.50, desc: '', category: 'Pastries', icon: '🥟' }
  ];

  const stores = [
    { id: 's1', name: 'Horizon Bangsar South Cafe Mesra', distance: '500 m away', label: 'NEAREST' },
    { id: 's2', name: 'NPE Taman Desa Cafe Mesra', distance: '1 km away', label: '' },
    { id: 's3', name: 'NKVE Klang Bound Cafe Mesra', distance: '1.5 km away', label: '' },
    { id: 's4', name: 'Damansara Jaya 2 Cafe Mesra', distance: '5.6 km away', label: '' }
  ];

  const handleSelectStore = (store) => {
    setSelectedStore(store);
    setStep('MENU');
  };

  const addToCart = (item) => {
    setCart(prev => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1
    }));
    onShowToast(`Added ${item.name} to cart`);
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [id, qty]) => {
      const item = menuItems.find(i => i.id === id);
      return total + (item.price * qty);
    }, 0);
  };

  const getCartItemCount = () => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  };

  const handlePay = () => {
    const total = getCartTotal();
    if (walletBalance < total) {
      onShowToast("Insufficient wallet balance.");
      return;
    }
    
    setIsProcessing(true);
    setTimeout(() => {
      onPayCafe(total);
      setIsProcessing(false);
      setOrderNumber(Math.floor(100000 + Math.random() * 900000));
      setStep('ORDER_STATUS');
    }, 1500);
  };

  const renderStoreSelection = () => (
    <div className="cafe-step store-selection animate-fade-in">
      <div className="cafe-hero">
        <div className="cafe-hero-text">
          Order online to pick up your coffee and food without waiting in line
        </div>
        <div className="cafe-hero-image">☕🥐</div>
      </div>
      
      <div className="store-list-container">
        <h3 className="section-label">ORDER AGAIN</h3>
        <div className="store-card" onClick={() => handleSelectStore({ name: 'Garden North Tower Midvalley Cafe Mesra' })}>
          <div className="store-logo">C</div>
          <div className="store-info">
            <h4>Garden North Tower Midvalley Cafe Mesra</h4>
            <p>7.8 km away</p>
          </div>
          <div className="store-arrow">&gt;</div>
        </div>

        <h3 className="section-label">STORES NEAR YOU</h3>
        {stores.map(store => (
          <div className="store-card" key={store.id} onClick={() => handleSelectStore(store)}>
            <div className="store-logo">C</div>
            <div className="store-info">
              <h4>{store.name}</h4>
              <p>{store.distance} {store.label && <span className="store-badge">{store.label}</span>}</p>
            </div>
            <div className="store-arrow">&gt;</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMenu = () => (
    <div className="cafe-step menu-selection animate-fade-in">
      <div className="menu-header">
        <button className="back-btn" onClick={() => setStep('STORE_SELECTION')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h2 className="truncate">{selectedStore?.name}</h2>
      </div>

      <div className="menu-tabs-wrapper">
        <div className="menu-tabs">
          <button className="menu-tab active">Promo</button>
          <button className="menu-tab">Espresso</button>
          <button className="menu-tab">Espresso Drinks</button>
          <button className="menu-tab">Mesra</button>
        </div>
      </div>

      <div className="menu-grid">
        <h3 className="section-label">PROMO</h3>
        <div className="items-grid">
          {menuItems.map(item => (
            <div className="menu-item-card" key={item.id}>
              <div className="item-image-box">
                <span className="item-emoji">{item.icon}</span>
                <button className="add-btn" onClick={() => addToCart(item)}>+</button>
              </div>
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>RM {item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {getCartItemCount() > 0 && (
        <div className="floating-cart-bar">
          <div className="cart-summary">
            <span className="cart-count">{getCartItemCount()} items</span>
            <span className="cart-total">RM {getCartTotal().toFixed(2)}</span>
          </div>
          <button className="view-cart-btn" onClick={() => setStep('CART')}>View Cart</button>
        </div>
      )}
    </div>
  );

  const renderCart = () => (
    <div className="cafe-step cart-review animate-fade-in">
      <div className="menu-header">
        <button className="back-btn" onClick={() => setStep('MENU')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h2>Review your cart</h2>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {Object.entries(cart).map(([id, qty]) => {
            const item = menuItems.find(i => i.id === id);
            return (
              <div className="cart-item-row" key={id}>
                <div className="cart-item-icon">{item.icon}</div>
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  {item.desc && <p className="item-desc">{item.desc}</p>}
                  <p className="item-price">RM {item.price.toFixed(2)} <span className="edit-link">· EDIT</span></p>
                </div>
                <div className="cart-item-qty">{qty}</div>
              </div>
            );
          })}
        </div>

        <div className="cart-section">
          <h3 className="section-label">PICK UP AT</h3>
          <div className="pickup-info">
            <h4>{selectedStore?.name}</h4>
            <p>Petronas, 1, Persiaran Surian, Kota Damansara, 47810 Petaling Jaya, Selangor</p>
            <button className="text-btn">GET DIRECTION</button>
          </div>
        </div>

        <div className="cart-section">
          <h3 className="section-label">PAYMENT DETAILS</h3>
          <div className="payment-row">
            <span>Sub total</span>
            <span>RM {getCartTotal().toFixed(2)}</span>
          </div>
          <div className="payment-row total">
            <span>Total</span>
            <span>RM {getCartTotal().toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="payment-bottom-sheet">
        <div className="wallet-row">
          <div className="wallet-info">
            <span className="wallet-icon">S</span>
            <div>
              <p className="wallet-label">Balance</p>
              <p className="wallet-val">RM {walletBalance.toFixed(2)}</p>
            </div>
          </div>
          <button className="outline-btn">TOP UP</button>
        </div>
        <button 
          className={`btn btn-primary pay-btn ${isProcessing ? 'processing' : ''}`}
          onClick={handlePay}
          disabled={isProcessing || walletBalance < getCartTotal()}
        >
          {isProcessing ? 'Processing...' : `PAY · RM ${getCartTotal().toFixed(2)}`}
        </button>
      </div>
    </div>
  );

  const renderOrderStatus = () => (
    <div className="cafe-step order-status animate-fade-in">
      <div className="menu-header dark-header">
        <button className="back-btn" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <h2 style={{color: 'white'}}>Café Mesra</h2>
        <div style={{width: '24px'}}></div>
      </div>

      <div className="status-card-container">
        <div className="status-card">
          <div className="status-illustration">
            <div className="illustration-placeholder">☕🛍️</div>
          </div>
          <div className="progress-bar">
            <div className="progress-fill"></div>
            <div className="progress-fill"></div>
          </div>
          <h2>Order is ready</h2>
          <p>Head over to the outlet to pick it up.</p>
          <div className="order-number">
            🛍️ #{orderNumber}
          </div>
          
          <div className="receive-section">
            <p>Have you received your items?</p>
            <button className="text-btn bold" onClick={onBack}>MARK AS RECEIVED</button>
          </div>
        </div>

        <div className="order-details-bottom">
          <h3 className="section-label">OUTLET DETAILS</h3>
          <div className="pickup-info">
            <h4>{selectedStore?.name}</h4>
            <p>Petronas, 1, Persiaran Surian, Kota Damansara, 47810 Petaling Jaya, Selangor</p>
            <button className="text-btn">GET DIRECTION</button>
          </div>
          <h3 className="section-label" style={{marginTop: '20px'}}>ITEMS</h3>
          {Object.entries(cart).map(([id, qty]) => {
            const item = menuItems.find(i => i.id === id);
            return (
              <div className="summary-item" key={id}>
                <span>{item.icon} {item.name}</span>
                <span>x {qty}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="cafe-mesra-screen animate-slide-up">
      {step === 'STORE_SELECTION' && (
        <div className="cafe-header-dark">
          <button className="back-btn" onClick={onBack}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <h2 style={{color: 'white'}}>Café Mesra</h2>
          <div style={{width: '24px'}}></div>
        </div>
      )}
      
      <div className="cafe-scroll-area">
        {step === 'STORE_SELECTION' && renderStoreSelection()}
        {step === 'MENU' && renderMenu()}
        {step === 'CART' && renderCart()}
        {step === 'ORDER_STATUS' && renderOrderStatus()}
      </div>
    </div>
  );
};

export default CafeMesra;
