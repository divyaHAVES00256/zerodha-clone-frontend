import React from "react";

function Equity() {
  return (
    <div className="container my-5">
      {/* Tabs */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <a className="nav-link active" href="#equity">
            Equity
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#currency">
            Currency
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#commodity">
            Commodity
          </a>
        </li>
      </ul>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-light">
            <tr>
              <th></th>
              <th>Equity delivery</th>
              <th>Equity intraday</th>
              <th>F&amp;O - Futures</th>
              <th>F&amp;O - Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Brokerage</th>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <th>STT/CTT</th>
              <td>0.1% on buy &amp; sell</td>
              <td>0.025% on the sell side</td>
              <td>0.02% on the sell side</td>
              <td>
                <ul className="text-start m-0">
                  <li>
                    0.125% of the intrinsic value on options that are bought and
                    exercised
                  </li>
                  <li>0.1% on sell side (on premium)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Transaction Equity</th>
              <td>
                NSE: 0.00297% <br />
                BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00297% <br />
                BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00173% <br />
                BSE: 0
              </td>
              <td>
                NSE: 0.05303% (on premium) <br />
                BSE: 0.0325% (on premium)
              </td>
            </tr>
            <tr>
              <th>GST</th>
              <td>18% on (brokerage + SEBI Equity + transaction Equity)</td>
              <td>18% on (brokerage + SEBI Equity + transaction Equity)</td>
              <td>18% on (brokerage + SEBI Equity + transaction Equity)</td>
              <td>18% on (brokerage + SEBI Equity + transaction Equity)</td>
            </tr>
            <tr>
              <th>SEBI Equity</th>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>
            <tr>
              <th>Stamp Equity</th>
              <td>0.015% or ₹1500 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer link */}
      <div className="text-center mt-3 pb-5">
        <a href="#" className="text-primary">
          Calculate your costs upfront using our brokerage calculator
        </a>
      </div>
    </div>
  );
}

export default Equity;
