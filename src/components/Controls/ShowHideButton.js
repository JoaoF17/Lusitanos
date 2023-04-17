import React, { useState } from "react";

function ShowHideButton() {

    const[show, setShow] = useState(false)

    return (
        <div>
            {
                show? "showbttn" : null 
            }
            <button onClick={()=>setShow(!show)}><i class="fa-light fa-plus"></i></button>
        </div>
    )
}

export default ShowHideButton
