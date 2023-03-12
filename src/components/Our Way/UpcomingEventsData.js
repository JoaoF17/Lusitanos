/* import { Link } from "react-router-dom"; */
import "./UpcomingEventsStyles.css"
import { HashLink as Link } from 'react-router-hash-link';

function UpcomingEventsData(props) {
    return (
        <div className="t-card">
            <Link to={props.url} style={{textDecoration: 'none', color: 'black'}}>
                <div className="t-image">
                    <img src={props.image} alt="Lusitanos" />
                </div>               
                <h4>{props.heading}</h4>                
                <p>{props.text}</p>
            </Link>
        </div>
    );
}

export default UpcomingEventsData;