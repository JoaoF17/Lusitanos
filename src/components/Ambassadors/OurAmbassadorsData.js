import "./OurAmbassadorsStyles.css"
import { Component} from "react";

class AmbassadorsData extends Component{
    render() {
        return(
            <div className={this.props.className}>
                <div className="text-details">
                    <h2>{this.props.ambassadorheading}</h2>
                    <p>{this.props.ambassadordescription}</p>
                </div>
                <div className="ambassador-image">
                    <img src={this.props.img} alt="Lusitanos Ambassador" />
                </div>
            </div>
        );
    }
}

export default AmbassadorsData;