import "../style/portfolioBlock.style.css";
import { useRef, useContext, useEffect } from "react";
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import { Container } from "../../Conatiner";

import AllProductRouter from "./AllProduct.router";
import LogoDizajnRouter from "./LogoDizajn.router";
import TlacovkyRouter from "./Tlacovky.router";

function PortfolioBlock(): JSX.Element {
  const { navButtonName } = useContext(Container.Context);
  const portfolioBlockRef = useRef<HTMLDivElement | null>(null);

    /* scroll presun na component */
  useEffect(() => {
    if (navButtonName === "Portfolio") {
      portfolioBlockRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <div className="portfolioBlockContent" 
         ref={portfolioBlockRef}>
      <div className="portfolioRouter">
        <BrowserRouter>
          <div className="routes-container">
            <div className="toogle-link-container">
              <div className="link-block">
                <Link className="all" to="/">
                  All
                </Link>
              </div>
              <div className="link-block">
                <Link className="logo" to="/logo">
                  Logo
                </Link>
              </div>
              <div className="link-block">
                <Link className="tlacovky" to="/tlacovky">
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
  );
}

export default PortfolioBlock;
