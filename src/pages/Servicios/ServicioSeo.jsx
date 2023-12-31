import { BackArrow } from "../../components/BackArrow"

export const ServicioSeo = () => {
    return(
        <div className="flex items-center flex-col gap-10 animate-fade">
            <BackArrow />
            <p className="text-xs text-center leading-4 md:text-lg lg:text-xl small:text-xxs small:leading-3">
                    Una de las áreas clave en el trabajo de <b>ATENEA</b> en el ámbito del marketing
                    <br className="hidden lg:block" />es la creación de estrategias de marketing digital. 
                    <br /><br />
                    Esto implica identificar los objetivos y el público objetivo de una empresa, y 
                    desarrollar <br />planes de acción basados en diversas tácticas digitales <br className="hidden lg:block" />como SEO 
                    (optimización en motores de búsqueda).
                    <br /><br />
                    Tambien se incluyen la publicidad en línea, marketing de contenidos, <br />
                    redes sociales y email marketing. 
                    <br /><br />
                    Estas <b>estrategias se implementan con el objetivo de aumentar la visibilidad de
                     la marca,</b> <br className="hidden lg:block" />generar tráfico en línea y convertir a los visitantes en clientes.
                </p>
        </div>
    )
}