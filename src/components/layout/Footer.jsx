import { IconContext } from "react-icons/lib";
import { BsSuitHeartFill } from "react-icons/bs";
import frog from "../../img/frog.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer__text">Made by</p>
                <img className="footer__img" src={frog} alt="" />
            </div>
            <IconContext.Provider value={{ className: "footer__icon" }}>
                <BsSuitHeartFill />
            </IconContext.Provider>
        </footer>
    );
}

export default Footer;
