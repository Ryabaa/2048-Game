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
const initialBestScoresData = { 3: 0, 4: 0, 5: 0 };

export const GameProvider = (props) => {
    const [gameState, setGameState] = useState(initialGameState);
    const [fieldSize, setFieldSize] = useState(initialFieldSize);
    const [field, setField] = useState(initialField);
    const [pieces, setPieces] = useState(initialPieces);
    const [moveDirection, setMoveDirection] = useState(initialMoveDirection);
    const [score, setScore] = useState(initialScore);
    const [bestScoresData, setBestScoresData] = useState(initialBestScoresData);

    useEffect(() => {
        if (gameState === "game") {
            movePiece(moveDirection, setMoveDirection, pieces, setPieces, fieldSize, score, setScore);
            formView(fieldSize, setField, pieces);
            checkFieldFullness(pieces, fieldSize, setGameState);
        }
    }, [moveDirection, pieces, movePiece, formView, checkFieldFullness]);

    useEffect(() => {
        if (gameState === "game") {
            createField(fieldSize);
            createPiece(fieldSize, pieces, setPieces);
            window.addEventListener("keydown", (event) => handleKeyPress(event, setMoveDirection));
            return () => {
                window.removeEventListener("keydown", (event) => handleKeyPress(event, setMoveDirection));
            };
        }
    }, [gameState, createField, createPiece, handleKeyPress]);

    useEffect(() => {
        if (gameState === "end" && score > bestScoresData[fieldSize]) {
            const newScoresData = { ...bestScoresData, [fieldSize]: score };
            localStorage.setItem("bestScoresData", JSON.stringify(newScoresData));
        }
    }, [gameState]);

    useEffect(() => {
        const storageScoresData = JSON.parse(localStorage.getItem("bestScoresData"));
        if (storageScoresData) {
            setBestScoresData(storageScoresData);
        }
    }, [setBestScoresData]);

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
                bestScore: bestScoresData[fieldSize],
                bestScoresData: bestScoresData,
            }}>
            {props.children}
        </GameContext.Provider>
    );
};
