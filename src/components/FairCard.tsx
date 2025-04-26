import "./styles/FairSection.css"

interface IFairCard {
    name: string
    location: string
    day: string
    hours: string
    image: string
}

function FairCard({ name, location, day, hours, image }: IFairCard) {
    return(
        <div className="fair-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{day}</p>
            <p>{hours}</p>
            <p className="location">{location}</p>
        </div>
    )
}

export default FairCard;