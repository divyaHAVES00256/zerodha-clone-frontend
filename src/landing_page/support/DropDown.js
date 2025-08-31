import React from "react";
import { Accordion } from "react-bootstrap";

function Dropdown() {
  const noticesStyle = {
    backgroundColor: "#f7ecdcff", // full orange background
    color: "#fff", // white text
    padding: "16px",
    marginBottom: "3rem",
    borderLeft: "0.3rem solid #ff9800",
  };

  const linkStyle = {
    textDecoration: "underline",
    display: "block",
    marginBottom: "8px",
    cursor: "pointer",
  };

  return (
    <div className="container py-5 my-5">
      <div className="row">
        {/* Left Sidebar: Accordion Sections */}
        <div className="col-md-8">
          <Accordion defaultActiveKey="0">
            {[
              "Account Opening",
              "Your Zerodha Account",
              "Kite",
              "Funds",
              "Console",
              "Coin",
            ].map((title, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                  <p>Details and FAQs about {title} go here...</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

        {/* Right Sidebar: Notices and Quick Links */}
        <div className="col-md-4">
          {/* Notices Section */}
          <div style={noticesStyle}>
            <a href="#" style={linkStyle}>
              Exclusion of F&O contracts on 8 securities from August 29, 2025
            </a>
            <a href="#" style={linkStyle}>
              Revision in expiry day of Index and Stock derivatives contracts
            </a>
          </div>

          {/* Quick Links Section */}
          <div>
            <h5>🔗 Quick Links</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Track account opening</li>
              <li className="list-group-item">Track segment activation</li>
              <li className="list-group-item">Intraday margins</li>
              <li className="list-group-item">Kite user manual</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
