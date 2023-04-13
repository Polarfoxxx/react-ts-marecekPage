import "../style/footerBlock.style.css"
import { useRef, useContext, useEffect } from "react"

import { Container } from "../../Conatiner"


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

        </div>
      </div>
      <div className="footerInstagram fotBlock">

      </div>
      <div className="footerLastRow">
        <div className="lastRowTxt">
        <h1>stara Gartda</h1>
        </div>
      </div>
    </div>
  )
}

export default FooterBlock