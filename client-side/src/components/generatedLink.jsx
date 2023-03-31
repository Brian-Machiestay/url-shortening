import React from "react";
import { useState } from "react";

const GeneratedLink = ({ link, letsDo, setLetsdoVal }) => {
    const [glink, setglink] = useState("");
    console.log(`https://api.shrtco.de/v2/shorten?url=${link}`);
    async function genLink() {
        fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then(response => {
            if (response.ok) return response.json();
            else throw response
        })
        .then((data) => {
            setglink(data.result['full_share_link']);
        })
       
    }
    if (letsDo) {
        genLink();
        setLetsdoVal(false);
    }
    return (
        <div className="generateDiv">
            <p className="your_link">{ link }</p>
            <p className="generatedLink">{ glink }</p>
            <button className="copy">copy</button>
        </div>
    )
}

export default GeneratedLink;