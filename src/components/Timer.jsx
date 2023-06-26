import React, { useState, useEffect } from 'react';

export const Timer = () => {
    const [hora, setHora] = useState('');

  useEffect(() => {
    const obtenerHora = () => {
      const fechaActual = new Date();
      const horas = fechaActual.getHours().toString().padStart(2, '0');
      const minutos = fechaActual.getMinutes().toString().padStart(2, '0');
      const horaActual = `${horas}:${minutos}`;
      setHora(horaActual);
    };

    obtenerHora();

    const intervalo = setInterval(obtenerHora, 60 * 60 * 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column"}}>
      <div style={{ alignSelf: "end"}}>{hora}hs</div>
      <div style={{ fontWeight: 600}}>ARGENTINA</div>
    </div>
  );
};