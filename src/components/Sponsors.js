import "./SponsorsStyles.css"
import tops from "../Assets/tops.png"
import gatorade from "../Assets/gatorade.png"
import ari from "../Assets/Ari_football_logo.png"

import React from 'react'

const Sponsors = () => {
    return (
        <div className="sponsors">
            <h1>Sponsors</h1>
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                        <img src={tops} alt="Tops" />
                    </div>
                    <div className="slide">
                        <img src={gatorade} alt="Tops" />
                    </div>
                    <div className="slide">
                        <img src={ari} alt="Tops" />
                    </div>
                    {/* repeat slider */}
                    <div className="slide">
                        <img src={tops} alt="Tops" />
                    </div>
                    <div className="slide">
                        <img src={gatorade} alt="Tops" />
                    </div>
                    <div className="slide">
                        <img src={ari} alt="Tops" />
                    </div>
                    {/* repeat slider */}
                    <div className="slide">
                        <img src={tops} alt="Tops" />
                    </div>
                    <div className="slide">
                        <img src={gatorade} alt="Tops" />
                    </div>
                    <div className="slide">
                        <img src={ari} alt="Tops" />
                    </div>
                    {/* repeat slider */}
                    <div className="slide">
                        <img src={tops} alt="Tops" />
                    </div>
                    <div className="slide">
                        <img src={gatorade} alt="Tops" />
                    </div>
                    <div className="slide">
                        <img src={ari} alt="Tops" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors