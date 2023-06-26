import { ArticleCard } from "../../components/ArticleCard";
import kb from '../../assets/kb.png'
import yorro from '../../assets/yorro.png'
export const Nosotros = () => {

  return (
    <div className="flex-col lg:mt-40 small:mt-0">
        <p className="text-center animate-fade small:text-sm text-xl md:text-2xl lg:text-3xl">
        Diseño y desarrollo estratégico. Atenea, se destaca por su <br />
        enfoque perfeccionista, <b>transformando ideas en realidades.</b> <br />
        <br />
        Dirigida por dos jóvenes visionarios del entorno digital, <br />
        expertos en <b>crear soluciones.</b> <br />
        <br />
        Nuestro compromiso es <b>diseñar experiencias únicas,</b> <br />
        acompañadas <b>por un desarrollo de vanguardia.</b> <br />
        <br />
        En Atenea, <b>la excelencia es nuestra esencia.</b>
      </p>
      <div className="mt-10 flex flex-col gap-5 animate-fade md:flex-row md:justify-center">
        <ArticleCard person={{name: 'BRUNO', lastname: 'GUILENIA', image: yorro, position: 'MAIN DESIGNER'}}/>
        <ArticleCard person={{name: 'FACUNDO', lastname: 'SALAZAR', image: kb, position: 'MAIN DEVELOPER'}}/>
      </div>
    </div>
  );
};
