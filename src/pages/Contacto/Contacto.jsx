import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from 'emailjs-com';
export const Contacto = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll('input')
    const mensaje = document.querySelector('textarea')
    const nombre = inputs[0]
    const asunto = inputs[1]
    if ((nombre.value.length === 0) || (asunto.value.length === 0)) {
      alert('Uno de los campos se encuentra vacio.')
    } else if (mensaje.value.length < 20) {
      alert('El mensaje es demasiado corto. Ingrese mas de 20 caracteres.')
    } else {
      emailjs.sendForm('service_tuftrip', 
      'template_2p9pirw', form.current, 
      'ss2IBnGelheXO3g5S')
        .then(() => {
            alert('Su consulta se ha enviado correctamente.')
            nombre.value = ''
            asunto.value = ''
            mensaje.value = ''
        }, () => {
            alert('Ha ocurrido un error, por favor intentalo nuevamente.')
      });
    }
  };


  return (
    <motion.div
      // id="content"
      // initial={{ x: "100%" }}
      // animate={{ x: "0%" }}
      // transition={{ duration: 0.3, ease: "easeOut" }}
      // exit={{ x: "200%" }}
    >
      <section id="contacto">
        <div
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ letterSpacing: "5px", margin: 0 }}>
            CONTACTO
          </h3>
          <p style={{ margin: 0 }}>
            ¿Te interesa ponerte en contacto con <b>ATENEA</b>? <br />
          </p>
          <p>
            Dejanos un mensaje con tu medio de contacto, y uno de nuestros
            asesores <br />
            se contactará con toda la informacion especifica que necesites.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <div
              className="inputs"
            >
              <input
                type="text"
                placeholder="Nombre"
                name="user_name"
              />
              <input
                type="text"
                placeholder="Asunto"
                name="asunto"
              />
            </div>
            <textarea
              name="message"
              id=""
              placeholder="Mensaje"
            ></textarea>
            <input type="submit" className="submit"/>
          </form>
        </div>
      </section>
    </motion.div>
  );
};
