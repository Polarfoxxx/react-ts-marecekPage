
import "../style/button.style.css"

function ButttonBlock(): JSX.Element {
    return (
        <div className="buttonBlock">
            <div className="buttonPortfolio btnBlock">
                <button>Portfolio</button>
            </div>
            <div className="buttonContact btnBlock">
                <button>Kontakt</button>
            </div>
        </div>
    )
}

export default ButttonBlock