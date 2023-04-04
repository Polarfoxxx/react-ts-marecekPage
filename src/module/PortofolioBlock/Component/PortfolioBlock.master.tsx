import "../style/portfolioBlock.style.css"

import { Routes, Link, Route, BrowserRouter } from "react-router-dom";

import AllProductRouter from "./AllProduct.router";
import LogoDizajnRouter from "./LogoDizajn.router";
import TlacovkyRouter from "./Tlacovky.router";

function PortfolioBlock(): JSX.Element {

    return (
        <div className="portfolioBlockContent">
            <div className="portfolioRouter">
                <BrowserRouter>
                    <div className="routes-container">
                        <div className='toogle-link-container'>
                            <div className="link-block">
                                <Link className="all"
                                    to="/">
                                    All
                                </Link>
                            </div>
                            <div className="link-block">
                                <Link className="logo"
                                    to="/RouterCloud">
                                    Logo
                                </Link>
                            </div>
                            <div className="link-block">
                                <Link className="tlacovky"
                                    to="/RouterPressure">
                                    Tlacovky
                                </Link>
                            </div>
                        </div>
                        <div className="routes-block">
                            <Routes>
                                <Route index element={<AllProductRouter />} />
                                <Route path="logo" element={<LogoDizajnRouter />} />
                                <Route path="tlacovky" element={<TlacovkyRouter />} />
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default PortfolioBlock