import "../style/header.style.css";
import { useRef, useContext, useEffect } from "react"
import { Container } from "../../Conatiner";

import LogoHeader from "./LogoHeader";
import NaviBarHeader from "./NaviBarHeader";

function Header(): JSX.Element {
  const { navButtonName } = useContext(Container.Context);
  const defaultBlockRef = useRef<HTMLDivElement | null>(null);

  /* scroll presun na component */
  useEffect(() => {
    if (navButtonName === "default") {
      defaultBlockRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  });


  return (
    <div className="header"
      ref={defaultBlockRef}>
      <div className="headerCont">
        <div className="headerComponent LogoBlock">
          <LogoHeader />
        </div>
        <div className="headerComponent NaviBlock">
          <NaviBarHeader />
        </div>
      </div>
    </div>
  );
}

export default Header;
