import { motion } from "framer-motion"
import { Sidebar } from "../../components/Sidebar"

export const ServicioSeo = () => {
    return(
        <motion.div
        initial={{x: '100%'}}
        animate={{x: '0%'}}
        transition={{ duration: 0.3, ease: "easeOut"}}
        exit={{ x: "-100%"}}>
            <div className="container__servicios--especific">
            <div className="container__servicios-content">
                <Sidebar text='SEO'/>
                <p>
                    Una de las áreas clave en el trabajo de <b>ATENEA</b> en el ámbito del marketing <br />
                    es la creación de estrategias de marketing digital. 
                    <br /><br />
                    Esto implica identificar los objetivos y el público objetivo de una empresa, y 
                    desarrollar <br />planes de acción basados en diversas tácticas digitales como SEO 
                    (optimización en motores de búsqueda), 
                    <br /><br />
                    Tambien se incluyen la publicidad en línea, marketing de contenidos, <br />
                    redes sociales y email marketing. 
                    <br /><br />
                    Estas <b>estrategias se implementan con el objetivo de aumentar la visibilidad de
                     la marca,</b> generar tráfico en línea y convertir a los visitantes en clientes.
                </p>
            </div>
        </div>
        </motion.div>
    )
}