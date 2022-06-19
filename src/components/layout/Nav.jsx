import { IconContext } from "react-icons/lib";
import { RiArrowGoBackLine } from "react-icons/ri";
import { CgMenu } from "react-icons/cg";
import { VscDebugRestart } from "react-icons/vsc";

function Nav() {
    return (
        <div className="nav-container">
            <button className="nav__button">
                <IconContext.Provider value={{ className: "nav__button-icon" }}>
                    <RiArrowGoBackLine />
                </IconContext.Provider>
                <p>Back</p>
            </button>
            <button className="nav__button">
                <IconContext.Provider value={{ className: "nav__button-icon" }}>
                    <CgMenu />
                </IconContext.Provider>
                <p>Menu</p>
            </button>
            <button className="nav__button">
                <IconContext.Provider value={{ className: "nav__button-icon" }}>
                    <VscDebugRestart />
                </IconContext.Provider>
                <p>Restart</p>
            </button>
        </div>
    );
}

export default Nav;
