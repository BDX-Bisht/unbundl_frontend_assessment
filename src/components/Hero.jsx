import heroImg from '../assets/hero.png';
import './Hero.css';

export default function Hero() {
  return (
    <section className="whistle-hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Invisible Aligners for a dream smile
          </h1>
          <p className="hero-subtitle">
            Book a Scan and avail a free <br />
            Orthodontist Consult <span className="purple-text">worth ₹1500</span>
          </p>
        </div>
        <div className="hero-image-wrapper">
          <img src={heroImg} alt="Smiling woman holding Whistle aligner" className="hero-image" />
        </div>
      </div>
    </section>
  );
}
