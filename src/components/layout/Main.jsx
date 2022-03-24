import React, { useContext } from "react";
import { GameContext } from "../game/GameContext.jsx";

import { IconContext } from "react-icons/lib";
import { IoReload } from "react-icons/io5";

import Piece from "./Piece.jsx";

function Main() {
    const { field, gameState, crtPiece } = useContext(GameContext);

    return (
        <main className="main">
            <div className="info-container">
                <h1 className="title">2048</h1>
                <div className="score-container">
                    <p className="score__text">Score</p>
                    <p className="score__number">21332</p>
                </div>
                <div className="score-container">
                    <p className="score__text">Best</p>
                    <p className="score__number">0</p>
                </div>
            </div>
            <div className="field">{field.map((row, y) => row.map((number, x) => <Piece number={number} />))}</div>
            <div className="nav-container">
                <button onClick={crtPiece} className="nav__res-btn">
                    <IconContext.Provider value={{ className: "nav__res-btn-icon" }}>
                        <IoReload />
                    </IconContext.Provider>
                </button>
                <button className="nav__menu-btn">Menu</button>
            </div>
        </main>
    );
}

export default Main;
