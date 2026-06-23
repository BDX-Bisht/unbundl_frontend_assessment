import { useState } from 'react';
import brandLogo from '../assets/header.png';
import './WhistleApart.css';

export default function WhistleApart() {
  const [openRows, setOpenRows] = useState({});

  const toggleRow = (idx) => {
    setOpenRows(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const rows = [
    {
      feature: "Easy to complex cases",
      whistle: "Yes, mild to complex",
      other: "No, only mild to moderate",
      details: "Whistle treats a full range of orthodontic issues under direct doctor care, including deep bite, spacing, and severe crowding. Many other online brands only accept minor crowding cases."
    },
    {
      feature: "Clear-cut Pricing",
      whistle: "check",
      other: "cross",
      details: "Whistle has a transparent single price covering 3D scans, doctor consults, all aligners, retainers, and clinical support, without surprise upcharges or hidden fees."
    },
    {
      feature: "Aligner Change",
      whistle: "Every 10 days",
      other: "Every 2 weeks",
      details: "Advanced Zendura FLX material facilitates quicker adjustments, allowing you to change trays every 10 days instead of the usual 14 days, reducing overall treatment times."
    },
    {
      feature: "Clinical Partnership",
      whistle: "check",
      other: "cross",
      details: "Directly partnered with Clove Dental's network of 450+ physical clinics, giving you easy access to in-person orthodontist monitoring."
    },
    {
      feature: "Movement Between Cities",
      whistle: "check",
      other: "cross",
      details: "If you relocate within India, you can transfer your patient profile and aligner treatment to any local Clove Dental clinic at no extra cost."
    },
    {
      feature: "Complimentary Teeth Scaling",
      whistle: "check",
      other: "cross",
      details: "Includes a free professional teeth cleaning (scaling and polishing) session at our partner clinic to prepare your teeth before starting aligners."
    }
  ];

  const renderValue = (val) => {
    if (val === "check") {
      return (
        <span className="icon-badge check-badge">
          <svg viewBox="0 0 20 20" fill="currentColor" className="badge-svg">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </span>
      );
    }
    if (val === "cross") {
      return (
        <span className="icon-badge cross-badge">
          <svg viewBox="0 0 20 20" fill="currentColor" className="badge-svg">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      );
    }
    return <span className="text-val">{val}</span>;
  };

  return (
    <section className="whistle-apart-section">
      <div className="apart-container">
        <h2 className="apart-heading">What sets Whistle apart?</h2>
        
        {/* Table/Grid Wrapper */}
        <div className="apart-table">
          
          {/* Header Row */}
          <div className="table-header-row">
            <div className="header-cell col-features">Features</div>
            <div className="header-cell col-whistle highlighted-column">
              <img src={brandLogo} alt="Whistle" className="whistle-header-logo" />
            </div>
            <div className="header-cell col-other">Other Brands</div>
          </div>

          {/* Body Rows */}
          <div className="table-body">
            {rows.map((row, idx) => {
              const isOpen = !!openRows[idx];
              return (
                <div key={idx} className={`table-row-group ${isOpen ? 'row-expanded' : ''}`}>
                  
                  {/* Summary/Main Row */}
                  <div className="table-row" onClick={() => toggleRow(idx)}>
                    <div className="table-cell col-features">
                      <span className="feature-name-text">{row.feature}</span>
                      <svg 
                        viewBox="0 0 24 24" 
                        className={`chevron-icon ${isOpen ? 'chevron-rotated' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="table-cell col-whistle highlighted-column">
                      {renderValue(row.whistle)}
                    </div>
                    <div className="table-cell col-other">
                      {renderValue(row.other)}
                    </div>
                  </div>

                  {/* Expanded Detail Dropdown */}
                  {isOpen && (
                    <div className="row-detail-dropdown">
                      <div className="detail-inner">
                        <p className="detail-description">{row.details}</p>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
