import { useState, useEffect } from 'react';
import './FAQAndFooter.css';

export default function FAQAndFooter() {
  const [openFAQ, setOpenFAQ] = useState({});
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFaqs = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      if (!res.ok) throw new Error('Failed to fetch FAQs');
      const data = await res.json();
      const mappedFaqs = data.map((post) => ({
        question: post.title.charAt(0).toUpperCase() + post.title.slice(1) + "?",
        answer: post.body.charAt(0).toUpperCase() + post.body.slice(1) + "."
      }));
      setFaqs(mappedFaqs);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const toggleFAQ = (idx) => {
    setOpenFAQ(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <footer className="whistle-footer-wrapper">
      
      {/* FAQ Accordion Block */}
      <div className="faq-section">
        <h2 className="faq-heading">
          <span className="purple-text">Got Questions?</span> We've got answers
        </h2>
        
        <div className="faq-accordion-list">
          {isLoading && (
            <div className="faq-skeleton-list">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="faq-skeleton-row">
                  <div className="skeleton-line skeleton-title"></div>
                  <div className="skeleton-badge"></div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="faq-error-container">
              <p className="faq-error-text">Oops! Unable to load FAQs. Please check your connection.</p>
              <button type="button" onClick={fetchFaqs} className="faq-retry-btn">
                Retry
              </button>
            </div>
          )}

          {!isLoading && !error && faqs.map((faq, idx) => {
            const isOpen = !!openFAQ[idx];
            return (
              <div key={idx} className={`faq-row-group ${isOpen ? 'faq-expanded' : ''}`}>
                <div className="faq-question-row" onClick={() => toggleFAQ(idx)}>
                  <span className="faq-question-text">{faq.question}</span>
                  <span className={`faq-toggle-icon ${isOpen ? 'rotated' : ''}`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
                {isOpen && (
                  <div className="faq-answer-dropdown">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Dark Footer Block */}
      <div className="dark-footer">
        <div className="dark-footer-container">
          
          {/* Quick Links */}
          <div className="footer-column col-quick-links">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#book-scan">Book a Free Scan</a></li>
              <li><a href="#how-it-works">How it Works</a></li>
              <li><a href="#range-aligners">Range of Aligners</a></li>
              <li><a href="#aligners-vs-braces">Aligners vs Braces</a></li>
              <li><a href="#faqs">FAQs</a></li>
            </ul>
          </div>

          {/* Get in touch */}
          <div className="footer-column col-get-in-touch">
            <h4 className="footer-col-title">Get in Touch Now!</h4>
            <div className="contact-details">
              <div className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:011-6932-8350">011-6932-8350</a>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:support@whistle.in">support@whistle.in</a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-column col-social">
            <h4 className="footer-col-title">Follow us on</h4>
            <div className="social-icons">
              {/* Instagram */}
              <a href="#instagram" className="social-link" aria-label="Instagram">
                <svg className="social-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#facebook" className="social-link" aria-label="Facebook">
                <svg className="social-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#twitter" className="social-link" aria-label="X">
                <svg className="social-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z M4 20l6.768 -6.768 M20 4l-6.768 6.768" />
                </svg>
              </a>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="footer-column col-policy">
            <ul className="policy-links-list">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>

        </div>
      </div>

    </footer>
  );
}
