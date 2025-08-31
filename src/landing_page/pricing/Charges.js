import React from "react";

function Charges() {
  return (
    <div className="container my-5">
      {/* Charges for account opening */}
      <h5 className="mb-3 pt-3">Charges for account opening</h5>
      <div className="table-responsive mb-5">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td>
                <span className="badge bg-success">FREE</span>
              </td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>
                <span className="badge bg-success">FREE</span>
              </td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Demat AMC */}
      <h5 className="mb-3 pt-5">Demat AMC (Annual Maintenance Charge)</h5>
      <div className="table-responsive mb-2">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Value of holdings</th>
              <th>AMC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Up to ₹4 lakh</td>
              <td>
                <span className="badge bg-success">FREE</span>
              </td>
            </tr>
            <tr>
              <td>₹4 lakh - ₹10 lakh</td>
              <td>₹ 100 per year, charged quarterly*</td>
            </tr>
            <tr>
              <td>Above ₹10 lakh</td>
              <td>₹ 300 per year, charged quarterly</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-muted small mb-5 ">
        * Lower AMC is applicable only if the account qualifies as a Basic
        Services Demat Account (BSDA). BSDA account holders cannot hold more
        than one demat account. To learn more about BSDA,{" "}
        <a href="#" className="text-primary" style={{ textDecoration: "none" }}>
          click here
        </a>
        .
      </p>

      {/* Charges for optional value added services */}
      <h5 className="mb-3 pt-5 ">Charges for optional value added services</h5>
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Service</th>
              <th>Billing Frequency</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy &amp; Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 500 | Personal: Free</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Charges;
