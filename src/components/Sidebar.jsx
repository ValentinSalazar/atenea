import { Link, useNavigate } from "react-router-dom"

export const Sidebar = ({ text }) => {

    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate(-1, {
            replace: true,
        })
    }

    return(
        <div className="sidebar">
            <div className="sidebar__backArrow">
                
            </div>
            <h3>{text}</h3>
        </div>
    )
}