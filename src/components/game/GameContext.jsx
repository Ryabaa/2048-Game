import { useState, createContext, useEffect } from "react";

import createField from "./createField";
import createPiece from "./createPiece";
import movePieces from "./movePieces";
import keyPressFunction from "./keyPressFunction";
import touchFunction from "./touchFunction";
import touchAction from "./touchAction";
import formView from "./formView";
import checkField from "./checkField";

import getLocalStorage from "../../utils/getLocalStorage";
import setLocalStorage from "../../utils/setLocalStorage";
import deepCopy from "../../utils/deepCopy";

export const GameContext = createContext();

const initialGameState = "start";
const initialFieldSize = 4;
const initialField = [];
const initialPieces = [];
const initialPrevPieces = [];
const initialScore = 0;
const initialPrevScore = 0;
const initialMoveDirection = null;
const initialBestScoresData = { 3: 0, 4: 0, 5: 0 };
const initialTouchPosition = { x: null, y: null };
const initialTouchEnd = false;

export const GameProvider = (props) => {
    const [gameState, setGameState] = useState(initialGameState);
    const [fieldSize, setFieldSize] = useState(initialFieldSize);
    const [field, setField] = useState(initialField);
    const [pieces, setPieces] = useState(initialPieces);
    const [prevPieces, setPrevPieces] = useState(initialPrevPieces);
    const [score, setScore] = useState(initialScore);
    const [prevScore, setPrevScore] = useState(initialPrevScore);
    const [moveDirection, setMoveDirection] = useState(initialMoveDirection);
    const [bestScoresData, setBestScoresData] = useState(initialBestScoresData);
    const [touchStart, setTouchStart] = useState(initialTouchPosition);
    const [touchCurrent, setTouchCurrent] = useState(initialTouchPosition);
    const [touchEnd, setTouchEnd] = useState(initialTouchEnd);

    const handleKeyPress = (event) => {
        keyPressFunction(event, setMoveDirection);
    };

    const handleTouch = (event) => {
        touchFunction(event, setTouchStart, setTouchCurrent, setTouchEnd);
    };

    const resetTouch = () => {
        setTouchStart(initialTouchPosition);
        setTouchCurrent(initialTouchPosition);
        setTouchEnd(initialTouchEnd);
    };

    const resetGame = () => {
        setPieces(initialPieces);
        setPrevScore(initialPrevScore);
        setPrevPieces(initialPrevPieces);
        setScore(initialScore);
    };

    // Create game field and first piece
    useEffect(() => {
        if (gameState === "game" && pieces.length === 0) {
            createField(fieldSize);
            createPiece(fieldSize, pieces, setPieces);
        }
    }, [gameState, pieces, createField, createPiece]);

    // Touch end action
    useEffect(() => {
        if (touchEnd) {
            touchAction(touchStart, touchCurrent, setMoveDirection);
            resetTouch();
        }
    }, [touchEnd, touchAction, resetTouch]);

    // Key press and touch listeners
    useEffect(() => {
        if (gameState === "game") {
            window.addEventListener("keydown", handleKeyPress);
            window.addEventListener("touchstart", handleTouch);
            window.addEventListener("touchmove", handleTouch);
            window.addEventListener("touchend", handleTouch);
            window.addEventListener("mousedown", handleTouch);
            window.addEventListener("mousemove", handleTouch);
            window.addEventListener("mouseup", handleTouch);
            return () => {
                window.removeEventListener("keydown", handleKeyPress);
                window.removeEventListener("touchstart", handleTouch);
                window.removeEventListener("touchmove", handleTouch);
                window.removeEventListener("touchend", handleTouch);
                window.removeEventListener("mousedown", handleTouch);
                window.removeEventListener("mousemove", handleTouch);
                window.removeEventListener("mouseup", handleTouch);
            };
        }
    }, [gameState]);

    // Pieces saving and movement
    useEffect(() => {
        if (gameState === "game" && moveDirection) {
            setPrevScore(score);
            setPrevPieces(deepCopy(pieces));
            movePieces(pieces, setPieces, moveDirection, fieldSize, score, setScore);
            setMoveDirection(initialMoveDirection);
        }
    }, [moveDirection, setMoveDirection, movePieces, pieces, setPrevPieces, setPrevScore, deepCopy]);

    // Pieces rendering
    useEffect(() => {
        formView(fieldSize, setField, pieces);
        checkField(pieces, fieldSize, setGameState);
    }, [pieces, formView, checkField]);

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
                initialPrevPieces: initialPrevPieces,
                setField: setField,
                fieldSize: fieldSize,
                setFieldSize: setFieldSize,
                gameState: gameState,
                setGameState: setGameState,
                score: score,
                setScore: setScore,
                prevScore: prevScore,
                bestScore: bestScoresData[fieldSize],
                bestScoresData: bestScoresData,
                resetGame: resetGame,
            }}>
            {props.children}
        </GameContext.Provider>
    );
};
