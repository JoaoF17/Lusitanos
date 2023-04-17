import "./ContactUsStyles.css";
import lusitanosline from "../../Assets/LusitanosLine.jpeg"

function ContactUs (){
    return(
        <div className="contact">
            <div className="contact-container">
                <div className="contact-details">
                    <h3>Location</h3>
                    <p>Kicck Arena</p>
                    <p>Chaeng Watthana</p>
                </div>                
                <div className="google-maps">
                    <iframe title= "Kicck Arena" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15491.563332997728!2d100.5246937!3d13.9054728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2853f95365f89%3A0x3a29e5819a565a43!2sKicck%20Arena!5e0!3m2!1sen!2sth!4v1681728498905!5m2!1sen!2sth" width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="contact-container">
                <div className="contact-details">
                    <h3>Contact us</h3>
                    <p>Email:</p>
                    <p>hello@lusitanos.org</p>
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