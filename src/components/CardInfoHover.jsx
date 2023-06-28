export const CardInfoHover = ({ text, bold, link }) => {
    return(
        <>
        <div className="relative top-0 left-0 right-0 bottom-0 m-auto flex small:text-lg">
            <a href={link} target='_blank' className="flex text-secondaryColor h-auto">
            <h3 style={{ margin: 0}}>{bold}</h3>
            <h3 style={{ margin: 0, fontWeight: 200}}>{text}</h3>
            </a>
        </div>
            
        </>
    )
}