import "../style/portfolioBlock.style.css";
import { useRef, useContext, useEffect } from "react";
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import { Container } from "../../Conatiner";

import AllProductRouter from "./AllProduct.router";
import LogoDizajnRouter from "./LogoDizajn.router";
import TlacovkyRouter from "./Tlacovky.router";
import IlustraceRouter from "./Ilustrace.router";
import WebdizajnRouter from "./Webdizajn.router";

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
      <BrowserRouter>

        <div className="portfolioRouter">
          <div className="routes-container">
            <div className="portfolio-tittle">
              <img src="../../../../img.tittle/portfoliotxt.png" alt="" />
            </div>
            <div className="toogle-link-container">
              <div className="link-block">
                <Link className="link all" to="/">
                  All
                </Link>
              </div>
              <div className="link-block">
                <Link className="link logo" to="/logo">
                  Logo
                </Link>
              </div>
              <div className="link-block">
                <Link className="link tlacovky" to="/tlacovky">
                  Tlacovky
                </Link>
              </div>
              <div className="link-block">
                <Link className="link ilustrace" to="/ilustrace">
                  Ilustrace
                </Link>
              </div>
              <div className="link-block">
                <Link className="link webDizajn" to="/webdizajn">
                  Webdizajn
                </Link>
              </div>
            </div>
          </div>
          <div className="routes-block">
            <Routes>
              <Route index element={<AllProductRouter />} />
              <Route path="logo" element={<LogoDizajnRouter />} />
              <Route path="tlacovky" element={<TlacovkyRouter />} />
              <Route path="ilustrace" element={<IlustraceRouter />} />
              <Route path="webdizajn" element={<WebdizajnRouter />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default PortfolioBlock;
