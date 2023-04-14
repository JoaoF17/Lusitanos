import "./CampsStyles.css";
import { HashLink as Link } from 'react-router-hash-link';

function CampsData(props) {
    return (
        <div className="c-card">
            <Link to={props.url} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'black'}}>
                <div className="c-image">
                    <img src={props.campsimg} alt="Lusitanos" />
                </div>
                <div className="layer">
                    <h4>{props.heading}</h4>
                    <p>{props.text}</p>
                </div>
            </Link>            
        </div>
    );
}

export default CampsData;