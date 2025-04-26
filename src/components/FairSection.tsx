import Title from "./Title";
import { fairs } from "../data/fairs";
import FairCard from "./FairCard";
import "./styles/FairSection.css"

function FairSection() {
    return(
        <div data-testid="fair-section">
            <Title className="section-title" headline='Feiras da Semana' />
            <div className="fair-cards">
                { fairs.map((fai) => <FairCard day={fai.day} hours={fai.hours} image={fai.image} location={fai.location} name={fai.name} key={fai.name} />) }
            </div>
        </div>
    )
}

export default FairSection;