import { IconContext } from "react-icons/lib";
import { FaCoffee } from "react-icons/fa";

function Header() {
    const title = "< 2048 Game />";

    return (
        <header className="header">
            <h1 className="header__title">{title}</h1>
            <IconContext.Provider value={{ className: "header__icon" }}>
                <FaCoffee />
            </IconContext.Provider>
        </header>
    );
}

export default Header;
