
import "../style/button.style.css"
import { useContext } from "react"
import { Container } from "../../Conatiner";

function ButttonBlock(): JSX.Element {
    const { setNavButtonName } = useContext(Container.Context)


    /* button event na scroll component */
    const handleButoonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const buttonIdent = e.currentTarget.innerText as string;
        setNavButtonName(buttonIdent);
    };

    return (
        <div className="buttonBlock">
            <div className="buttonPortfolio btnBlock">
                <button onClick={(e) => handleButoonClick(e)}>
                    Portfolio
                </button>
            </div>
            <div className="buttonContact btnBlock">
                <button onClick={(e) => handleButoonClick(e)}>
                    Kontakt
                </button>
            </div>
        </div>
    )
}

export default ButttonBlock