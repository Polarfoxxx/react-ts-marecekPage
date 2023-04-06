
import { Props } from "../type"
import { typeContext } from "../type";

import { createContext, useState } from "react";
import "../style/container.style.css"


const Context = createContext<typeContext>({
    navButtonName: "",
    setNavButtonName: () => { }
})

const Provider: React.FC<Props> = ({ children }) => {
    const [navButtonName, setNavButtonName] = useState("")

    return (
        <div className="container">
            <Context.Provider value={{ navButtonName, setNavButtonName }} >
                {children}
            </Context.Provider>
        </div>
    )
};

const Container = {
    Provider,
    Context
}

export default Container;