import Title from "./Title";
import { fairs } from "../data/fairs";
import FairCard from "./FairCard";

function FairSection() {
    return(
        <div data-testid="fair-section">
            <Title headline='Feiras da Semana' />
            { fairs.map((fai) => <FairCard day={fai.day} hours={fai.hours} image={fai.image} location={fai.location} name={fai.name} key={fai.name} />) }
        </div>
    )
}

export default FairSection;