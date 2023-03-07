import Hero from "../components/Hero";
import Methodology from "../components/Methodology";
import Navbar from "../components/Navbar";
import UpcomingEvents from "../components/UpcomingEvents";

function OurWay (){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Lusitanos Experience"
        text="Practice like a professional, with professionals."
        buttonText="Find out more."
        url="/"
        btnClass="show"
        />
        <Methodology />
        <UpcomingEvents />
        </>
    );
}

export default OurWay;