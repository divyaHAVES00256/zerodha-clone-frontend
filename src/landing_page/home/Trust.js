import React from 'react';

function Trust() {
  return (
    <div className="container py-5 my-5">
      <div className="row align-items-center">
        {/* Left Column - Content */}
        <div className="col-lg-6">
            <h2 className="fw-bold mb-5">Trust with confidence</h2>

            <div className="mb-4">
                <h5 className="fw-semibold mb-3">Customer-first always</h5>
                <p className="text-muted">
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, 
                making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.
                </p>
            </div>

            <div className="mb-4">
                <h5 className="fw-semibold mb-3">No spam or gimmicks</h5>
                <p className="text-muted">
                No gimmicks, spam, "gamification", or annoying push notifications. 
                High quality apps that you use at your pace, the way you like. Our philosophies.
                </p>
            </div>

            <div className="mb-4">
                <h5 className="fw-semibold mb-3">The Zerodha universe</h5>
                <p className="text-muted">
                Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups 
                offer you tailored services specific to your needs.
                </p>
            </div>

            <div className="mb-5">
                <h5 className="fw-semibold mb-3">Do better with money</h5>
                <p className="text-muted">
                With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, 
                but actively help you do better with your money.
                </p>
            </div>
        </div>
        
        {/* Right Column - Image */}
        <div className="col-lg-6 text-center ">
          <img 
            src="media/images/trust-home.png" 
            alt="Zerodha ecosystem" 
            className="img-fluid mb-5"
          />
          <a href="#" className="text-primary fw-semibold mb-4  me-5 d-inline-block" style={{textDecoration:"none"}}>
                Explore our products →
            </a>
            <a href="#" className="text-primary fw-semibold mb-4 d-inline-block" style={{textDecoration:"none"}}>
                Try Kite demo →
            </a>
        </div>

        {/* Press Logos Section with Image */}
          <div className="mt-5 text-center pt-2 ">
            <div className="press-logos-container">
              <img 
                src="media/images/press-logos-trust-home.png" 
                alt="Featured in The Economic Times, Forbes, Business Line, and more" 
                className="img-fluid"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  filter: 'grayscale(100%)',
                  opacity: 0.7,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.filter = 'grayscale(0%)';
                  e.target.style.opacity = 1;
                }}
                onMouseLeave={(e) => {
                  e.target.style.filter = 'grayscale(100%)';
                  e.target.style.opacity = 0.7;
                }}
              />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Trust;