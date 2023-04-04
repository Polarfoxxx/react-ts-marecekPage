
import "../style/masterContent.style.css"

import MasterTittleBlock from "./TittleMasterBlock"
import MasterPortretBlock from "./PortretMasterBlock"

function MasterContent(): JSX.Element {
    return (
        <div className="masterContent">
            <div className="masterContentBlockTittle">
                <MasterTittleBlock />
            </div>
            <div className="masterContentBlockPortret">
                <MasterPortretBlock />

            </div>
        </div>
    )
}

export default MasterContent