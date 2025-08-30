import React from 'react';

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Column - Text */}
        <div className="col-lg-6 mb-4">
          <h2 className="fw-bold mb-3">Unbeatable pricing</h2>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-primary fw-semibold mt-3 d-inline-block" style={{textDecoration:"none"}}>
            See pricing →
          </a>
        </div>

        {/* Right Column - Horizontal Row of Items */}
        <div className="col-md-6">
          <div className="d-flex flex-row justify-content-between flex-wrap">
            {/* Item 1 */}
            <div className="d-flex flex-column align-items-center text-center me-4 mb-3">
              <img src="media/images/pricing-eq.svg" alt="Free account" style={{ width: '7rem' }} />
              <p className="text-muted small">Free account opening</p>
            </div>

            {/* Item 2 */}
            <div className="d-flex flex-column align-items-center text-center me-4 mb-3">
              <img src="media/images/pricing-eq.svg" alt="Free equity" style={{ width: '7rem' }} />
              <p className="text-muted small">Free equity delivery and direct mutual funds</p>
            </div>

            {/* Item 3 */}
            <div className="d-flex flex-column align-items-center text-center mb-3">
              <img src="media/images/other-trades.svg" alt="Intraday and F&O" style={{ width: '7rem' }} />
              <p className="text-muted small">Intraday and F&O</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;