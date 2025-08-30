import React from "react";
import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 fixed-top">
      <div className="container">
        {/* Logo */}
        <Link to="/">
          <img
            src="media/images/logo.svg"
            alt="Zerodha Logo"
            style={{ height: "1.3rem", marginRight: "10px" }}
          />
        </Link>

        <Link to="/">
          <img
            src="media/images/logo.svg"
            alt="Zerodha Logo"
            style={{ height: "1.3rem", marginRight: "10px" }}
          />
        </Link>

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
              <Link
                className="nav-link text-dark  fw-semibold text-muted me-4"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark  fw-semibold text-muted me-4"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark  fw-semibold text-muted me-4"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark  fw-semibold text-muted me-4"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark  fw-semibold text-muted me-4"
                to="/products"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark  fw-semibold text-muted me-4"
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark  fw-semibold text-muted me-4"
                to="/support"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
