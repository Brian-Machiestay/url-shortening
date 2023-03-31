import React from "react";
import GetStarted from "./getStarted";
import { useState } from "react";

const GeneratedLink = (props) => {
    return (
        <div className="generateDiv">
            <p className="your_link">your link</p>
            <p className="generatedLink">generated link</p>
            <button className="copy">copy</button>
        </div>
    )
}

export default GeneratedLink;