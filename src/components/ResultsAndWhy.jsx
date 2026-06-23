import resultsImg from '../assets/results.png';
import chooseImg from '../assets/choose1.png';
import './ResultsAndWhy.css';

export default function ResultsAndWhy() {
  const resultsData = [
    {
      image: resultsImg,
      caseName: "Teeth Gaps",
      duration: "4 Months",
      age: "22 Years",
    },
    {
      image: resultsImg,
      caseName: "Crowded Teeth",
      duration: "6 Months",
      age: "24 Years",
    },
    {
      image: resultsImg,
      caseName: "Deep Bite",
      duration: "8 Months",
      age: "29 Years",
    },
    {
      image: resultsImg,
      caseName: "Crooked Teeth",
      duration: "5 Months",
      age: "26 Years",
    },
  ];

  const whyData = [
    {
      image: chooseImg,
      title: "Clinic Monitoring",
      description: "Direct in-person visits to Clove Dental clinics across India, ensuring your treatment stays on track.",
    },
    {
      image: chooseImg,
      title: "Zendura FLX Material",
      description: "Premium Zendura FLX 3-layer material designed for comfortable teeth alignment.",
    },
    {
      image: chooseImg,
      title: "Orthodontist Led",
      description: "Every plan is designed and supervised by certified orthodontists, not just general dentists.",
    },
    {
      image: chooseImg,
      title: "Flexible Payments",
      description: "Easy financing with zero-interest EMI options, making clear aligners accessible to everyone.",
    },
  ];

  return (
    <section className="whistle-results-why">
      {/* Results Section */}
      <div className="results-section">
        <h2 className="section-title">Real Results, Real Smiles</h2>
        <div className="results-grid">
          {resultsData.map((item, idx) => (
            <div key={idx} className="result-card">
              <div className="result-image-wrapper">
                <img src={item.image} alt={item.caseName} className="result-image" />
              </div>
              <div className="result-details">
                <div className="detail-row">
                  <span className="detail-label">Case:</span>
                  <span className="detail-value font-bold">{item.caseName}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Duration:</span>
                  <span className="detail-value">{item.duration}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Age:</span>
                  <span className="detail-value">{item.age}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2 className="section-title">Why Choose Whistle?</h2>
        <div className="why-grid">
          {whyData.map((item, idx) => (
            <div key={idx} className="why-card">
              <div className="why-image-wrapper">
                <img src={item.image} alt={item.title} className="why-image" />
              </div>
              <div className="why-content">
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
