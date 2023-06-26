import { NavLink } from "react-router-dom"

export const Navbar = () => {

    const activeLink = ({ isActive }) => `${isActive ? 'font-black' : ''}`;

    return(
        <header className="fixed z-10 left-1/2 -translate-x-1/2">
            <nav className="flex gap-3 justify-center uppercase animate-fade 
            [&>a]:text-primaryColor text-lg small:text-sm [&>a]:md:text-xl md:gap-10 [&>a]:lg:text-2xl lg:gap-20">
                <NavLink to="/" className={activeLink}        >Inicio</NavLink>
                <NavLink to="nosotros" className={activeLink} >Nosotros</NavLink>
                <NavLink to="servicios" className={activeLink}>Servicios</NavLink>
                <NavLink to="contacto" className={activeLink} >Contacto</NavLink>
            </nav>
        </header>
    )
}