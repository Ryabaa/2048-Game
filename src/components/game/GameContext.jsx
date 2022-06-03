import React, { useState, createContext, useEffect } from "react";

import createPiece from "./createPiece";
import formView from "./formView";
import handleKeyPress from "./handleKeyPress";
import movePiece from "./movePiece";

import createField from "../../utils/createField";

export const GameContext = createContext();

const initialGameState = "game";
const initialFieldSize = 4;
const initialPieces = [];
const initialMoveDirection = "";
const initialField = [];

export const GameProvider = (props) => {
    const [gameState, setGameState] = useState(initialGameState);
    const [fieldSize, setFieldSize] = useState(initialFieldSize);
    const [pieces, setPieces] = useState(initialPieces);
    const [moveDirection, setMoveDirection] = useState(initialMoveDirection);
    const [field, setField] = useState(initialField);

    const handleCreatePiece = () => {
        createPiece(fieldSize, pieces, setPieces);
    };

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
                gameState: gameState,
                handleCreatePiece: handleCreatePiece,
            }}>
            {props.children}
        </GameContext.Provider>
    );
};
