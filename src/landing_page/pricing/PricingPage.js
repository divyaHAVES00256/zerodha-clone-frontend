import React from 'react';
import Hero from './Hero';
import Navbar from '../Navbar';
import Footer from '../Footer';
import BrokeRage from './BrokeRage';
import Equity from './Charges';
import Charges from './Equity';
import Explaination from './Explaination';

function PricingPage() {
    return (
      <>
        <Hero />
        <BrokeRage />
        <Charges />
        <Equity />
        <Explaination />
      </>
    );
    
}

export default PricingPage;