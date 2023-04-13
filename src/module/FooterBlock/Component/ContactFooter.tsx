import "../style/contactFooter.style.css"

function ContactFooter(): JSX.Element {
    return (
        <div className="contactFooterBlock">
            <div className="contactTellEmailBlock">
                <div className="tellblock">
                    <div className="tellLogo">
                        <img src="" alt="" />
                    </div>
                    <div className="tellNumber">
                        <h1>0908765545</h1>
                    </div>
                </div>
                <div className="EmailBlock">
                    <div className="emailLogo">
                        <img src="" alt="" />
                    </div>
                    <div className="emailLink">
                        <div className="email">
                            <h1>marek.jurca@gmail.com</h1>
                        </div>
                        <div className="ticket">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <div className="socialMeduiaLogo">
                    <div className="logo"></div>
                    <div className="logo"></div>
                    <div className="logo"></div>
                </div>
            </div>
        </div>
    )
}
export default ContactFooter