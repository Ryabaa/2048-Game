import { useState, createContext, useEffect } from "react";

import createField from "../../utils/createField";
import createPiece from "./createPiece";
import movePiece from "./movePiece";
import handleKeyPress from "./handleKeyPress";
import formView from "./formView";

export const GameContext = createContext();

const initialGameState = "start";
const initialFieldSize = 4;
const initialField = [];
const initialPieces = [];
const initialMoveDirection = "";

export const GameProvider = (props) => {
    const [gameState, setGameState] = useState(initialGameState);
    const [fieldSize, setFieldSize] = useState(initialFieldSize);
    const [field, setField] = useState(initialField);
    const [pieces, setPieces] = useState(initialPieces);
    const [moveDirection, setMoveDirection] = useState(initialMoveDirection);

    useEffect(() => {
        movePiece(moveDirection, setMoveDirection, pieces, setPieces, fieldSize);
        formView(fieldSize, setField, pieces);
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

    return (
        <GameContext.Provider
            value={{
                field: field,
                setField: setField,
                fieldSize: fieldSize,
                setFieldSize: setFieldSize,
                gameState: gameState,
                setGameState: setGameState,
            }}>
            {props.children}
        </GameContext.Provider>
    );
};
