import { CardInfo } from "../components/CardInfo";
import { CardInfoHover } from "../components/CardInfoHover";

import { useState } from "react";

export const ArticleCard = ({ person }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <article
      className="p-1 self-center w-80 flex gap-5 rounded-full h-16 small:h-14 bg-primaryColorLow 
      [&>div>h3]:text-white [&>div>h3>b]:text-white small:w-64 cursor-pointer
      hover:bg-primaryColor
      lg:scale-110"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {!isHovered ? (
        <CardInfo
          name={person.name}
          lastname={person.lastname}
          position={person.position}
          image={person.image}
        />
      ) : (
        <CardInfoHover
          bold={person.hoverText}
          text=".com"
          link={person.link}
        />
      )}
    </article>
  );
};
