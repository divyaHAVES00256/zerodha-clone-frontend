import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 fixed-top">
      <div className="container">
        {/* Logo */}
        <img
          src="media/images/logo.svg"
          alt="Zerodha Logo"
          style={{ height: "1.3rem", marginRight: "10px" }}
        />

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav me-2">
            <li className="nav-item">
              <a
                className="nav-link text-dark  fw-semibold text-muted me-4"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark  fw-semibold text-muted me-4"
                href="#"
              >
                Products
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark  fw-semibold text-muted me-4"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark  fw-semibold text-muted me-4"
                href="#"
              >
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-primary ms-3 fw-semibold " href="#">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
