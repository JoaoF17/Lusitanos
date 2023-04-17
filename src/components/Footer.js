import "./FooterStyles.css"

function Footer() {
    return (
    <div className="footer">
        <div className="top">
            <div className="top-left">
                <img src="logo.png" alt="Lusitanos Logo" className="logo" />
                <p>Transform your game and elevate your skills with us.</p>
            </div>
            <div className="top-right">
                <h1>Socials:</h1>
                <a href="https://www.facebook.com/lusitanosacademybangkok" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/lusitanosacademy/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://lin.ee/S2JiTN5">
                    <i class="fa-brands fa-line"></i>
                </a>
            </div>
        </div>
        <div className="bottom">
            <p>Copyright © 2023 Lusitanos. All rights reserved.</p>
        </div>
    </div>
    )
}

export default Footer