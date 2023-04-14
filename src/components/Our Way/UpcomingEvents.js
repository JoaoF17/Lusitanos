import "./UpcomingEventsStyles.css";
import UpcomingEventsData from "./UpcomingEventsData";
import img1 from "../../Assets/openday.jpeg"

function UpcomingEvents() {
    return (
        <div className="upcomingevents">
            <h1>Upcoming Events</h1>
            <div className="upcomingeventscard">
                <UpcomingEventsData 
                image={img1}
                heading = "Lusitanos Open Day"
                text = "Join us on the 22nd of April for Lusitanos open day."
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