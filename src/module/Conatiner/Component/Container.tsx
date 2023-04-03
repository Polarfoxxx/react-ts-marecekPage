
import { Props } from "../type";
import "../style/container.style.css"


const Container: React.FC<Props> = ({ children }) => {
    return(
        <div className="container">
            {children}
        </div>
    )
};

export default Container;