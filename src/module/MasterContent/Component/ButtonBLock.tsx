
import "../style/button.style.css"

function ButttonBlock(): JSX.Element {
    return (
        <div className="buttonBlock">
            <div className="buttonPortfolio">
                <button>Portfolio</button>
            </div>
            <div className="buttonContact">
                <button>Kontakt</button>

            </div>
        </div>
    )
}

export default ButttonBlock