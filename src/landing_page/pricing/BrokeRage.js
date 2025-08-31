import React from 'react';

function BrokeRage() {
    return (
      <div className="container mb-5">
        <div className="row justify-content-center text-center mb-5">
          {/* Right Column - Horizontal Row of Items */}
          <div className="col-md-4" style={{ padding: "2rem" }}>
            {/* Item 1 */}

            <img
              src="media/images/pricing-eq.svg"
              alt="Free account"
              style={{ width: "15rem" }}
            />
            <p className="text-muted small">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-md-4" style={{ padding: "2rem" }}>
            {/* Item 2 */}

            <img
              src="media/images/pricing-eq.svg"
              alt="Free equity"
              style={{ width: "15rem" }}
            />
            <p className="text-muted small">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-md-4" style={{ padding: "2rem" }}>
            {/* Item 3 */}

            <img
              src="media/images/other-trades.svg"
              alt="Intraday and F&O"
              style={{ width: "15rem" }}
            />
            <p className="text-muted small">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    );
}

export default BrokeRage;