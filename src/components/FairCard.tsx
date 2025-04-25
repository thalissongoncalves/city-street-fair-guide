interface IFairCard {
    name: string
    location: string
    day: string
    hours: string
    image: string
}

function FairCard({ name, location, day, hours, image }: IFairCard) {
    return(
        <>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{day} | {hours}</p>
            <p>{location}</p>
        </>
    )
}

export default FairCard;