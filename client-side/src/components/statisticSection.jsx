import React from "react";
import Shorten from "./shorten";
import BrandStat from "./stat";
import recogniton from "../assets/images/icon-brand-recognition.svg"

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
            <BrandStat cls="recognize" icon={recogniton} />
        </div>
    )
}

export default StatSection;