export const CardInfo = ({ name, lastname, position, image}) => {
    return(
        <>
        <img src={image} alt="" className="w-14 h-14 small:w-12 small:h-12"/>
            <div className="flex flex-col justify-center">
                <h3 className="text-sm tracking-wider small:text-sm">{name} <b>{ lastname}</b></h3>
                <p className="text-xs opacity-75 text-secondaryColor tracking-widest small:text-xxs">{position}</p>
            </div>
        </>
    )
}