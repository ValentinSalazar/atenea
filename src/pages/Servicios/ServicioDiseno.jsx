import { BackArrow } from "../../components/BackArrow"


export const ServicioDiseno = () => {
    

    return(
       <div className="flex items-center flex-col gap-10 animate-fade">
        <BackArrow />
        <p className="text-xs text-center leading-4 md:text-lg lg:text-xl small:text-xxs small:leading-3">
                En un mundo <b>altamente visual y digital</b> en el que <b>vivimos</b>, <br />
                <br />
                Es fundamental que las empresas destaquen y transmitan de manera efectiva su identidad,
                productos y servicios.  <br />
                <br />
                Es aquí donde entra en juego <b>ATENEA</b>, una empresa de diseño y 
                desarrollo <b>especializada en crear soluciones</b> <br className="hidden lg:block" />visuales y funcionales 
                que ayudan a las marcas a conectar con su audiencia y alcanzar sus objetivos. <br />
                <br />
                A través del diseño gráfico, se crea una amplia gama de elementos visuales, 
                como logotipos, <br className="hidden lg:block" />ilustraciones, tipografías, colores y composiciones, que <b>representan la identidad, 
                <br className="hidden lg:block" /> los valores, la visión y la personalidad</b> de una empresa. <br />
                <br />
                Estos elementos se utilizan para transmitir mensajes claros y coherentes, 
                <br className="hidden lg:block" /> que ayudan a <b>diferenciar a la marca en el mercado</b>, y poder establecer 
                una imagen de <br className="hidden lg:block" />marca sólida y atractiva,
                <b> para poder atraer a los futuros clientes.</b>
        </p>
       </div>
    )
}