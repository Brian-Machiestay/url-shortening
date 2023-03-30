import React from "react";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";


const Footer = () => {
    return (
        <div className="footer">
            <p href="https://github.com/Brian-Machiestay/url-shortening" className="logo groupTitle">Shortly</p>
            <div className="features">
                <p>Features</p>
                <a href="https://github.com/Brian-Machiestay/url-shortening">Link Shortening</a>
                <a href="https://github.com/Brian-Machiestay/url-shortening">Brand Links</a>
                <a href="https://github.com/Brian-Machiestay/url-shortening">Analytics</a>
            </div>
            <div className="resources">
                <p>Resources</p>
                <a href="https://github.com/Brian-Machiestay/url-shortening">Blog</a>
                <a href="https://github.com/Brian-Machiestay/url-shortening">Developers</a>
                <a href="https://github.com/Brian-Machiestay/url-shortening">Support</a>
            </div>
            <div className="company">
                <p>Company</p>
                <a href="https://github.com/Brian-Machiestay/url-shortening">About</a>
                <a href="https://github.com/Brian-Machiestay/url-shortening">Our team</a>
                <a href="https://github.com/Brian-Machiestay/url-shortening">Careers</a>
                <a href="https://github.com/Brian-Machiestay/url-shortening">Contact</a>
            </div>
            <div className="socialIcons">
                <a href="https://github.com/Brian-Machiestay/url-shortening"><img src={facebook} alt='facebook'></img></a>
                <a href="https://github.com/Brian-Machiestay/url-shortening"><img src={instagram} alt='instagram'></img></a>
                <a href="https://github.com/Brian-Machiestay/url-shortening"><img src={twitter} alt='twitter'></img></a>
                <a href="https://github.com/Brian-Machiestay/url-shortening"><img src={pinterest} alt='pinterest'></img></a>
            </div>
        </div>
    )
}

export default Footer;