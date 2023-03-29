import React from "react";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";


const Footer = () => {
    return (
        <div className="footer">
            <p href="#" className="logo groupTitle">Shortly</p>
            <div className="features">
                <p>Features</p>
                <a href="#">Link Shortening</a>
                <a href="#">Brand Links</a>
                <a href="#">Analytics</a>
            </div>
            <div className="resources">
                <p>Resources</p>
                <a href="#">Blog</a>
                <a href="#">Developers</a>
                <a href="#">Support</a>
            </div>
            <div className="company">
                <p>Company</p>
                <a href="#">About</a>
                <a href="#">Our team</a>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
            </div>
            <div className="socialIcons">
                <img src={facebook} alt='facebook'></img>
                <img src={instagram} alt='instagram'></img>
                <img src={twitter} alt='twitter'></img>
                <img src={pinterest} alt='pinterest'></img>
            </div>
        </div>
    )
}

export default Footer;