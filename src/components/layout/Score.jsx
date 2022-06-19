import { useContext } from "react";
import { GameContext } from "../game/GameContext.jsx";

function Score() {
    const { score, bestScore } = useContext(GameContext);

    return (
        <div className="score">
            <div className="score-container">
                <p className="score__text">Score</p>
                <div className="line"></div>
                <p className="score__number">{score}</p>
            </div>
            <div className="score-container">
                <p className="score__text">Best</p>
                <div className="line"></div>
                <p className="score__number">{bestScore}</p>
            </div>
        </div>
    );
}

export default Score;
