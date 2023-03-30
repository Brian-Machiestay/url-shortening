import React from "react";

function HeaderComponent() {
    return (
    <div className="header">
        <ul className="nav">
            <a href="https://github.com/Brian-Machiestay/url-shortening"><li className="logo">Shortly</li></a>
            <a href="https://github.com/Brian-Machiestay/url-shortening"><li>Features</li></a>
            <a href="https://github.com/Brian-Machiestay/url-shortening"><li>Pricing</li></a>
            <a href="https://github.com/Brian-Machiestay/url-shortening"><li>Resources</li></a>
            <a href="https://github.com/Brian-Machiestay/url-shortening"  className="login"><li>Login</li></a>
            <a href="https://github.com/Brian-Machiestay/url-shortening"  className="signup"><li>Sign up</li></a>
        </ul>
    </div>
    )
}

export default HeaderComponent;