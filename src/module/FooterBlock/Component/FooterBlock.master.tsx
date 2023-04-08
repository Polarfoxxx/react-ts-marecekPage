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
      <div className="footerContact">

      </div>
      <div className="footerInstagram">

      </div>
    </div>
  )
}

export default FooterBlock