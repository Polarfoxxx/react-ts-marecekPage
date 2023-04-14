import "../style/contactFooter.style.css"

function ContactFooter(): JSX.Element {
    return (
        <div className="contactFooterBlock">
            <div className="contactTellEmailBlock">
                <div className="tellblock">
                    <div className="tellLogo">
                        <img src="../../../../img/mobileImg.png" alt="" />
                    </div>
                    <div className="tellNumber">
                        <h1>+421 0908 765 545</h1>
                    </div>
                </div>
                <div className="EmailBlock">
                    <div className="emailLogo">
                        <img src="../../../../img/oblImg.png" alt="" />
                    </div>
                    <div className="emailLink">
                        <div className="email">
                            <a
                                href="mailto:email@example.com">
                                marek.jurca@gmail.com
                            </a>
                        </div>
                        <div className="ticket">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <div className="socialMeduiaLogo">
                    <div className="logo"
                        onClick={() => { window.location.replace("") }}>
                        <img src="../../../../img/facebbokImg.png" alt="" />
                    </div>
                    <div className="logo"
                        onClick={() => { window.location.replace("") }}>
                        <img src="../../../../img/instagramImg.png" alt="" />
                    </div>
                    <div className="logo"
                        onClick={() => { window.location.replace("") }}>
                        <img src="../../../../img/linkedImg.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactFooter