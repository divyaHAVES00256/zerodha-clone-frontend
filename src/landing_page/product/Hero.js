import React from 'react';

function Hero() {
    return (
      <div style={{ marginTop: "10rem" }}>
        <div className="container mb-5  mt-5">
          <div className="row p-3 text-center">
            <p className="display-4 fs-1 fw-semibold mb-3">Zerodha Products</p>
            <p className=" fs-5 text-muted">
              Sleek, modern, and intuitive trading platforms
            </p>
            <p className=" fs-5 text-muted mt-3">
              Check out our investment
              <a href="#offerings" style={{textDecoration: "none"}}>  offerings →</a>
            </p>
          </div>

          <div
            className="row mt-4 justify-content-center"
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#dee2e6",
              margin: "7rem 0",
            }}
          ></div>
        </div>
      </div>
    );
}

export default Hero;