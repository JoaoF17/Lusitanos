import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactUs from "../components/Contact/ContactUs";
import Footer from "../components/Footer";
import getintouch from "../Assets/getintouch.jpg"

function Contact (){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg={getintouch}
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