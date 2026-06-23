import productImg from '../assets/product1.png';
import './ProductFeatures.css';

export default function ProductFeatures() {
  const marqueeItems = [
    { text: "Our inaugural launch benefit", isBold: false },
    { text: "Free teeth scan", highlight: "worth ₹500", isBold: true },
    { text: "Free orthodontic consultation", highlight: "worth ₹1500", isBold: true },
  ];

  // Duplicate items to ensure seamless scrolling
  const renderMarqueeContent = () => (
    <div className="marquee-content-track">
      {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
        <span key={idx} className="marquee-item">
          {item.isBold ? (
            <>
              <strong>{item.text}</strong> {item.highlight && <span className="highlight-tag">{item.highlight}</span>}
            </>
          ) : (
            item.text
          )}
          <span className="marquee-separator">•</span>
        </span>
      ))}
    </div>
  );

  return (
    <section className="whistle-product-features">
      {/* Infinite Marquee Alert Bar */}
      <div className="marquee-banner">
        <div className="marquee-scroller">
          {renderMarqueeContent()}
          {renderMarqueeContent()}
        </div>
      </div>

      {/* Main Grid/Flex Container */}
      <div className="features-container">
        <div className="features-content">
          <h2 className="features-heading">Dream smiles achieved secretly</h2>
          <div className="features-paragraphs">
            <p>
              Experience the superior quality of our Whistle Aligners crafted with 3-layer PU material. With 450+ clinics nationwide, enjoy comfortable treatment by expert orthodontists at House of Clove
            </p>
            <p>
              The pricing is different for every case. Cases with higher complexity requiring more aligners and additional time and effort from our dentists.
            </p>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="product-pricing-card">
          <div className="card-top-row">
            <div className="price-details">
              <h3 className="card-product-title">Whistle Aligners</h3>
              <p className="original-price">₹84,000</p>
              <p className="discount-price">
                starting at <span className="discount-value">₹47,999</span>
              </p>
              <p className="taxes-muted">inc. of all taxes</p>
            </div>
            <div className="product-image-side">
              <img src={productImg} alt="Whistle Aligners case" className="product-case-img" />
            </div>
          </div>

          <div className="card-bottom-row">
            <ul className="bullets-list">
              <li>
                <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Offer valid for a limited time
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Easy financing options
              </li>
            </ul>
            <a href="#learn-more" className="learn-more-link">
              Learn more
              <svg className="arrow-right-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
