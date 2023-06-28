import { Link } from "react-router-dom"

export const Button = ({ text }) => {
    return(
        <Link className="bg-primaryColor mt-10
            w-60 rounded-full text-secondaryColor text-center p-5 self-center tracking-spacing font-akshar text-2xl
            hover:bg-primaryColorLow transition duration-200" to="/contacto">
            { text }
        </Link>
    )
}