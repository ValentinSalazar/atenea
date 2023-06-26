import { useState } from "react";
import { Link } from "react-router-dom";
import { Diseno  } from "../../components/Diseno";
import imageDiseno from '../../assets/design.png'
import imageDesarrollo from '../../assets/desarrollo.png'
import imageMarketing from '../../assets/marketing.png'
import imageSeo from '../../assets/seo.png'

export const Servicios = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [secondIsHovered, setSecondIsHovered] = useState(false);
  const [thirdIsHovered, setThirdIsHovered] = useState(false);
  const [fourthIsHovered, setFourthIsHovered] = useState(false);

  const handleMouseEnter = (setter) => {
    setter(true);
  };

  const handleMouseLeave = (setter) => {
    setter(false);
  };

  return (
    <>
      <div className="servicios__container">
          <div
            className="servicios__container-diseno"
            onMouseEnter={() => handleMouseEnter(setIsHovered)}
            onMouseLeave={() => handleMouseLeave(setIsHovered)}
          >
            <Link
              style={{ textDecoration: "none", color: "#fff", display:'flex', justifyContent: 'center' }}
              to="/servicios/diseño"
            >
              {isHovered ? (
                <h5 className="hoverEffect"
                >
                  DISEÑO
                </h5>
              ) : (
                <Diseno image={imageDiseno} text="DISEÑO" />
              )}
            </Link>
          </div>
          <div
            className="servicios__container-desarollo"
            onMouseEnter={() => handleMouseEnter(setSecondIsHovered)}
            onMouseLeave={() => handleMouseLeave(setSecondIsHovered)}
          >
            <Link
              style={{ textDecoration: "none", color: "#fff", display:'flex', justifyContent: 'center' }}
              to="/servicios/desarrollo"
            >
              {secondIsHovered ? (
                <h5 className="hoverEffect"
                >
                  DESARROLLO
                </h5>
              ) : (
                <Diseno image={imageDesarrollo} text="DESARROLLO" />
              )}
            </Link>
          </div>
          <div
            className="servicios__container-marketing"
            onMouseEnter={() => handleMouseEnter(setThirdIsHovered)}
            onMouseLeave={() => handleMouseLeave(setThirdIsHovered)}
          >
            <Link
              style={{ textDecoration: "none", color: "#fff", display:'flex', justifyContent: 'center' }}
              to="/servicios/marketing"
            >
              {thirdIsHovered ? (
                <h5 className="hoverEffect"
                >
                  MARKETING
                </h5>
              ) : (
                <Diseno image={imageMarketing} text="MARKETING" />
              )}
            </Link>
          </div>
          <div
            className="servicios__container-seo"
            onMouseEnter={() => handleMouseEnter(setFourthIsHovered)}
            onMouseLeave={() => handleMouseLeave(setFourthIsHovered)}
          >
            <Link
              style={{ textDecoration: "none", color: "#fff", display:'flex', justifyContent: 'center' }}
              to="/servicios/seo"
            >
              {fourthIsHovered ? (
                <h5 className="hoverEffect">
                  SEO
                </h5>
              ) : (
                <Diseno image={imageSeo} text="SEO" />
              )}
            </Link>
          </div>
        </div>
    </>
  );
};
