import "./FooterStyles.css"

function Footer() {
    return (
    <div className="footer">
        <div className="top">
            <div className="top-left">
                <img src="logo.png" alt="Lusitanos Logo" className="logo" />
                <p>Transform your game and elevate your skills with us.</p>
            </div>
            <div className="right-side">
                <a href=".">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href=".">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href=".">
                <i class="fa-brands fa-tiktok"></i>
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