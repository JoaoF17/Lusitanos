import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactUs from "../components/Contact/ContactUs";
import Footer from "../components/Footer";

function Contact (){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1601176682258-172d20729a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1309&q=80"
        title="Get in touch"
        text="We are here to help young athletes become the stars of the future."
        buttonText="Find out more."
        url="/"
        btnClass="hide"
        />
        <ContactUs />
        <Footer />
        </>
    );
}

export default Contact;