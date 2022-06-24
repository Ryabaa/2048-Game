import { useContext } from "react";
import { GameContext } from "../game/GameContext.jsx";

import { IconContext } from "react-icons/lib";
import { RiArrowGoBackLine } from "react-icons/ri";
import { CgMenu } from "react-icons/cg";
import { VscDebugRestart } from "react-icons/vsc";

function Nav() {
    const { setGameState, resetGame } = useContext(GameContext);

    const handleMoveBack = () => {};

    const handleOpenMenu = () => {
        setGameState("start");
        resetGame();
    };

    const handleRestartGame = () => {
        resetGame();
    };

    return (
        <div className="nav-container">
            <button onClick={handleMoveBack} className="nav__button">
                <IconContext.Provider value={{ className: "nav__button-icon" }}>
                    <RiArrowGoBackLine />
                </IconContext.Provider>
                <p className="nav__button-text">Back</p>
            </button>
            <button onClick={handleOpenMenu} className="nav__button">
                <IconContext.Provider value={{ className: "nav__button-icon" }}>
                    <CgMenu />
                </IconContext.Provider>
                <p className="nav__button-text">Menu</p>
            </button>
            <button onClick={handleRestartGame} className="nav__button">
                <IconContext.Provider value={{ className: "nav__button-icon" }}>
                    <VscDebugRestart />
                </IconContext.Provider>
                <p className="nav__button-text">Restart</p>
            </button>
        </div>
    );
}

export default Nav;
