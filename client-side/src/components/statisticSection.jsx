import React from "react";
import Shorten from "./shorten";
import BrandStat from "./stat";
import recogniton from "../assets/images/icon-brand-recognition.svg";
import detailed from "../assets/images/icon-detailed-records.svg";
import constom from "../assets/images/icon-fully-customizable.svg";

const StatSection = () => {
    return (
        <div className="stats">
            <Shorten />
            <h3 className="advancedText">Advanced Statistics</h3>
            <p>Lorem ipsum kldfjkdlfd fdflkjdfkjdfjdfdjfk dfkdlfdfjldkfslfslfs
                dkfdlfkdjflksjflskjfslkdfjslfdjdlkfdjfldkfjdlfjdfdfsjldkfslkf
            </p>
            <p>Lorem ipsum kldfjkdlfd fdflkjdfkjdfjdfdjfk dfkdlfdfjldkfslfslfs
                djfldkfjdlfjdfdfsjldkfslkf
            </p>
            <div className="iconItems">
                <BrandStat cls="recognize" icon={recogniton} />
                <div className="connect"></div>
                <BrandStat cls="detailed" icon={detailed} />
                <div className="connect"></div>
                <BrandStat cls="custom" icon={constom} />
            </div>
        </div>
    )
}

export default StatSection;