import "./CampsStyles.css";
import CampsData from "./CampsData";
import img1 from "../../Assets/campflyer.jpeg"
import openday from "../../Assets/openday.jpeg"
import individual from "../../Assets/individual.png"
import schedule from "../../Assets/schedule.jpg"
import campjuly from "../../Assets/campjuly.jpeg"
import campjuly1 from "../../Assets/campjuly1.jpeg"
import goalkeeperindividual from "../../Assets/goalkeeperindividual.jpg";
import PopUp from "../PopUp/PopUp";

function Camps() {

    return (
        <div className="camps" id="camp">
            <h1>Score Big with Lusitanos</h1>
            <div className="campscard">
                <h2>Join Today!</h2>
                <div className="ongoing">
                    <PopUp
                        popimg={schedule}
                        popheading = "Click"
                        poptext = "to see our schedule"
                        popimg1 = {schedule}
                    />
                    <PopUp
                        popimg={campjuly}
                        popheading = "Click"
                        poptext = "for more info."                        
                        popimg1 = {campjuly1}
                    />  
                    <CampsData
                        campsimg={individual}
                        heading = "Click"
                        text = "to join our Line and get more info."
                        url = "https://lin.ee/S2JiTN5"
                    />
                </div>
                <div className="ongoing1">
                    <CampsData
                        campsimg={goalkeeperindividual}
                        heading = "Click"
                        text = "to join our Line and get more info."
                        url = "https://lin.ee/S2JiTN5"
                    />
                </div>
                <h2>Previous Events</h2>
                <div className="finished">
                    <CampsData 
                        campsimg={img1}
                        heading = "Click"
                        text = "to see this event media."
                        url = "https://drive.google.com/drive/folders/1-Nzhq7Be4OktS5FC8ItoxfgbhSFKvK4B"
                    />
                    <CampsData
                        campsimg={openday}
                        heading = "Click"
                        text = "to join our Line and get more info."
                        url = "https://lin.ee/S2JiTN5"
                    />
                </div>
            </div>
        </div>
    );
}

export default Camps;