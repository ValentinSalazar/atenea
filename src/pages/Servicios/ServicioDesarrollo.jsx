import { motion } from "framer-motion"
import { Sidebar } from "../../components/Sidebar"
export const ServicioDesarollo = () => {
    return(
        <motion.div
        initial={{x: '100%'}}
        animate={{x: '0%'}}
        transition={{ duration: 0.3, ease: "easeOut"}}
        exit={{ x: "-100%"}}>
            <div className="container__servicios--especific">
            <div className="container__servicios-content">
                <Sidebar text='DESARROLLO'/>
                <p>
                <b>ATENEA</b> se encarga  de crear <b>soluciones web y móviles</b> efectivas
                de manera segura, para empresas en el mundo digital actual. <br/>
                <br/>
                Ofrecen servicios clave como la creación de <b>Landing Pages</b>, es decir, 
                páginas web diseñadas para <b>captar la atención</b> de los visitantes 
                y convertirlos en clientes potenciales.<br/>
                <br/>
                Estas páginas <b>se caracterizan por su diseño atractivo, contenido persuasivo 
                y facil acceso</b> para los futuros usuarios. <br/>
                <br/>
                <b>ATENEA</b> también se enfoca en el desarrollo de <b>aplicaciones móviles 
                para plataformas iOS y Android</b>, reconociendo su importancia en la interacción 
                 el acceso a servicios y contenido.
                </p>
            </div>
        </div>
        </motion.div>
    )
}