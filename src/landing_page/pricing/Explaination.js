import React from "react";

function Explaination() {
  return (
    <div className="container my-5">
      <h2 className="mb-5 pt-5">Charges Explained</h2>

      {/* First Row with Two Columns */}
      <div className="row g-4 mb-5 ">
        {/* Column 1 */}
        <div className="col-md-5">
          <h5 className="mb-3">Securities/Commodities Transaction Tax</h5>
          <p className="mb-4">
            Tax by the government when transacting on the exchanges. Charged on
            both buy and sell sides for equity delivery, and only on the selling
            side for intraday or F&O trades.
          </p>

          <h5 className="mb-3">Transaction/Turnover Charges</h5>
          <p className="mb-4">
            Tax by the government when transacting on the exchanges. Charged on
            both buy and sell sides for equity delivery, and only on the selling
            side for intraday or F&O trades.
          </p>

          <h5 className="mb-3">Call &amp; trade</h5>
          <p className="mb-4">
            Additional charges may apply when placing trades through call &amp;
            trade instead of online platforms.
          </p>

          <h5 className="mb-3">Stamp charges</h5>
          <p className="mb-4">
            Levied on the buy side of transactions as per government
            regulations.
          </p>

          <h5 className="mb-3">NRI brokerage charges</h5>
          <ul className="mb-4">
            <li>
              Applicable only to NRI clients trading in equity and F&amp;O.
            </li>
            <li>
              Brokerage is 0.5% or ₹100 per executed order (whichever lower).
            </li>
            <li>
              Extra charges may apply for currency conversion &amp; remittance.
            </li>
            <li>
              Account maintenance &amp; regulatory charges are extra as per
              norms.
            </li>
          </ul>

          <h5 className="mb-3">Account with debit balance</h5>
          <p className="mb-4">
            Additional interest or penalty may apply if account balance is
            negative.
          </p>

          <h5 className="mb-3">
            Charges for Investor's Protection Fund Trust (IPFT) by NSE
          </h5>
          <p className="mb-4">
            Contribution mandated by NSE to safeguard investor interests.
          </p>

          <h5 className="mb-3">Margin Trading Facility (MTF)</h5>
          <p className="mb-4">
            Interest is charged on borrowed margin amounts as per broker
            policies.
          </p>
        </div>

        <div className="col-md-2"></div>

        {/* Column 2 */}
        <div className="col-md-5">
          <h5 className="mb-3">GST</h5>
          <p className="mb-4">
            Charged at 18% on brokerage, SEBI charges, and transaction charges.
          </p>

          <h5 className="mb-3">SEBI Charges</h5>
          <p className="mb-4">
            Regulatory fee charged by SEBI on turnover for all trades.
          </p>

          <h5 className="mb-3">DP (Depository Participant) charges</h5>
          <p className="mb-4">
            Flat fee charged for debiting securities from demat accounts.
          </p>

          <h5 className="mb-3">Pledging charges</h5>
          <p className="mb-4">
            Fee for pledging shares as collateral to obtain margin.
          </p>

          <h5 className="mb-3">AMC (Account maintenance charges)</h5>
          <p className="mb-4">
            Annual charges for maintaining a demat account.
          </p>

          <h5 className="mb-3">Corporate action order charges</h5>
          <p className="mb-4">
            Applicable for dividend, bonus, and rights issue processing.
          </p>

          <h5 className="mb-3">Off-market transfer charges</h5>
          <p className="mb-4">
            Charges for transferring securities between demat accounts outside
            the exchange.
          </p>

          <h5 className="mb-3">Delayed Payment Charges</h5>
          <p className="mb-4">
            Charges for transferring securities between demat accounts outside
            the exchange.
          </p>

          <h5 className="mb-3">
            Trading using 3-in-1 account with block functionality
          </h5>
          <ul className="mb-4">
            <li>
              Applicable only to NRI clients trading in equity and F&amp;O.
            </li>
            <li>
              Brokerage is 0.5% or ₹100 per executed order (whichever lower).
            </li>
            <li>
              Extra charges may apply for currency conversion &amp; remittance.
            </li>
            <li>
              Account maintenance &amp; regulatory charges are extra as per
              norms.
            </li>
          </ul>
        </div>
      </div>

      {/* Second Row: Disclaimer */}
      <div className="row pb-5">
        <div className="col-12">
          <h4 className="mb-3">Disclaimer</h4>
          <p className="lead">
            For delivery-based trades, a minimum of ₹0.01 will be charged per
            contract note. Physical contract notes incur ₹20 plus courier
            charges. Brokerage will not exceed SEBI and exchange limits. All
            statutory and regulatory charges are levied at actuals. Brokerage
            applies to expired, exercised, and assigned options contracts. Free
            investments are available only to retail individual clients.
            Companies, Partnerships, Trusts, and HUFs pay 0.1% or ₹20 (whichever
            is less) as delivery brokerage. For physical delivery contracts,
            brokerage is 0.25% of contract value. Netted-off positions in
            physically settled contracts incur 0.1% brokerage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Explaination;
