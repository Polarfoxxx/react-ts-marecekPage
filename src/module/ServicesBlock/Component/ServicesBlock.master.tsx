import "../style/servicesBlock.style.css"

import TittleServices from "./TittleServices"
import ProductServices from "./ProductServices"

function ServicesBlock(): JSX.Element {
    return (
        <div className="servicesBlockContent">
            <div className="servicesBlockTittle">
                <TittleServices />
            </div>
            <div className="servicesBlockProduct">
                <ProductServices />
            </div>
        </div>
    )
}

export default ServicesBlock