import "./ContactUsStyles.css";
import line from "../../Assets/ThiagoLine.jpeg"
import email from "../../Assets/email.png"

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
                    <h3>Contact us via <br/> e-mail</h3>
                    <p>hello@lusitanos.org</p>
                </div>
                <div className="contact-i">
                    <img src={email} alt="Thiago Line" />
                </div>
            </div>
        </div>
    );
}

export default ContactUs;