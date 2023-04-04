import "../style/servicesBlock.style.css"

import TittleMasterBlock from "../../MasterContent/Component/TittleMasterBlock"
import ProductServices from "./ProductServices"

function ServicesBlock(): JSX.Element {
    return (
        <div className="servicesBlockContent">
            <div className="servicesBlockTittle">
                <TittleMasterBlock />
            </div>
            <div className="servicesBlockProduct">
                <ProductServices />
            </div>
        </div>
    )
}

export default ServicesBlock