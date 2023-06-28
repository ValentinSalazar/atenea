import { BackArrow } from "../../components/BackArrow"

export const ServicioDesarollo = () => {
    return(
        <div className="flex items-center flex-col gap-10 animate-fade">
            <BackArrow />
            <p className="text-xs text-center leading-4 md:text-lg lg:text-xl small:text-xxs small:leading-3">
                <b>ATENEA</b> se encarga  de crear <b>soluciones web y móviles</b> efectivas
                de manera segura, <br className="hidden lg:block" />para empresas en el mundo digital actual. <br/>
                <br/>
                Ofrecen servicios clave como la creación de <b>Landing Pages</b>, es decir, 
                páginas web diseñadas <br className="hidden lg:block" />para <b>captar la atención</b> de los visitantes 
                y convertirlos en clientes potenciales.<br/>
                <br/>
                Estas páginas <b>se caracterizan por su diseño atractivo, <br className="hidden lg:block" />contenido persuasivo 
                y facil acceso</b> para los futuros usuarios. <br/>
                <br/>
                <b>ATENEA</b> también se enfoca en el desarrollo de <b>aplicaciones móviles 
                para <br className="hidden lg:block" />plataformas iOS y Android</b>, reconociendo su importancia en la interacción 
                 el acceso a servicios y contenido.
                </p>
        </div>
    )
}