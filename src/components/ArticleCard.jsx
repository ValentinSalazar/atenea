import { CardInfo } from "../components/CardInfo";
import { CardInfoHover } from "../components/CardInfoHover";


import { useState } from "react";

export const ArticleCard = ( {person }) => {
    
    const [onHover, onSetHover] = useState(false);

    const handleMouseOver = () => {
        onHover(true);
    };
    const handleMouseLeave = () => {
        onSetHover(false);
    };

    return(
        <article className="self-center w-80 flex gap-5 rounded-full h-20 small:h-14 bg-primaryColorLow
         [&>div>h3]:text-white [&>div>h3>b]:text-white small:w-64 cursor-pointer"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}>
          {!onHover ? (
            <CardInfo
              name={ person.name }
              lastname={ person.lastname }
              position={ person.position}
              image={ person.image }
            />
          ) : (
            <CardInfoHover
              bold="niyodesigns"
              text=".com"
              link="https://niyodesigns.netlify.app/"
            />
          )}
        </article>
    )
}