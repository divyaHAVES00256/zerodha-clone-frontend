import React from 'react';

function Education() {
     return (
    <div className="container py-5">

        <div className="row align-items-center">
            {/* Right Column - Horizontal Row of Items */}
            <div className="col-md-6">
                <img 
                    src="media/images/education.svg" 
                    alt="Zerodha ecosystem" 
                    className="img-fluid mb-5"
                />
            </div>

            {/* Left Column - Text */}
            <div className="col-lg-6 mb-4">
                <h2 className="fw-bold mb-4">Free and open market education</h2>
                <p className="text-muted">
                    Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                </p>
                <a href="#" className="text-primary fw-semibold mt-2 mb-4 d-inline-block" style={{textDecoration:"none"}}>
                    Varsity →
                </a>

                <p className="text-muted mt-4">
                    TradingQ&A, the most active trading and investment community in India for all your market related queries.
                </p>
                <a href="#" className="text-primary fw-semibold mt-2 d-inline-block" style={{textDecoration:"none"}}>
                    TradingQ&A →
                </a>
            </div>

            
      </div>
    </div>
  );
}

export default Education;