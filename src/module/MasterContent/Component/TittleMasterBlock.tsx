import "../style/tittleMaster.style.css"

import TittleBlock from "./TittleBlock"
import ContentBlock from "./ContentBlock"
import ButttonBlock from "./ButtonBLock"

function TittleMasterBlock(): JSX.Element {
    return (
        <div className="tittleContent">
            <div className="tittleBlock">
                <TittleBlock />
            </div>
            <div className="contentBlock">
                <ContentBlock />
            </div>
            <div className="butttonBlock">
                <ButttonBlock />
            </div>
        </div>
    )
}
export default TittleMasterBlock