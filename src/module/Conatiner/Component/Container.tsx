import { Props } from "../type";
import { typeContext } from "../type";

import { createContext, useState,} from "react";
import "../style/container.style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


const Context = createContext<typeContext>({
    navButtonName: "",
    setNavButtonName: () => { },
});

const Provider: React.FC<Props> = ({ children }) => {
    const [navButtonName, setNavButtonName] = useState("")
    const [dd, setdd] = useState(false)

    /* event na presun na top stranky */
    const handleScroolTop = (): void => {
        setNavButtonName("default")
    }
    /* scroll event na zobrazenie Btn */
    const handleScrollPage = (eScroll: React.UIEvent<HTMLElement>): void => {
        if (eScroll.currentTarget.scrollTop > 300) {
            setTimeout(() => {
                setdd(true)
                setNavButtonName("")
            }, 500)

        } else if (eScroll.currentTarget.scrollTop < 300) {
            setTimeout(() => {
                setdd(false)
                setNavButtonName("")
            }, 500)
        }
    }


    return (
        <div className="container"
            onScroll={handleScrollPage}>
            <span style={{ opacity: dd ? "1" : "0", zIndex: dd ? "5" : "-5"  }}
                className="scroller"
                onClick={handleScroolTop}>
                {<FontAwesomeIcon icon={faArrowUp} size="lg" />}
            </span>
            <div className="container-Content">
                <Context.Provider value={{ navButtonName, setNavButtonName }}>
                    {children}
                </Context.Provider>
            </div>
        </div>
    );
};

const Container = {
    Provider,
    Context,
};

export default Container;
