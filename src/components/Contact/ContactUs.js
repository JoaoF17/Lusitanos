import "./ContactUsStyles.css";
import line from "../../Assets/ThiagoLine.jpeg"
import lusitanosline from "../../Assets/LusitanosLine.jpeg"

function ContactUs (){
    return(
        <div className="contact">
            <div className="contact-container">
                <div className="contact-details">
                    <h3>Head Coach</h3>
                    <p>Thiago Mora</p>
                    <p>Phone number: +66 926 575 049</p>
                    <p>(Contact Via Whatsapp)</p>
                </div>                
                <div className="contact-image">
                    <img src={line} alt="Thiago Line" />
                </div>
            </div>
            <div className="contact-container">
                <div className="contact-details">
                    <p>Contact us via <br/> e-mail/Line</p>
                    <h3>hello@lusitanos.org</h3>
                </div>
                <div className="contact-i">
                    <img src={lusitanosline} alt="Lusitanos Line" />
                    {/* <a href="https://lin.ee/S2JiTN5">
                        <img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="Lusitanos Line" height="36" border="0"/>
                    </a> */}
                </div>
            </div>
        </div>
    );
}

export default ContactUs;