import { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ModalContact } from "../../components/ModalContact";

export const Contacto = () => {
  const [showModal, setShowModal] = useState(false); // Nuevo estado showModal

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
      alert('El mensaje es demasiado corto. Ingrese más de 20 caracteres.')
    } else {
      emailjs.sendForm('service_tuftrip', 'template_2p9pirw', form.current, 'ss2IBnGelheXO3g5S')
        .then(() => {
          setShowModal(true); 
          nombre.value = '';
          asunto.value = '';
          mensaje.value = '';
          setTimeout(() => {
            setShowModal(false); 
          }, 3000);
        })
        .catch(() => {
          alert('Ha ocurrido un error, por favor inténtalo nuevamente.');
        });
    }
  };

  return (
    <div className="flex flex-col small:text-xs animate-fade">
      <h3 className="text-4xl text-center font-semibold tracking-widest md:text-5xl lg:text-7xl small:text-3xl">
        CONTACTO
      </h3>
      <p className="text-center md:text-lg lg:text-xl">
        ¿Te interesa ponerte en contacto con <b>ATENEA</b>? <br />
      </p>
      <p className="text-center md:text-lg lg:text-xl">
        Déjanos un mensaje con tu medio de contacto, y uno de nuestros
        asesores <br />
        se contactará con toda la información específica que necesites.
      </p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 mt-5 small:gap-2">
        {showModal && <ModalContact />}
        <div className="flex flex-col gap-5 small:gap-2">
          <input
            type="text"
            placeholder="Nombre"
            name="user_name"
            autoComplete="off"
            className="focus:bg-primaryColor text-xs font-medium bg-primaryColorLow rounded-full p-5
             text-white outline-none placeholder:text-secondaryColor transition duration-20
             md:text-base lg:text-lg small:p-3 small:placeholder:text-xxs"
          />
          <input
            type="text"
            placeholder="Asunto"
            name="asunto"
            autoComplete="off"
            className="focus:bg-primaryColor text-xs font-medium bg-primaryColorLow rounded-full p-5 outline-none
             text-white placeholder:text-secondaryColor transition duration-20
             md:text-base lg:text-lg small:p-3 small:placeholder:text-xxs"
          />
        </div>
        <textarea
        maxLength={300}
          name="message"
          placeholder="Mensaje"
          className="focus:bg-primaryColor text-xs rounded-3xl h-28 outline-none bg-primaryColorLow p-5
           text-white placeholder:text-white transition duration-20
           md:text-base lg:text-lg resize-none overflow-hidden small:h-20 small:p-3"
        ></textarea>
        <input type="submit" className="bg-primaryColorLow rounded-full p-2 w-56 self-center
         text-white cursor-pointer hover:scale-110 transition duration-200 uppercase font-semibold
         small:p-1 small:w-28" />
      </form>
    </div>
  );
};
