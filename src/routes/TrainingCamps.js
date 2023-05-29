import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CampImg from "../Assets/s.jpg"
import Camps from "../components/Training Camps/Camps";
/* import FormCamp from "../components/Training Camps/FormCamp"; */
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

function TrainingCamps (){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero"
        heroImg={CampImg}
        title="Come practice with the best"
        text="From professional players to professional coaches, you will be learning with top athletes."
        buttonText="Check our next training camp."
        url="/"
        btnClass="hide"
        />
        <Camps />
        <Sponsors />
        <Footer />
        </>
    );
}

export default TrainingCamps;