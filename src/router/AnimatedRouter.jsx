import { Route, Routes, useLocation } from "react-router-dom";
import { ServicesRouter } from "./ServicesRouter";
import { Inicio } from "../pages/Inicio/Inicio";
import { Nosotros } from "../pages/Nosotros/Nosotros";
import { Contacto } from "../pages/Contacto/Contacto";

export const AnimatedRouter = () => {
  const location = useLocation();
  return (
    <section className="relative z-20 w-screen h-semiFull flex justify-center items-center">
      <Routes location={location.pathname} key={location.pathname}>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios/*" element={<ServicesRouter />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </section>
  );
};
