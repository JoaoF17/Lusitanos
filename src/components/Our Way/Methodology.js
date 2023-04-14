import MethodologyData from "./MethodologyData";
import "./MethodologyStyles.css";
import technical from "../../Assets/technical.jpg";
import tactical from "../../Assets/tactical.jpg";
import physical from "../../Assets/physical.jpg";
import mental from "../../Assets/mental.jpg";
import social from "../../Assets/social.jpg";
import social1 from "../../Assets/social1.jpg";

const Methodology = () =>{
    return(
        <div className="methodology">
            <h1>What we do</h1>
            <p>At Lusitanos, we believe football is more than just a game - it's a way of life. Our unique training style is based on game-specific training tailored to each player's needs, built around 5 dimensions of development: technical, tactical, physical, mental, and social. We aim to create well-rounded players who can excel both on and off the field. <br/><strong>Our coaching methodology has been developed and supervised by Mano Polking, the current Thai national coach and a renowned mentor in the field. Inspired by his expertise, we will be utilizing his coaching method throughout our entire process.</strong></p>
        
            <MethodologyData
                className="first-des"
                heading="Technical Dimension"
                text="Technical dimension focuses on developing individual skills such as ball control, passing, shooting, and dribbling. Our coaches use a variety of drills and exercises to help our players improve their technical abilities and become more confident on the ball."
                heading1="Tactical Dimension"
                text1="Tactical dimension is all about understanding the game of football and how to make the right decisions on the field. We teach our players how to read the game, anticipate movements, and work together as a team to achieve their goals."
                img1={technical}
                img2={tactical}
            />

            <MethodologyData
                className="first-des-reverse"
                heading="Physical dimension"
                text="Physical dimension is an important aspect of football, and we make sure our players are in top physical condition. Our training includes a variety of exercises to improve speed, agility, endurance, and strength."
                heading1="Mental dimension"
                text1="Mental dimension is often overlooked in football, but it's a crucial element of success. We teach our players how to stay focused, overcome challenges, and maintain a positive attitude both on and off the field."
                img1={physical}
                img2={mental}
            />

            <MethodologyData
                className="first-des"
                heading="Social Dimension"
                text="Finally, social dimension is about developing important life skills such as teamwork, communication, and leadership. We believe that football is a team sport, and our players learn how to work together, support each other, and build strong relationships both on and off the field."
                img1={social}
                img2={social1}
            />

            <p>At our football academy, we're passionate about developing well-rounded players who can excel both on and off the field. If you're ready to take your game to the next level, come join us and experience our unique approach to football training!</p>
        </div>
    )
}

export default Methodology;