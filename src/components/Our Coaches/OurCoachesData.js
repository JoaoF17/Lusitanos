import "./OurCoachesStyles.css";
import { Component} from "react";

class OurCoachesData extends Component{
    render() {
        return(
            <div className={this.props.className}>
                <div className="description-text">
                    <h2>{this.props.heading}</h2>
                    <h2>{this.props.heading1}</h2>
                    <div className="paragraph">
                        <p>{this.props.text}</p>
                    </div>
                    
                </div>

                <div className="lists">
                    <div className="column">
                        <h3>{this.props.listHeading}</h3>
                        <ul className="ul-left">
                            <li>{this.props.li1}</li>
                            <li>{this.props.li2}</li>
                            <li>{this.props.li3}</li>
                            <li>{this.props.li4}</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3>{this.props.list1Heading}</h3>
                        <ul className="ul-right">
                            <li>{this.props.li5}</li>
                            <li>{this.props.li6}</li>
                            <li>{this.props.li7}</li>
                        </ul>
                    </div>
                </div> 

                <div className="coach-image">
                    <img src={this.props.img1} alt="Lusitanos" />
                    <img src={this.props.img2} alt="Lusitanos1" />
                </div>
            </div>
        );
    }
}

export default OurCoachesData;