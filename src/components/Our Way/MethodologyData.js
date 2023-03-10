import "./MethodologyStyles.css";
import { Component } from "react";

class MethodologyData extends Component{
    render() {
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                    <h2>{this.props.heading1}</h2>
                    <p>{this.props.text1}</p>
                </div>
                <div className="image">
                    <img src={this.props.img1} alt="Lusitanos" />
                    <img src={this.props.img2} alt="Lusitanos1" />
                </div>
            </div>
        );
    }
}

export default MethodologyData