import { useContext } from "react";
import { GameContext } from "../game/GameContext.jsx";

import { IconContext } from "react-icons/lib";
import { RiArrowGoBackLine } from "react-icons/ri";
import { CgMenu } from "react-icons/cg";
import { VscDebugRestart } from "react-icons/vsc";

import Piece from "./Piece.jsx";

function Game() {
    const { field, fieldSize } = useContext(GameContext);

    return (
        <main className="main">
            <div className="info-container">
                <h1 className="title">2048</h1>
                <div className="score">
                    <div className="score-container">
                        <p className="score__text">Score</p>
                        <p className="score__number">666</p>
                    </div>
                    <div className="score-container">
                        <p className="score__text">Best</p>
                        <p className="score__number">777</p>
                    </div>
                </div>
            </div>
            <div style={{ "--field-size": fieldSize }} className="field">
                {field.map((row, y) => row.map((number, x) => <Piece key={`${y}-${x}`} number={number} />))}
            </div>
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
        </main>
    );
}

export default Game;
