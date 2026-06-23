import nextGenIcon from '../assets/next-gen.svg';
import hassleFreeIcon from '../assets/hassle-free.svg';
import pricingIcon from '../assets/pricing.svg';
import transparentTeethImg from '../assets/tranparent-teeth.png';
import './WhistleDifference.css';

export default function WhistleDifference() {
  const features = [
    {
      icon: nextGenIcon,
      title: "Next-Gen",
      description: "Crafted with top-notch 3D printing, laser tech, and Zendura FLX material."
    },
    {
      icon: hassleFreeIcon,
      title: "Hassle-Free",
      description: "Predictable, comfortable & lifestyle-friendly for an easy smile transformation."
    },
    {
      icon: pricingIcon,
      title: "Transparent Pricing",
      description: "Everything's included – from scans to aligners, doctor consults, and retainers – no hidden costs."
    }
  ];

  return (
    <section className="whistle-difference-section">
      <div className="difference-container">
        
        {/* Left Side: White Feature Card */}
        <div className="difference-card">
          <h2 className="difference-heading">The Whistle Difference</h2>
          
          <div className="difference-features-list">
            {features.map((item, idx) => (
              <div key={idx} className="difference-feature-item">
                <div className="feature-icon-wrapper">
                  <img src={item.icon} alt={item.title} className="feature-icon-img" />
                </div>
                <div className="feature-text-wrapper">
                  <h3 className="feature-title">{item.title}</h3>
                  <p className="feature-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Graphic Card */}
        <div className="difference-image-card">
          <img src={transparentTeethImg} alt="Whistle 3D clear aligners manufacturing" className="difference-graphic-img" />
        </div>

      </div>
    </section>
  );
}
