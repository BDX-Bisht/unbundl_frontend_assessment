import simpleStepImg from '../assets/simple-step.png';
import doctorImg from '../assets/doctor.png';
import './StepsAndDoctor.css';

export default function StepsAndDoctor() {
  const steps = [
    {
      num: 1,
      title: "Scan",
      description: "We use an AI-powered scanner to take a detailed 3D image of your teeth."
    },
    {
      num: 2,
      title: "Plan",
      description: "Our Orthodontists design your customized smile enhancement plan using highly advanced software."
    },
    {
      num: 3,
      title: "Fabricate",
      description: "We manufacture your custom aligners leveraging 3D printing & laser technology."
    },
    {
      num: 4,
      title: "Wear",
      description: "Your Whistle Aligners and expert Clove Dental Orthodontists monitor your progress across the journey."
    }
  ];

  return (
    <section className="whistle-steps-doctor-section">
      
      {/* Steps Card Block */}
      <div className="steps-container">
        <div className="steps-card">
          
          <div className="steps-content-side">
            <h2 className="steps-main-heading">
              Get your perfect smile in <br />four simple steps
            </h2>
            
            {/* Steps 2x2 Grid */}
            <div className="steps-grid">
              {steps.map((item, idx) => (
                <div key={idx} className="step-item">
                  <div className="step-badge">{item.num}</div>
                  <div className="step-text-wrapper">
                    <h3 className="step-title">{item.title}</h3>
                    <p className="step-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Placeholder Graphic */}
          <div className="steps-video-side">
            <div className="video-player-wrapper">
              <img src={simpleStepImg} alt="Dental scanning process video" className="video-thumbnail-img" />
              {/* Play Button Overlay */}
              <button className="video-play-btn" aria-label="Play Video">
                <svg viewBox="0 0 24 24" fill="currentColor" className="play-triangle-svg">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Doctor-led Block */}
      <div className="doctor-led-container">
        <div className="doctor-led-row">
          
          {/* Text Info Column */}
          <div className="doctor-led-text-side">
            <h2 className="doctor-main-heading">
              We are Doctor-led, not <br />direct-to-customers
            </h2>
            <p className="doctor-description">
              We don't offer direct-to-customer invisible aligners. We treat you in a Dental clinic with an Orthodontist. Aligners are just the beginning; we ensure comprehensive treatment in over 450+ clinics nationwide.
            </p>
            <button className="callback-btn">
              Get a Callback
            </button>
          </div>

          {/* Graphic Column */}
          <div className="doctor-led-image-side">
            <img src={doctorImg} alt="Doctor showing clear aligners" className="doctor-graphic-img" />
          </div>

        </div>
      </div>

    </section>
  );
}
