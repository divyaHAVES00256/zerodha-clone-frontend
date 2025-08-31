import React from "react";
import "../index.css"; // Don't forget to create this file for styling

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-heading">404</h1>
        <p className="notfound-subheading">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <button
          className="notfound-btn"
          onClick={() => (window.location.href = "/")}
        >
          Go Home
        </button>
        
      </div>
    </div>
  );
}

export default NotFound;
