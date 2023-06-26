import { motion } from "framer-motion"
import { Sidebar } from "../../components/Sidebar"

export const ServicioDiseno = () => {
    return(
        <motion.div
        initial={{x: '100%'}}
        animate={{x: '0%'}}
        transition={{ duration: 0.3, ease: "easeOut"}}
        exit={{ x: "-100%"}}>
            <div className="container__servicios--especific">
            <div className="container__servicios-content">
                <Sidebar text='DISEÑO'/>
                <p>
                En un mundo <b>altamente visual y digital</b> en el que <b>vivimos</b>, <br />
                <br />
                Es fundamental, que empresas puedan destacar y comunicar de manera efectiva su identidad,<br /> 
                productos y servicios.  <br />
                <br />
                Es aquí donde entra en juego <b>ATENEA</b>, una empresa de diseño y 
                desarrollo <b>especializada en crear <br />soluciones</b> visuales y funcionales 
                que ayudan a las marcas a conectar con su audiencia y alcanzar sus objetivos. <br />
                <br />
                A través del diseño gráfico, se crea una amplia gama de elementos visuales, 
                como logotipos,<br /> ilustraciones, tipografías, colores y composiciones, que <b>representan la identidad, 
                los valores, <br />la visión y la personalidad</b> de una empresa. <br />
                <br />
                Estos elementos se utilizan para transmitir mensajes claros y coherentes, 
                que ayudan a <b>diferenciar a la marca en el mercado</b>, y poder establecer 
                una imagen de marca sólida y atractiva, 
                <b>para poder atraer a los futuros clientes.</b>
                </p>
            </div>
        </div>
        </motion.div>
    )
}