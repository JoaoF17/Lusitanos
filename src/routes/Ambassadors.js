import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OurAmbassadors from "../components/Ambassadors/OurAmbassadors";
import Footer from "../components/Footer";
import ambassadorimg from "../Assets/ambassadors.jpg"

function Ambassadors (){
    return(
        <>
        <Navbar />
        <Hero
            cName="hero-mid"
            heroImg= {ambassadorimg}
            title="Our Embassadors"
            text=""
            buttonText="Find out more."
            url="/"
            btnClass="hide"
        />
        <OurAmbassadors />
        <Footer />
        </>
    );
}

export default Ambassadors;