import "../style/tittle.style.css"

function TittleBlock(): JSX.Element {
    return (
        <div className="tittleContentDetail">
            <div className="tittleImageBlock">
                <img src="" alt="" />
            </div>
            <div className="tittleTectBlock">
               <span>is a creative</span>
               <span>designer based</span>
               <span>in Slovakia</span>
            </div>
        </div>
    )
}

export default TittleBlock