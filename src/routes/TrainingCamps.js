import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CampImg from "../Assets/s.png"
import Camps from "../components/Training Camps/Camps";
/* import FormCamp from "../components/Training Camps/FormCamp"; */
import Footer from "../components/Footer";

function TrainingCamps (){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero"
        heroImg={CampImg}
        title="Come practice with the best"
        text="From professional player to professional coaches, you will be learning with top athletes."
        buttonText="Check our next training camp."
        url="/"
        btnClass="hide"
        />
        <Camps />
        <Footer />
        </>
    );
}

export default TrainingCamps;