import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import PushNotification from './components/PushNotification';
import NotificationModal from './components/NotificationModal';
import CrossSell from './components/CrossSell';
import Receipt from './components/Receipt';
import MapSimulation from './components/MapSimulation';
import ControlPanel from './components/ControlPanel';
import PurchaseFuel from './components/PurchaseFuel';
import FeatureSimulation from './components/FeatureSimulation';
import SetelWallet from './components/SetelWallet';
import Parking from './components/Parking';
import FuelPrice from './components/FuelPrice';
import CafeMesra from './components/CafeMesra';
import BudiMadani from './components/BudiMadani';
import CarService from './components/CarService';

function App() {
  const [appState, setAppState] = useState('IDLE'); // IDLE, PUSH_RECEIVED, TRIGGERED, CROSS_SELL, RECEIPT, PURCHASE_FUEL, GENERIC_FEATURE, SETEL_WALLET, PARKING, FUEL_PRICE, CAFE_MESRA, BUDI_MADANI, CAR_SERVICE
  const [crossSellTotal, setCrossSellTotal] = useState(0);
  const [toastMessage, setToastMessage] = useState('');
  const [showMap, setShowMap] = useState(true);
  const [activeFeature, setActiveFeature] = useState(null); // stores { name, icon }
  const [walletBalance, setWalletBalance] = useState(74.00);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handlePayParking = (amount) => {
    setWalletBalance(prev => prev - amount);
  };

  const handlePayCafe = (amount) => {
    setWalletBalance(prev => prev - amount);
  };

  const handleSimulateArrival = () => {
    setAppState('PUSH_RECEIVED');
  };

  const handleOpenNotification = () => {
    setAppState('TRIGGERED');
  };

  const handleDeclineWash = () => {
    setAppState('IDLE');
  };

  const handleAcceptWash = () => {
    setAppState('CROSS_SELL');
  };

  const handleCompleteCrossSell = (items, total) => {
    setCrossSellTotal(total);
    setAppState('RECEIPT');
  };

  const handleReset = () => {
    setAppState('IDLE');
    setCrossSellTotal(0);
    setActiveFeature(null);
  };

  const handleFeatureNotImplemented = () => {
    showToast("This feature is outside the scope of the SuperApp demo.");
  };

  const handleOpenPurchaseFuel = () => {
    setAppState('PURCHASE_FUEL');
  };

  const handleOpenFeature = (name, icon) => {
    setActiveFeature({ name, icon });
    setAppState('GENERIC_FEATURE');
  };

  const handleOpenWallet = () => {
    setAppState('SETEL_WALLET');
  };

  const handleTopUpWallet = (amount) => {
    setWalletBalance(prev => prev + amount);
  };

  const handleOpenParking = () => {
    setAppState('PARKING');
  };

  const handleOpenFuelPrice = () => {
    setAppState('FUEL_PRICE');
  };

  const handleOpenCafe = () => {
    setAppState('CAFE_MESRA');
  };

  const handleOpenBudiMadani = () => {
    setAppState('BUDI_MADANI');
  };

  const handleOpenCarService = () => {
    setAppState('CAR_SERVICE');
  };

  return (
    <div className={`presentation-layout ${!showMap ? 'map-hidden' : ''}`}>
      {/* Admin Controls */}
      <ControlPanel 
        showMap={showMap} 
        onToggleMap={() => setShowMap(!showMap)} 
        onTriggerNotification={handleSimulateArrival}
        onReset={handleReset}
      />

      {/* Left Pane: Map Simulation */}
      {showMap && <MapSimulation onSimulateArrival={handleSimulateArrival} />}

      {/* Right Pane: Mobile App Mockup */}
      <div className={`phone-mockup-wrapper ${!showMap ? 'centered-phone' : ''}`}>
        <div className="app-container">
          
          {(appState === 'IDLE' || appState === 'PUSH_RECEIVED') && (
            <Dashboard 
              walletBalance={walletBalance}
              onTriggerGeolocation={() => {}} 
              onFeatureNotImplemented={handleFeatureNotImplemented}
              onOpenPurchaseFuel={handleOpenPurchaseFuel}
              onOpenFeature={handleOpenFeature}
              onOpenWallet={handleOpenWallet}
              onOpenParking={handleOpenParking}
              onOpenFuelPrice={handleOpenFuelPrice}
              onOpenCafe={handleOpenCafe}
              onOpenBudiMadani={handleOpenBudiMadani}
              onOpenCarService={handleOpenCarService}
            />
          )}

          {appState === 'PUSH_RECEIVED' && (
            <PushNotification onClick={handleOpenNotification} />
          )}

          {appState === 'TRIGGERED' && (
            <>
              <Dashboard 
                walletBalance={walletBalance}
                onTriggerGeolocation={() => {}} 
                onFeatureNotImplemented={handleFeatureNotImplemented}
                onOpenPurchaseFuel={handleOpenPurchaseFuel}
                onOpenFeature={handleOpenFeature}
                onOpenWallet={handleOpenWallet}
                onOpenParking={handleOpenParking}
                onOpenFuelPrice={handleOpenFuelPrice}
                onOpenCafe={handleOpenCafe}
                onOpenBudiMadani={handleOpenBudiMadani}
                onOpenCarService={handleOpenCarService}
              />
              <div className="overlay active" onClick={handleDeclineWash}></div>
              <NotificationModal onAccept={handleAcceptWash} onDecline={handleDeclineWash} />
            </>
          )}

          {appState === 'PURCHASE_FUEL' && (
            <PurchaseFuel walletBalance={walletBalance} onBack={() => setAppState('IDLE')} />
          )}

          {appState === 'SETEL_WALLET' && (
            <SetelWallet 
              balance={walletBalance} 
              onTopUp={handleTopUpWallet} 
              onBack={() => setAppState('IDLE')} 
              onShowToast={showToast}
            />
          )}

          {appState === 'PARKING' && (
            <Parking 
              walletBalance={walletBalance} 
              onPayParking={handlePayParking} 
              onBack={() => setAppState('IDLE')} 
              onShowToast={showToast}
            />
          )}

          {appState === 'FUEL_PRICE' && (
            <FuelPrice onBack={() => setAppState('IDLE')} />
          )}

          {appState === 'CAFE_MESRA' && (
            <CafeMesra 
              walletBalance={walletBalance} 
              onPayCafe={handlePayCafe} 
              onBack={() => setAppState('IDLE')} 
              onShowToast={showToast}
            />
          )}

          {appState === 'BUDI_MADANI' && (
            <BudiMadani onBack={() => setAppState('IDLE')} />
          )}

          {appState === 'CAR_SERVICE' && (
            <CarService onBack={() => setAppState('IDLE')} />
          )}

          {appState === 'GENERIC_FEATURE' && activeFeature && (
            <FeatureSimulation 
              featureName={activeFeature.name} 
              icon={activeFeature.icon} 
              onBack={() => setAppState('IDLE')} 
            />
          )}

          {appState === 'CROSS_SELL' && (
            <CrossSell onComplete={handleCompleteCrossSell} />
          )}

          {appState === 'RECEIPT' && (
            <Receipt crossSellTotal={crossSellTotal} onReset={handleReset} />
          )}

          {/* Toast Notification */}
          {toastMessage && (
            <div className="global-toast animate-toast-slide-up">
              {toastMessage}
            </div>
          )}

          {/* Persistent Bottom Navigation for authentic feel */}
          {(appState === 'IDLE' || appState === 'PUSH_RECEIVED' || appState === 'TRIGGERED') && (
            <div className="bottom-nav">
              <div className="nav-item active" onClick={handleFeatureNotImplemented}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                <span>Home</span>
              </div>
              <div className="nav-item" onClick={handleFeatureNotImplemented}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
                <span>Pay</span>
              </div>
              <div className="nav-item" onClick={handleFeatureNotImplemented}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                <span>Rewards</span>
              </div>
              <div className="nav-item" onClick={handleFeatureNotImplemented}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>Inbox</span>
              </div>
              <div className="nav-item" onClick={handleFeatureNotImplemented}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                <span>Profile</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
