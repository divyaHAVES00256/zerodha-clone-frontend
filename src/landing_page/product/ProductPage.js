import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import OpenAccount from '../OpenAccount';
import Universal from './Universal';
import Footer from '../Footer';
import Navbar from '../Navbar';

function ProductPage() {
    <>
        <Navbar/>
        <Hero/>
        <LeftSection/>
        <RightSection/>
        <Universal/>
        <OpenAccount/>
        <Footer/>
    </>
}

export default ProductPage;