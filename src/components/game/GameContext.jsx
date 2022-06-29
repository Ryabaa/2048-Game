import { useState, createContext, useEffect } from "react";

import createField from "./createField";
import createPiece from "./createPiece";
import movePiece from "./movePiece";
import changeMoveDirection from "./changeMoveDirection";
import formView from "./formView";
import checkFieldFullness from "./checkFieldFullness";

import deepCopy from "../../utils/deepCopy";
import getLocalStorage from "../../utils/getLocalStorage";
import setLocalStorage from "../../utils/setLocalStorage";

export const GameContext = createContext();

const initialGameState = "start";
const initialFieldSize = 4;
const initialField = [];
const initialPieces = [];
const initialPrevPieces = [];
const initialMoveDirection = "";
const initialScore = 0;
const initialBestScoresData = { 3: 0, 4: 0, 5: 0 };

export const GameProvider = (props) => {
    const [gameState, setGameState] = useState(initialGameState);
    const [fieldSize, setFieldSize] = useState(initialFieldSize);
    const [field, setField] = useState(initialField);
    const [pieces, setPieces] = useState(initialPieces);
    const [prevPieces, setPrevPieces] = useState(initialPrevPieces);
    const [moveDirection, setMoveDirection] = useState(initialMoveDirection);
    const [score, setScore] = useState(initialScore);
    const [bestScoresData, setBestScoresData] = useState(initialBestScoresData);

    const resetGame = () => {
        setPieces(initialPieces);
        setPrevPieces(initialPrevPieces);
        setScore(initialScore);
    };

    const handleKeyPress = (event) => {
        changeMoveDirection(event, setMoveDirection);
    };

    // Create game field and first piece
    useEffect(() => {
        if (gameState === "game" && pieces.length === 0) {
            createField(fieldSize);
            createPiece(fieldSize, pieces, setPieces);
        }
    }, [gameState, pieces, createField, createPiece]);

    // Key press listener
    useEffect(() => {
        if (gameState === "game") {
            window.addEventListener("keydown", handleKeyPress);
            return () => {
                window.removeEventListener("keydown", handleKeyPress);
            };
        }
    }, [gameState, changeMoveDirection]);

    // Pieces saving and movement
    useEffect(() => {
        if (gameState === "game" && moveDirection !== "") {
            movePiece(moveDirection, setMoveDirection, pieces, setPieces, fieldSize, score, setScore, setPrevPieces);
            setPrevPieces(deepCopy(pieces));
        }
    }, [moveDirection, movePiece, pieces]);

    // Pieces rendering
    useEffect(() => {
        formView(fieldSize, setField, pieces);
        checkFieldFullness(pieces, fieldSize, setGameState);
    }, [pieces, formView, checkFieldFullness]);

    // Save best score to local storage
    useEffect(() => {
        if (score > bestScoresData[fieldSize]) {
            const newScoresData = { ...bestScoresData, [fieldSize]: score };
            setLocalStorage("bestScoresData", JSON.stringify(newScoresData));
        }
    }, [score, setLocalStorage]);

    // Get best score from local storage
    useEffect(() => {
        if (gameState !== "end") {
            const storageScoresData = JSON.parse(getLocalStorage("bestScoresData"));
            if (storageScoresData) {
                setBestScoresData(storageScoresData);
            }
        }
    }, [gameState, score, setBestScoresData, getLocalStorage]);

    return (
        <GameContext.Provider
            value={{
                field: field,
                pieces: pieces,
                setPieces: setPieces,
                prevPieces: prevPieces,
                setPrevPieces: setPrevPieces,
                setField: setField,
                fieldSize: fieldSize,
                setFieldSize: setFieldSize,
                gameState: gameState,
                setGameState: setGameState,
                score: score,
                bestScore: bestScoresData[fieldSize],
                bestScoresData: bestScoresData,
                resetGame: resetGame,
            }}>
            {props.children}
        </GameContext.Provider>
    );
};
