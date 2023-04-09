import "../style/tittle.style.css"

function TittleBlock(): JSX.Element {
    return (
        <div className="tittleContentDetail">
            <div className="tittleImageBlock">
                <img src="" alt="" />
            </div>
            <div className="tittleTectBlock">
                <div>is a creative</div>
                <div>designer based</div>
                <div className="lastLine">
                    <span className="inName">in</span>
                    <span className="slovakiaName">Slovakia</span>
                </div>
            </div>
        </div>
    )
}

export default TittleBlock