import { useContext } from "react";
import { GameContext } from "../game/GameContext.jsx";

import Piece from "./Piece.jsx";
import Score from "./Score.jsx";
import Nav from "./Nav.jsx";
import End from "./End.jsx";

function Game() {
    const { field, fieldSize, gameState } = useContext(GameContext);

    return (
        <section className="game">
            {gameState === "end" && <End />}
            <div className="info">
                <h1 className="title">2048</h1>
                <Score />
            </div>
            <div style={{ "--field-size": fieldSize }} className="field">
                {field.map((row, y) => row.map((pieceNumber, x) => <Piece key={`${y}-${x}`} pieceNumber={pieceNumber} field={field} />))}
            </div>
            <Nav />
        </section>
    );
}

export default Game;
