import headerLogo from '../assets/header.png';
import './Header.css';

export default function Header() {
  return (
    <header className="whistle-header">
      <div className="header-container">
        <div className="logo-wrapper">
          <img src={headerLogo} alt="Whistle logo" className="header-logo" />
        </div>
        <div className="header-actions">
          <a href="tel:+1234567890" className="call-btn" aria-label="Call Us">
            <svg 
              viewBox="0 0 44 44" 
              className="phone-icon-svg" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="22" cy="22" r="22" fill="currentColor" />
              <path 
                d="M17 14a2 2 0 0 0-2 2v1.5a10 10 0 0 0 10 10h1.5a2 2 0 0 0 2-2V24.5a1 1 0 0 0-.8-.9l-3-.6a1 1 0 0 0-1 .4l-1 1.2a12.5 12.5 0 0 1-4.8-4.8l1.2-1a1 1 0 0 0 .4-1l-.6-3a1 1 0 0 0-.9-.8H17z" 
                fill="white"
              />
              <path 
                d="M26 16a2.5 2.5 0 0 1 2.5 2.5" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
              <path 
                d="M26 12a6.5 6.5 0 0 1 6.5 6.5" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
