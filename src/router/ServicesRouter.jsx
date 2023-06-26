import { Route, Routes } from "react-router-dom"
import { Servicios } from "../pages/Servicios/Servicios"
import { ServicioDiseno } from "../pages/Servicios/ServicioDiseno"
import { ServicioDesarollo } from "../pages/Servicios/ServicioDesarrollo"
import { ServicioMarketing } from "../pages/Servicios/ServicioMarketing"
import { ServicioSeo } from "../pages/Servicios/ServicioSeo"

export const ServicesRouter = () => {
    return(
        <>
            <Routes>
                <Route index element={<Servicios />} />
                <Route path="/diseño" element={<ServicioDiseno />}/>
                <Route path="/desarrollo" element={<ServicioDesarollo />}/>
                <Route path="/marketing" element={<ServicioMarketing />}/>
                <Route path="/seo" element={<ServicioSeo />}/>
            </Routes>
        </>
    )
}