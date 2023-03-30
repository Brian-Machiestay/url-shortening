import React from "react";
import Shorten from "./shorten";
import BrandStat from "./stat";
import recogniton from "../assets/images/icon-brand-recognition.svg";
import detailed from "../assets/images/icon-detailed-records.svg";
import constom from "../assets/images/icon-fully-customizable.svg";

const StatSection = () => {
    const brand1Title = 'Brand Recognition';
    const brand1text = `Boost your brand recognition 
    with each click. Generic links don't mean 
    a thing. Branded links help instil confidence in your content`
    const brand2Title = 'Detailed Records';
    const brand2text = `Gain insights into who is clicking your links.
     Knowing when and where people engage with your content helps inform better decisions`;
    
    const brand3Title = 'Fully Customizable';
    const brand3text = `Improve brand awareness and content 
    discoverability through customizable links, supercharging audience engagement`
     return (
        <div className="stats">
            <Shorten />
            <h3 className="advancedText">Advanced Statistics</h3>
            <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
            <p>And add confidence to your content</p>
            <div className="iconItems">
                <BrandStat cls="recognize" icon={recogniton} title={brand1Title} text={brand1text} />
                <div className="connect"></div>
                <BrandStat cls="detailed" icon={detailed} title={brand2Title} text={brand2text} />
                <div className="connect"></div>
                <BrandStat cls="custom" icon={constom} title={brand3Title} text={brand3text} />
            </div>
        </div>
    )
}

export default StatSection;