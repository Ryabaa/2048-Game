import { useState, createContext, useEffect } from "react";

import createField from "../../utils/createField";
import createPiece from "./createPiece";
import movePiece from "./movePiece";
import handleKeyPress from "./handleKeyPress";
import formView from "./formView";
import checkFieldFullness from "./checkFieldFullness";

export const GameContext = createContext();

const initialGameState = "start";
const initialFieldSize = 4;
const initialField = [];
const initialPieces = [];
const initialMoveDirection = "";
const initialScore = 0;
const initialBestScore = 0;

export const GameProvider = (props) => {
    const [gameState, setGameState] = useState(initialGameState);
    const [fieldSize, setFieldSize] = useState(initialFieldSize);
    const [field, setField] = useState(initialField);
    const [pieces, setPieces] = useState(initialPieces);
    const [moveDirection, setMoveDirection] = useState(initialMoveDirection);
    const [score, setScore] = useState(initialScore);
    const [bestScore, setBestScore] = useState(initialBestScore);

    useEffect(() => {
        movePiece(moveDirection, setMoveDirection, pieces, setPieces, fieldSize, score, setScore);
        formView(fieldSize, setField, pieces);
        checkFieldFullness(pieces, fieldSize, setGameState);
    }, [moveDirection, pieces]);

    useEffect(() => {
        if (gameState === "game") {
            createField(fieldSize);
            createPiece(fieldSize, pieces, setPieces);
            window.addEventListener("keydown", (event) => handleKeyPress(event, setMoveDirection));
            return () => {
                window.removeEventListener("keydown", (event) => handleKeyPress(event, setMoveDirection));
            };
        }
    }, [gameState]);

    useEffect(() => {
        if (gameState === "end" && score > bestScore) {
            localStorage.setItem("bestScore", score);
        }
    }, [gameState]);

    useEffect(() => {
        const getBestScore = localStorage.getItem("bestScore");

        if (getBestScore) {
            setBestScore(Number(getBestScore));
        }
    });

    return (
        <GameContext.Provider
            value={{
                field: field,
                setField: setField,
                fieldSize: fieldSize,
                setFieldSize: setFieldSize,
                gameState: gameState,
                setGameState: setGameState,
                score: score,
                bestScore: bestScore,
            }}>
            {props.children}
        </GameContext.Provider>
    );
};
