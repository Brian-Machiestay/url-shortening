import React from "react";

function HeaderComponent() {
    return (
    <div className="header">
        <ul className="nav">
            <li className="logo">Shortly</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
            <li className="login">Login</li>
            <li className="signup">Sign up</li>
        </ul>
    </div>
    )
}

export default HeaderComponent;