import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Signup from './SignUp';
import InvestmentOptions from './InvestmentOptions';
import DematAccount from './DematAccount';
import Benefits from './Benefits';
import TypesAccount from './TypesAccount';
import Footer from '../Footer';

function SignUpPage() {
    <>
        <Navbar/>
        <Hero/>
        <Signup/>
        <InvestmentOptions/>
        <DematAccount/>
        <Benefits/>
        <TypesAccount/>
        <Footer/>
    </>
}

export default SignUpPage;