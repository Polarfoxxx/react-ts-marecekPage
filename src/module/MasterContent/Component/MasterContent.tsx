
import "../style/masterContent.style.css"

import MasterTittleBlock from "./MasterTittleBlock"
import MasterPortretBlock from "./MasterPortretBlock"

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