import React, { useState } from 'react';
import './CarService.css';

const CarService = ({ onBack }) => {
  const [step, setStep] = useState('WORKSHOP_DETAILS'); // WORKSHOP_DETAILS, SERVICE_SELECTION, BOOKING_SUCCESS
  const [selectedServices, setSelectedServices] = useState({
    'Brake': true,
    'Tyres': true,
    'Aircond service': false,
    'Suspension': false,
    'Gearbox': false,
    'Vehicle inspection': true,
    'Major repair': false
  });
  const [note, setNote] = useState('Help to also check driver side door, hard to close');
  const [agreed, setAgreed] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (service) => {
    setSelectedServices(prev => ({
      ...prev,
      [service]: !prev[service]
    }));
  };

  const handleSubmit = () => {
    if (!agreed) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('BOOKING_SUCCESS');
    }, 1500);
  };

  const renderWorkshopDetails = () => (
    <div className="car-service-step animate-fade-in">
      <div className="car-service-header">
        <button className="back-btn" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h2>Car service</h2>
        <div style={{width: '24px'}}></div>
      </div>

      <div className="cs-scroll-content pb-100">
        <div className="workshop-card">
          <h2 className="workshop-title">PETRONAS AutoExpert Cyberjaya</h2>
          <p className="workshop-sub">Maxipura Sdn Bhd</p>
          <div className="workshop-status">
            <span className="badge-open">OPEN</span>
            <span className="status-text">Closes at 6PM <span className="chevron-down">v</span></span>
          </div>
          <div className="workshop-actions">
            <button className="outline-btn-blue">VIEW ON MAP</button>
            <button className="outline-btn-blue">CALL</button>
          </div>
        </div>

        <div className="reviews-section">
          <div className="section-header">
            <h3>What people say</h3>
            <div className="rating-summary">
              <span className="google-icon">G</span> ⭐ 4.2 &gt;
            </div>
          </div>
          
          <div className="review-cards-scroll">
            <div className="review-card">
              <p className="review-text">"Knowledgable, polite and expert mechanic... very recommended..."</p>
              <div className="review-author">
                ⭐ 5 <span className="author-name">Petrie</span>
              </div>
            </div>
          </div>
        </div>

        <div className="benefits-section">
          <h3>Benefits</h3>
          <div className="benefit-row">
            <div className="benefit-icon oil-icon">🛢️</div>
            <p>Genuine PETRONAS engine oil with CoolTech+™ technology.</p>
          </div>
          <div className="benefit-row">
            <div className="benefit-icon cert-icon">🏅</div>
            <p>Certified and trained personnel, ensuring fast and exceptional services.</p>
          </div>
        </div>
      </div>

      <div className="bottom-fixed-bar">
        <button className="btn btn-primary full-width" onClick={() => setStep('SERVICE_SELECTION')}>
          BOOK AN APPOINTMENT
        </button>
      </div>
    </div>
  );

  const renderServiceSelection = () => (
    <div className="car-service-step animate-fade-in">
      <div className="car-service-header">
        <button className="back-btn" onClick={() => setStep('WORKSHOP_DETAILS')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h2>Car service</h2>
        <div style={{width: '24px'}}></div>
      </div>

      <div className="cs-scroll-content pb-100">
        <div className="services-list">
          {Object.entries(selectedServices).map(([service, isSelected]) => (
            <div className="service-checkbox-row" key={service} onClick={() => toggleService(service)}>
              <div className={`custom-checkbox ${isSelected ? 'checked' : ''}`}>
                {isSelected && <svg viewBox="0 0 24 24" fill="white"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>}
              </div>
              <span className="service-name">{service}</span>
            </div>
          ))}
        </div>

        <div className="notes-section">
          <label>Note to workshop (optional)</label>
          <textarea 
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="notes-textarea"
            placeholder="Write your note here..."
          ></textarea>
        </div>

        <div className="tnc-section" onClick={() => setAgreed(!agreed)}>
          <div className={`custom-checkbox ${agreed ? 'checked' : ''}`}>
            {agreed && <svg viewBox="0 0 24 24" fill="white"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>}
          </div>
          <p className="tnc-text">
            I have read and agreed to <span className="link-text">Setel's Terms & Conditions</span> and <span className="link-text">Privacy Policy</span>. All the information provided are accurate and true.
          </p>
        </div>
      </div>

      <div className="bottom-fixed-bar">
        <button 
          className={`btn btn-primary full-width ${isSubmitting ? 'processing' : ''}`} 
          onClick={handleSubmit}
          disabled={!agreed || isSubmitting}
        >
          {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
        </button>
      </div>
    </div>
  );

  const renderBookingSuccess = () => (
    <div className="car-service-step animate-fade-in">
      <div className="car-service-header dark-bg">
        <button className="back-btn white-icon" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <h2 className="white-text">Car service</h2>
        <div style={{width: '24px'}}></div>
      </div>

      <div className="cs-success-layout">
        <div className="success-hero-card">
          <div className="success-illustration">
            <div className="avatar-placeholder">👩‍💻</div>
          </div>
          <h2 className="success-title">Booking submitted</h2>
          <p className="success-subtitle">The workshop will contact you in 1 - 2 business days to confirm your booking date and time.</p>
          
          <div className="workshop-contact-box">
            <div className="ws-logo-box">PETRONAS AutoExpert</div>
            <div className="ws-contact-info">
              <h4>Cyberjaya</h4>
              <p>Maxipura Sdn Bhd</p>
            </div>
            <button className="call-text-btn">CALL</button>
          </div>
        </div>

        <div className="summary-section">
          <h3 className="section-label">SUMMARY</h3>
          <div className="summary-card">
            <div className="summary-row">
              <span className="s-label">Workshop</span>
              <span className="s-value right-align">
                PETRONAS AutoExpert Cyberjaya<br/>
                <span className="s-sub">Maxipura Sdn Bhd</span>
              </span>
            </div>
            <div className="summary-row">
              <span className="s-label">Vehicle no.</span>
              <span className="s-value">VEC 3896</span>
            </div>
            <div className="summary-row">
              <span className="s-label">Vehicle model</span>
              <span className="s-value">Volkswagen Golf</span>
            </div>
          </div>
        </div>

        <div className="bottom-padded">
          <button className="btn btn-primary full-width">GET DIRECTION</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="car-service-wrapper">
      {step === 'WORKSHOP_DETAILS' && renderWorkshopDetails()}
      {step === 'SERVICE_SELECTION' && renderServiceSelection()}
      {step === 'BOOKING_SUCCESS' && renderBookingSuccess()}
    </div>
  );
};

export default CarService;
