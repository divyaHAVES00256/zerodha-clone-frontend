import React from 'react';

function Hero() {
  return (
    <div className="container">
      
      <div className="row text-center py-5">
        {/* Hero Image */}
        <img
          src="media/images/homeHero.png"
          alt="hero image"
          className="img-fluid mb-4 mt-5 p-4"
          style={{ width: '70%', margin: '0 auto' }}
        />

        {/* Heading */}
        <h1 className="mt-3 mb-2" style={{ fontSize: '2rem' }}>
          Invest in everything
        </h1>

        {/* Subtext */}
        <p className="text-muted mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </p>

        {/* CTA Button */}
        <button
          className="btn btn-primary fs-6 px-4 py-2"
          style={{ width: '200px', margin: '0 auto' }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;