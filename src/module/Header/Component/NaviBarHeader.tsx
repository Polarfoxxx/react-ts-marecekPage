

function NaviBarHeader(): JSX.Element {

    const handleButoonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const buttonIdent = e.currentTarget.innerText as string
            console.log(buttonIdent);
    }

    return (
        <div className="naviBlockNavContent">
            <div className="btnBlock">
                <button
                    onClick={(e) => handleButoonClick(e)}>
                    O mne
                </button>
            </div>
            <div className="btnBlock">
                <button
                    onClick={(e) => handleButoonClick(e)}>
                    Sluzby
                </button>
            </div>
            <div className="btnBlock">
                <button
                    onClick={(e) => handleButoonClick(e)}>
                    Portfolio
                </button>
            </div>
            <div className="btnBlock">
                <button
                    onClick={(e) => handleButoonClick(e)}>
                    Kontakt
                </button>
            </div>
        </div>
    )
}

export default NaviBarHeader