import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/About/AboutUs";

function About (){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1434648957308-5e6a859697e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        title="About Lusitanos"
        text=""
        buttonText="Find out more."
        url="/"
        btnClass="hide"
        />
        <AboutUs />
        </>
    );
}

export default About;