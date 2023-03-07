import "./UpcomingEventsStyles.css"

function UpcomingEventsData(props) {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="Lusitanos" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    );
}

export default UpcomingEventsData;