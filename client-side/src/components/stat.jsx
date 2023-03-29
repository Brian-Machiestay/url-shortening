import React from "react"

const BrandStat = (props) => {
    const classes = `${props.cls} brandStat`
    
    return (
        <div className={classes}>
            <div className="statLogo"><img src={props.icon}></img></div>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default BrandStat;