import React from "react";

function Footer() {
  return (
    <footer className="bg-light text-dark pt-5 pb-4">
      <div className="container">
        {/* Logo and Social Section */}
        <div className="row mb-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="Zerodha Logo"
              style={{ height: "1.3rem", marginRight: "10px" }}
            />
            <p className="mt-3 text-muted" style={{ fontSize: "0.75rem" }}>
              &copy; 2010 - 2025, Zerodha Broking Ltd.<br/>All rights reserved.
            </p>

            <div className="d-flex gap-4 mt-4">
              <a
                href="https://twitter.com/zerodhaonline"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href="https://facebook.com/zerodha.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="https://instagram.com/zerodhaonline"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a
                href="https://linkedin.com/company/zerodha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
            <div
              style={{
                width: "90%",
                height: "1px",
                backgroundColor: "#dee2e6",
                margin: "12px 0",
              }}
            ></div>
            <div className="d-flex gap-4 mt-2">
              <a
                href="https://youtube.com/zerodhaonline"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted"
              >
                <i className="fab fa-youtube fa-lg"></i>
              </a>
              <a
                href="https://wa.me/919000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted"
              >
                <i className="fab fa-whatsapp fa-lg"></i>
              </a>
              <a
                href="https://t.me/zerodhaonline"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted"
              >
                <i className="fab fa-telegram fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="col">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Contact us
                </a>
              </li>

              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Support portal
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  How to file a complaint?
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Status of your complaints
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Bulletin
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Circular
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Z-Connect blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Downloads
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Press & media
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Zerodha Cares (CSR)
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Zerodha.tech
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Open source
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col">
            <h6 className="fw-bold mb-3">Quick links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Upcoming IPOs
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Brokerage charges
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Market holidays
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Economic calendar
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Calculators
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Markets
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Sectors
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Investor Info */}
        <div className="row mt-5">
          <div className="col-12">
            <p
              className="text-muted"
              style={{
                fontSize: "0.75rem",
                whiteSpace: "pre-line",
                lineHeight: "1.8",
              }}
            >
              Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
              no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
              Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
              Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI
              Registration no.: INZ000038238 Registered Address: Zerodha Broking
              Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
              School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
              For any complaints pertaining to securities broking please write
              to complaints@zerodha.com, for DP related to dp@zerodha.com.
              Please ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
              <br />
              <br />
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
              <br />
              <br />
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
              <br />
              <br />
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
              <br />
              <br />
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
              <br />
              <br />
              India's largest broker based on networth as per NSE. NSE broker
              factsheet
              <br />
              <br />
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here.
            </p>
          </div>
        </div>

        {/* Links */}
        {/* Horizontal Footer Links */}
        <div className="row mt-4 ">
          <div className="col-12 r">
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <a href="#" className="text-muted text-decoration-none">
                NSE
              </a>
              <a href="#" className="text-muted text-decoration-none">
                BSE
              </a>
              <a href="#" className="text-muted text-decoration-none">
                MCX
              </a>
              <a href="#" className="text-muted text-decoration-none">
                Terms & conditions
              </a>
              <a href="#" className="text-muted text-decoration-none">
                Policies & procedures
              </a>
              <a href="#" className="text-muted text-decoration-none">
                Privacy policy
              </a>
              <a href="#" className="text-muted text-decoration-none">
                Disclosure
              </a>
              <a href="#" className="text-muted text-decoration-none">
                For investor's attention
              </a>
              <a href="#" className="text-muted text-decoration-none">
                Investor charter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
