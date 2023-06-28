export const ServiceCard = ({ service, imageURL }) => {
    return(
        <article className="relative w-56 h-16 bg-primaryColorLow rounded-full flex md:flex-col justify-center items-center cursor-pointer
        md:h-44 md:w-44 md:rounded-3xl
        lg:h-[50vh] lg:w-60
        small:h-12
        hover:bg-primaryColor">
            <img src={imageURL} alt="" className="hidden md:w-20 md:-20 md:mb-5 md:block"/>
            <h3 className="text-secondaryColor uppercase tracking-wider text-sm font-medium lg:text-xl lg:absolute lg:bottom-10">{service}</h3>
        </article>
    )
}