
import "../style/masterContent.style.css"

import TittleMasterBlock from "./TittleMasterBlock"
import PortretMasterBlock from "./PortretMasterBlock"

function MasterContent(): JSX.Element {
    return (
        <div className="masterContent">
            <div className="masterContentBlockTittle">
                <TittleMasterBlock />
            </div>
            <div className="masterContentBlockPortret">
                <PortretMasterBlock />
            </div>
        </div>
    )
}

export default MasterContent