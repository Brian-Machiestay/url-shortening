import React from "react";

const Shorten = ({ setLink, setLetsdo}) => {

    function saveUrl(e) {
        setLink(e.target.value);
    }

    function setlets(e) {
        setLetsdo(true);
    }

    return (
        <div className="shortenDiv">
            <div className="shortenItems">
                <textarea onChange={saveUrl}></textarea>
                <button className="shorten" onClick={ setlets }>shorten it</button>
            </div>
        </div>
    )
}

export default Shorten;
