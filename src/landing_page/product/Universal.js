import React from "react";

function Universal() {
  const platforms = [
    {
      description:
        "Simple and transparent index funds to help you grow your wealth.Simple and transparent index funds to help you grow your wealth.",
      image: "/media/images/zerodhaFundhouse.png",
    },
    {
      description:
        "Options trading platform with strategy planning and market insights.Options trading platform with strategy planning and market insights.",
      image: "/media/images/sensibullLogo.svg",
    },
    {
      description:
        "Investment research platform with stock and sector insights.Investment research platform with stock and sector insights.",
      image: "/media/images/tijori.svg",
    },
    {
      description:
        "Create, backtest, and deploy trading strategies without coding.Create, backtest, and deploy trading strategies without coding.",
      image: "/media/images/streak-logo.png",
    },
    {
      description:
        "Invest in diversified baskets of stocks or ETFs.Invest in diversified baskets of stocks or ETFs.",
      image: "/media/images/smallcase-logo.png",
    },
    {
      description:
        "Personalized advice on life and health insurance.Personalized advice on life and health insurance.",
      image: "/media/images/ditto-logo.png",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">The Zerodha Universe</h1>
      <div className="row">
        {platforms.map((platform, index) => (
          <div className="col-md-4 mb-4 mt-5" key={index}>
            <div
              className="card h-100 shadow-sm"
              style={{
                border: "none",
                padding: "1rem", 
              }}
            >
              <div
                className="d-flex justify-content-center align-items-center p-4"
                style={{ height: "8rem"}}
              >
                <img
                  src={platform.image}
                  alt={platform.name}
                  style={{
                    padding: "1rem",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain", // keeps aspect ratio
                  }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{platform.name}</h5>
                <p className="card-text">{platform.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Universal;