import "../style/HeaderStyle.css";

import LogoHeader from "./LogoHeader";
import NaviBarHeader from "./NaviBarHeader";

function Header(): JSX.Element {
    return (
        <div className="header">
            <div className="headerCont">
                <div className="headerComponent LogoBlock">
                    <LogoHeader /> 
                </div>
                <div className="headerComponent NaviBlock">
                    <NaviBarHeader />
                </div>
            </div>
        </div>
    )
};

export default Header;


