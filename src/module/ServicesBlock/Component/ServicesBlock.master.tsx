import "../style/servicesBlock.style.css"
import { useRef, useContext, useEffect } from "react"
import { Container } from "../../Conatiner"

import TittleServices from "./TittleServices"
import ProductServices from "./ProductServices"

function ServicesBlock(): JSX.Element {
    const { navButtonName } = useContext(Container.Context)
    const servisBlockRef = useRef<HTMLDivElement>(null)
  
    useEffect(() => {
        if(navButtonName === "Sluzby") {
            servisBlockRef.current?.scrollIntoView({behavior: 'smooth'});
        }
        
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