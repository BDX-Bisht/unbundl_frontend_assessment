import { useState } from 'react';
import dentalImg from '../assets/dental.png';
import './ScanBooking.css';

export default function ScanBooking() {
  const [hasGaps, setHasGaps] = useState('yes');
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [consent, setConsent] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Request Submitted!\nName: ${fullName}\nPhone: ${mobileNumber}\nGaps: ${hasGaps}\nConsent: ${consent ? 'Yes' : 'No'}`);
  };

  return (
    <section className="whistle-scan-booking">
      <div className="booking-container">
        
        {/* Form Title & Radio Selection */}
        <h2 className="booking-title">Do you have Teeth Gaps or Crooked Teeth?</h2>
        
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="radio-group">
            <label className="radio-label">
              <input 
                type="radio" 
                name="hasGaps" 
                value="yes" 
                checked={hasGaps === 'yes'} 
                onChange={() => setHasGaps('yes')}
                className="custom-radio"
              />
              <span className="radio-text">Yes</span>
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="hasGaps" 
                value="no" 
                checked={hasGaps === 'no'} 
                onChange={() => setHasGaps('no')}
                className="custom-radio"
              />
              <span className="radio-text">No</span>
            </label>
          </div>

          {/* Form Fields Row */}
          <div className="form-fields-row">
            {/* Full Name Field */}
            <div className="input-group">
              <label className="floating-label">Full Name*</label>
              <input 
                type="text" 
                placeholder="Ajay Kumar"
                value={fullName} 
                onChange={(e) => setFullName(e.target.value)} 
                required 
                className="text-input"
              />
            </div>

            {/* Mobile Number Field */}
            <div className="input-group">
              <input 
                type="tel" 
                placeholder="+91 Mobile number*" 
                value={mobileNumber} 
                onChange={(e) => setMobileNumber(e.target.value)} 
                required 
                className="text-input"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn">
              Book a Free Scan
            </button>
          </div>

          {/* Consent Checkbox */}
          <div className="consent-group">
            <label className="consent-label">
              <input 
                type="checkbox" 
                checked={consent} 
                onChange={(e) => setConsent(e.target.checked)} 
                className="custom-checkbox"
              />
              <span className="consent-text">
                I hereby consent to receive calls / messages from Whistle and its partners and override DND settings.
              </span>
            </label>
          </div>
        </form>

        {/* Referral Card */}
        <div className="clinic-referral-card">
          <div className="referral-text-side">
            <h3>Book a Free 3D Teeth Scan and Orthodontist Consult in a <br /> Clove Dental Clinic near you.</h3>
          </div>
          <div className="referral-action-side">
            <div className="clove-logo-wrapper">
              <img src={dentalImg} alt="Clove Dental" className="clove-logo" />
            </div>
            <a href="#find-clinic" className="find-clinic-link">
              Find Clinic
              <svg 
                viewBox="0 0 24 24" 
                className="chevron-down-svg" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
