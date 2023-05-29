import React, {useState} from "react";
import { Dialog, DialogContent } from "@mui/material";

function PopUp(props) {

    const [popUp, setPopUp] = useState(false);

    return (
        <>
            <div onClick={() => setPopUp(true)} className="c-card">
                <div className="c-image">
                    <img src={props.popimg} alt="Lusitanos" />
                </div>
                <div className="layer">
                    <h4>{props.popheading}</h4>
                    <p>{props.poptext}</p>
                </div>
            </div>
            <Dialog
                open={popUp}
                onClose={()=>setPopUp(false)}
                maxWidth={'sm'}
            >
                <DialogContent>
                    <img src={props.popimg1} alt="popup" />
                </DialogContent>
            </Dialog>
        </>
    );
}

export default PopUp