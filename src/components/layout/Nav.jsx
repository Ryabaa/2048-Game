import { useContext, useEffect, useState } from "react";
import { GameContext } from "../game/GameContext.jsx";

import createPiece from "../game/createPiece";

import { IconContext } from "react-icons/lib";
import { RiArrowGoBackLine } from "react-icons/ri";
import { CgMenu } from "react-icons/cg";
import { VscDebugRestart } from "react-icons/vsc";

const initialMoveBackActive = false;

function Nav() {
    const { setGameState, resetGame, setPieces, prevPieces, setPrevPieces } = useContext(GameContext);

    const [moveBackActive, setMoveBackActive] = useState(initialMoveBackActive);

    useEffect(() => {
        if (prevPieces.length !== 0) {
            setMoveBackActive(true);
        } else {
            setMoveBackActive(false);
        }
    }, [prevPieces, setMoveBackActive]);

    const handleMoveBack = () => {
        if (moveBackActive) {
            setGameState("game");
            setPieces(prevPieces);
            setPrevPieces([]);
        }
    };

    const handleOpenMenu = () => {
        setGameState("start");
        resetGame();
    };

    const handleRestartGame = () => {
        resetGame();
        setGameState("game");
    };

    return (
        <div className="nav-container">
            <button onClick={handleMoveBack} className={moveBackActive ? "nav__button nav__button--active" : "nav__button"}>
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
