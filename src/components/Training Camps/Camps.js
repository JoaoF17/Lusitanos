import "./CampsStyles.css";
import CampsData from "./CampsData";
import img1 from "../../Assets/campflyer.jpeg"
function Camps() {
    return (
        <div className="camps" id="camp">
            <h1>Songkran Summer Camp</h1>
            <div className="campscard">
                <CampsData 
                image={img1}
                heading = ""
                text = ""
                />
            </div>
        </div>
    );
}

export default Camps;