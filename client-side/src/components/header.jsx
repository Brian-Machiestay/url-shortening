import React from "react";

function HeaderComponent() {
    return (
    <div className="header">
        <ul className="nav">
            <a href="#"><li className="logo">Shortly</li></a>
            <a href="#"><li>Features</li></a>
            <a href="#"><li>Pricing</li></a>
            <a href="#"><li>Resources</li></a>
            <a href="#"  className="login"><li>Login</li></a>
            <a href="#"><li className="signup">Sign up</li></a>
        </ul>
    </div>
    )
}

export default HeaderComponent;