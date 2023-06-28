import { ArticleCard } from "../../components/ArticleCard";
import kb from '../../assets/kb.png'
import yorro from '../../assets/yorro.png'


export const Nosotros = () => {

  return (
    <div className="flex-col small:mt-0">
        <p className="text-center animate-fade small:text-xs text-base md:text-lg lg:text-xl">
        Diseño y desarrollo estratégico. Atenea, se destaca por su <br className="small:hidden"/>
        enfoque perfeccionista, <b>transformando ideas en realidades.</b> <br />
        <br />
        Dirigida por dos jóvenes visionarios del entorno digital, <br className="small:hidden"/>
        expertos en <b>crear soluciones.</b> <br />
        <br />
        Nuestro compromiso es <b>diseñar experiencias únicas,</b> <br className="small:hidden"/>
        acompañadas <b>por un desarrollo de vanguardia.</b> <br />
        <br />
        En Atenea, <b>la excelencia es nuestra esencia.</b>
      </p>
      <div className="mt-10 flex flex-col gap-5 small:gap-1 lg:gap-24 animate-fade md:flex-row md:justify-center small:mt-5">
        <ArticleCard person={{name: 'BRUNO', lastname: 'GUILENIA', image: yorro, position: 'MAIN DESIGNER', link: 'https://niyodesigns.netlify.app/', hoverText: 'niyodesign'}}/>
        <ArticleCard person={{name: 'FACUNDO', lastname: 'SALAZAR', image: kb, position: 'MAIN DEVELOPER', link: 'https://github.com/FacundoSalazar', hoverText: 'facundev'}}/>
      </div>
    </div>
  );
};
