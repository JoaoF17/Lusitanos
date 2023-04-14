import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OurCoaches from "../components/Our Coaches/OurCoaches";
import Footer from "../components/Footer";
import coachespic from "../Assets/ourcoaches.jpg"

import React from 'react'

function Coaches() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={coachespic}
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