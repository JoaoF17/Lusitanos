import "./OurAmbassadorsStyles.css"
import React from "react"
import AmbassadorsData from "./OurAmbassadorsData"
import Bas from "../../Assets/bas.png"
import Thossawat from "../../Assets/thossawat.png"
import Kampol from "../../Assets/kampol.png"
import Heberty from "../../Assets/heberty.png"
import Everton from "../../Assets/everton.png"


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
                img="https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/270442318_494883321969663_6163466648342707571_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG3KayXasc7XUZnM1PEP1rYLVvBKWUS2TEtW8EpZRLZMfySk1iidLqRkRd5eRN4b9k&_nc_ohc=DW5X56kS5jIAX-4NYro&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfAUQIN438LvsXQ_E2OiIENDIPdJpXR1whbw3u7VXAe4NA&oe=6443FDE6"
            />
            <AmbassadorsData
                className="ambassador-reverse"
                ambassadorheading="KAMPOL PATHoMAKKAKUL | RATCHABURI F.C."
                ambassadordescription="Kampol Pathomakkakul is a Thai professional footballer who plays as an goalkeeper for Thai League 1 club Ratchaburi Mitr Phol and the Thailand national team."
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