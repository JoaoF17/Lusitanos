import "./CampsStyles.css";
import CampsData from "./CampsData";
import img1 from "../../Assets/campflyer.jpeg"
import openday from "../../Assets/openday.jpeg"
function Camps() {
    return (
        <div className="camps" id="camp">
            <h1>Score Big with Lusitanos<br/> Join Today!</h1>
            <div className="campscard">
                <h2>Enrollments are Open</h2>
                <div className="ongoing">
                    <CampsData
                        campsimg={openday}
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
                </div>
            </div>
        </div>
    );
}

export default Camps;