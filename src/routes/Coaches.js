import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OurCoaches from "../components/Our Coaches/OurCoaches";
import Footer from "../components/Footer";

import React from 'react'

function Coaches() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                title="Meet our coaches"
                text=""
                url="/"
                btnClass="hide"
            />
            <OurCoaches />
            <Footer />
        </>
    )
}

export default Coaches;