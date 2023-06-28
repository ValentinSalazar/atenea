import { Link } from "react-router-dom";
import imageDiseno from '../../assets/design.png'
import imageDesarrollo from '../../assets/desarrollo.png'
import imageMarketing from '../../assets/marketing.png'
import imageSeo from '../../assets/seo.png'
import { ServiceCard } from "../../components/ServiceCard";

export const Servicios = () => {


  return (
    <div className="flex flex-col items-center animate-fade">
      <h3 className="text-center mb-5 text-primaryColor text-xs tracking-wider lg:text-xl">Click para ver más información <br className="md:hidden"/> acerca de nuestros servicios.</h3>
      <div className="flex gap-5 flex-col md:grid md:grid-cols-2 md:grid-rows-2 md:gap-10 lg:gap-20 lg:flex lg:flex-row">
        <Link to='diseño'>
          <ServiceCard service='Diseño' imageURL={imageDiseno}/>
        </Link>
        <Link to='desarrollo'>
          <ServiceCard service='Desarrollo' imageURL={imageDesarrollo}/>
        </Link>
        <Link to='marketing'>
          <ServiceCard service='Marketing' imageURL={imageMarketing}/>
        </Link>
        <Link to='seo'>
          <ServiceCard service='SEO' imageURL={imageSeo}/>
        </Link>
      </div>
    </div>
  );
};
