import { BackArrow } from "../../components/BackArrow"

export const ServicioMarketing = () => {
    return(
        <div className="flex items-center flex-col gap-10 animate-fade">
            <BackArrow />
            <p className="text-xs text-center leading-4 md:text-lg lg:text-xl small:text-xxs small:leading-3">
                El marketing desempeña un <b>papel fundamental para que las empresas 
                logren destacar,<br /></b> llegar a su público objetivo y alcanzar el éxito. <br />
                <br />
                Una empresa de diseño y desarrollo especializada en el área del marketing 
                <b> se dedica a crear estrategias y <br />soluciones efectivas</b> para promover marcas, 
                productos y servicios en el mercado.<br />
                <br />
                Además de las estrategias digitales, <b>ATENEA</b> también <br />
                se enfoca en la creación de contenido visual y escrito de alta calidad. <br />
                <br />
                Otro aspecto fundamental del trabajo de una empresa de diseño
                y desarrollo en el área del marketing es el <br /><b>análisis de datos y la medición de resultados.</b> <br />
                <br />
                Utilizando herramientas y tecnologías especializadas, 
                estas empresas recopilan y <b><br className="hidden lg:block" />analizan datos para evaluar el 
                rendimiento de las estrategias y campañas de marketing.</b> 
                </p>
        </div>
    )
}