import "../style/footerBlock.style.css"
import { useRef, useContext, useEffect } from "react"

import { Container } from "../../Conatiner"

import ContactFooter from "./ContactFooter";
import InstagramFooter from "./InstagramFooter";
import LastRow from "./LastRow";

function FooterBlock(): JSX.Element {
  const { navButtonName } = useContext(Container.Context);
  const kontaktBlockRef = useRef<HTMLDivElement | null>(null);

  /* scroll presun na component */
  useEffect(() => {
    if (navButtonName === "Kontakt") {
      kontaktBlockRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <div className="footerBlockContent"
      ref={kontaktBlockRef}>
      <div className="footerTittle">
        <div className="footerTittleImg">
          <img src="../../../../img.tittle/footerTittles.png" alt="" />
        </div>
      </div>
      <div className="footerMedia">
        <div className="footerContact fotBlock">
          <ContactFooter />
        </div>
        <div className="footerInstagram fotBlock">
          <InstagramFooter />
        </div>
      </div>
      <div className="footerLastRow">
        <LastRow />
      </div>
    </div>
  )
}

export default FooterBlock