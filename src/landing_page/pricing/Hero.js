import React from 'react';

function Hero() {
    return (
      <div style={{ marginTop: "10rem" }}>
        <div className="container mb-5  mt-5">
          <div className="row p-3 text-center">
            <p className="display-4 fs-3 fw-semibold mb-3">Charges</p>
            <p className=" fs-5 text-muted">
              List of all charges and taxes
            </p>
          </div>
        </div>
      </div>
    );
}

export default Hero;