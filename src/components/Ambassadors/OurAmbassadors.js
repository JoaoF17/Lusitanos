import "./OurAmbassadorsStyles.css"
import React from "react"
import AmbassadorsData from "./OurAmbassadorsData"
import Bas from "../../Assets/bas.jpg"
import Bihr from "../../Assets/bihr.jpg"
import Thossawat from "../../Assets/thossawat.jpg"
import Kampol from "../../Assets/kampol.jpg"
import Heberty from "../../Assets/heberty.jpg"
import Everton from "../../Assets/everton.jpg"


function OurAmbassadors() {
    return (
        <div className="ambassadors">

            <h2>Meet our Ambassadors</h2>
            <h4>We are proud to have the support of some of the most talented and inspiring football players in the game today.These players share our passion for football and our commitment to developing the next generation of stars. The endorsement of our training methodology by our ambassadors, who have a wealth of football experience, speaks to its effectiveness.
                <br /> 
                Our ambassadors are more than just famous faces – they are role models for young players everywhere. Through their hard work, dedication, and exceptional skills, they have achieved great success on and off the pitch. They know what it takes to become a great football player, and they are eager to share their knowledge and experience with our students.
            </h4>

            <AmbassadorsData
                className="ambassador"
                ambassadorheading="PEERAPAT NOTECHAYA | BANGKOK UNITED"
                ambassadordescription="Peerapat Notchaiya is a Thai professional footballer who plays as a left back for Thai League 1 club Bangkok United and the Thailand national team."
                img={Bas}
            />
            <AmbassadorsData
                className="ambassador-reverse"
                ambassadorheading="THOSSAWAT LIMWANNASATHIAN | BANGKOK UNITED"
                ambassadordescription="Thossawat Limwannasathian is a Thai professional footballer who plays as a midfielder for Thai League 1 club Bangkok United and the Thailand national team."
                img={Thossawat}
            />
            <AmbassadorsData
                className="ambassador"
                ambassadorheading="MANUEL TOM BIHR | BANGKOK UNITED"
                ambassadordescription="Manuel Tom Bihr is a professional footballer who plays as a centre-back for Thai League 1 club Bangkok United. Born in Germany, he plays for the Thailand national team."
                img={Bihr}
            />
            <AmbassadorsData
                className="ambassador-reverse"
                ambassadorheading="KAMPOL PATHOMAKKAKUL | RATCHABURI F.C."
                ambassadordescription="Kampol Pathomakkakul is a Thai professional footballer who plays as a goalkeeper for Thai League 1 club Ratchaburi Mitr Phol and the Thailand national team."
                img={Kampol}
            />
            <AmbassadorsData
                className="ambassador"
                ambassadorheading="HEBERTY FERNANDES | BANGKOK UNITED"
                ambassadordescription="Heberty Fernandes de Andrade is a Brazilian footballer who plays for Thai League 1 club Bangkok United and currently holds the record for most goals scored in the League, EVER."
                img={Heberty}
            />
            <AmbassadorsData
                className="ambassador-reverse"
                ambassadorheading="EVERTON SATURNINO | BANGKOK UNITED"
                ambassadordescription="Everton Gonçalves Saturnino in Cascavel, simply known as Everton, is a Brazilian footballer who plays for Bangkok United as a centre-back."
                img={Everton}
            />
        </div>
    )
}

export default OurAmbassadors