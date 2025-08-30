import React from "react";
import "../../index.css";

function Teams() {
  return (
    <div className="container mb-5" style={{ marginTop: "10rem" }}>
      <p className="display-4 fs-3 fw-semibold text-center mb-5 pb-5">
        Our Leadership Team
      </p>

      <div className="row m-5 text-muted" style={{ fontSize: "1.05rem" }}>
        <div className="col-md-5">
          <div className="card h-100 border-0">
            <img
              src="media/images/nithinKamath.jpg"
              className="card-img-top profile-img"
              alt="Nithin Kamath"
              style={{
                width: "16.5rem",
                height: "16.5rem",
                objectFit: "cover",
                margin: "0 auto",
              }}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Nithin Kamath</h5>
              <p className="card-text text-muted">Founder & CEO</p>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100 border-0">
            <img
              src="media/images/Nikhil.jpg"
              className="card-img-top profile-img"
              alt="Nithin Kamath"
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Nithin Kamath</h5>
              <p className="card-text text-muted">Founder & CEO</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-0">
            <img
              src="media/images/Kailash.jpg"
              className="card-img-top profile-img"
              alt="Nikhil Kamath"
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Dr. Kailash Nadh</h5>
              <p className="card-text text-muted">CTO</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-0">
            <img
              src="media/images/Venu.jpg"
              className="card-img-top profile-img"
              alt="Sachin Bansal"
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Venu Madhav</h5>
              <p className="card-text text-muted">COO</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="card h-100 border-0">
          <img
            src="media/images/Hanan.jpg"
            className="card-img-top profile-img"
            alt="Sachin Bansal"
          />
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">Hanan Delvi</h5>
            <p className="card-text text-muted">CCO</p>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-0">
            <img
              src="media/images/Seema.jpg"
              className="card-img-top profile-img"
              alt="Nithin Kamath"
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Seema Patil</h5>
              <p className="card-text text-muted">Director</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-0">
            <img
              src="media/images/Karthik.jpg"
              className="card-img-top profile-img"
              alt="Nikhil Kamath"
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Karthik Rangappa</h5>
              <p className="card-text text-muted">Chief of Education</p>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100 border-0">
            <img
              src="media/images/Austin.jpg"
              className="card-img-top profile-img"
              alt="Sachin Bansal"
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Austin Prakesh</h5>
              <p className="card-text text-muted">Director Strategy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;