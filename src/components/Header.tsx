import SubTitle from "./SubTitle";
import Title from "./Title";
import "./styles/Header.css"

function Header() {
    return(
        <header>
            <Title className="headerTitle" headline="Feiras Livres da Cidade" />
            <SubTitle className="headerSubTitle" headline="Conheça as feiras, dias, horários e produtos oferecidos." />
        </header>
    )
}

export default Header;