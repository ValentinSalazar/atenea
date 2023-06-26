export const Diseno = ({ image, text}) => {
    return(
        <>
            <img src={image} alt="" />
            <h3 style={{ textAlign: 'center'}}>{text}</h3>
        </>
    )
}