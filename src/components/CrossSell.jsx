import React, { useState } from 'react';
import './CrossSell.css';

const CrossSell = ({ onComplete }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const items = [
    { id: 1, name: 'Artisan Iced Latte', price: 12.00, img: '/mesra_coffee.png' },
    { id: 2, name: 'Butter Croissant', price: 8.50, img: '/mesra_croissant.png' }
  ];

  const toggleItem = (item) => {
    if (selectedItems.find(i => i.id === item.id)) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleCheckout = () => {
    const total = selectedItems.reduce((acc, curr) => acc + curr.price, 0);
    onComplete(selectedItems, total);
  };

  return (
    <div className="cross-sell-screen animate-slide-up">
      <div className="header-simple">
        <h2>Great choice! 🚗</h2>
        <p>Your car is being washed.</p>
      </div>

      <div className="upsell-container glass-panel">
        <div className="mesra-brand">
          <h3>Cafe Mesra</h3>
          <span className="pickup-tag">Drive-thru Pickup</span>
        </div>
        
        <p className="upsell-copy">
          Grab a bite on your commute home. We'll have it ready for you at the next Petronas station.
        </p>

        <div className="items-list">
          {items.map(item => {
            const isSelected = selectedItems.find(i => i.id === item.id);
            return (
              <div 
                key={item.id} 
                className={`item-card ${isSelected ? 'selected' : ''}`}
                onClick={() => toggleItem(item)}
              >
                <img src={item.img} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <span>RM {item.price.toFixed(2)}</span>
                </div>
                <div className="checkbox">
                  {isSelected && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bottom-bar glass-panel">
        <button className="btn btn-primary" onClick={handleCheckout}>
          {selectedItems.length > 0 ? `Add & Checkout (+RM ${selectedItems.reduce((a,c) => a + c.price, 0).toFixed(2)})` : 'Skip & Checkout'}
        </button>
      </div>
    </div>
  );
};

export default CrossSell;
