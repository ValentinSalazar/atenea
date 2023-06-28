import { Link, useNavigate } from "react-router-dom"
export const BackArrow = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1, {
            replace: true
        })
    }
    return(
        <Link onClick={handleClick} className="bg-primaryColorLow px-7 py-3 rounded-full text-secondaryColor uppercase text-xs font-light hover:bg-primaryColor transition duration-200">
            Volver
        </Link>
    )
}