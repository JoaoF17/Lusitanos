import Hero from "../components/Hero";
import Methodology from "../components/Our Way/Methodology";
import Navbar from "../components/Navbar";
import UpcomingEvents from "../components/Our Way/UpcomingEvents";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";
import ourway from "../Assets/ourway.jpg"

function OurWay (){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero"
        heroImg={ourway}
        title="Lusitanos Experience"
        text="Practice like a professional, with professionals."
        buttonText="Find out more."
        url="/"
        btnClass="hide"
        />
        <Methodology />
        <UpcomingEvents />
        <Sponsors />
        <Footer />
        </>
    );
}

export default OurWay;