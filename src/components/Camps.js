import "./CampsStyles.css";
import CampsData from "./CampsData";
import img1 from "../Assets/1.png";

function Camps() {
    return (
        <div className="camps">
            <h1>Songkran Summer Camp</h1>
            <div className="campscard">
                <CampsData 
                image={img1}
                heading = "Footbal Training Camp"
                text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                />
            </div>
        </div>
    );
}

export default Camps;