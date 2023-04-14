import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/About/AboutUs";
import Footer from "../components/Footer";
import aboutpic from "../Assets/about.jpg"

function About (){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg= {aboutpic}
        title="About Lusitanos"
        text=""
        buttonText="Find out more."
        url="/"
        btnClass="hide"
        />
        <AboutUs />
        <Footer />
        </>
    );
}

export default About;