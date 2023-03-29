import "./UpcomingEventsStyles.css";
import UpcomingEventsData from "./UpcomingEventsData";
import img1 from "../../Assets/campflyer1.jpg"

function UpcomingEvents() {
    return (
        <div className="upcomingevents">
            <h1>Upcoming Events</h1>
            <div className="upcomingeventscard">
                <UpcomingEventsData 
                image={img1}
                heading = "Footbal Training Camp"
                text = "Join us this Songkran for our summer camp."
                url = "/camps"
                />
                {/* <UpcomingEventsData 
                image={}
                heading = "Footbal Training"
                text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                /> */}
            </div>
        </div>
    );
}

export default UpcomingEvents;