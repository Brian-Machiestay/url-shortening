import React from "react"

const BrandStat = (props) => {
    const classes = `${props.cls} brandStat`
    
    return (
        <div className={classes}>
            <div className="statLogo"><img src={props.icon}></img></div>
            <h2>Lorem ipsum dolor</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora ipsa reprehenderit numquam modi soluta, labore quo nulla ab voluptas iste, aliquam minima corporis ea alias officiis, excepturi inventore vel!</p>
        </div>
    )
}

export default BrandStat;