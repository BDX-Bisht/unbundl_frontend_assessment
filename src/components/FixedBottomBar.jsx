import './FixedBottomBar.css';

export default function FixedBottomBar() {
  return (
    <div className="fixed-bottom-bar">
      <div className="bottom-bar-container">
        
        {/* Left Side: Call-to-action Text */}
        <div className="bar-text-side">
          <p className="bar-cta-text">Ready for your perfect smile?</p>
        </div>

        {/* Right Side: CTA Action Buttons */}
        <div className="bar-actions-side">
          <a href="#book-home" className="bar-btn btn-primary">
            Book scan at Home
          </a>
          <a href="#book-clinic" className="bar-btn btn-secondary">
            Book scan at Clinic
          </a>
        </div>

      </div>
    </div>
  );
}
