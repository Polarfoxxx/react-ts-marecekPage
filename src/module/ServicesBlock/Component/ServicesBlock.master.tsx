import "../style/servicesBlock.style.css"
import { useRef } from "react"

import TittleServices from "./TittleServices"
import ProductServices from "./ProductServices"

function ServicesBlock(): JSX.Element {
    const servisBlockRef = useRef<HTMLDivElement>(null)
  
    useRef(() => {

    })
    
    return (
        <div className="servicesBlockContent"
             ref={servisBlockRef}>
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