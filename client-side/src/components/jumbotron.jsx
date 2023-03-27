import React from "react";
import jumbologo from '../assets/images/illustration-working.svg';

const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <div className="textJumbo">
                <h2>More than just shorter links</h2>
                <p className="brand">Build your brand recognition and get detailed insights on how your links are performing</p>
                <a href="#" className="start">Get started</a>
            </div>
            <div className="imageJumbo">
                <img src={ jumbologo } alt="working illustration" />
            </div>
        </div>
    )
}

export default Jumbotron;