import React, { useState, createContext, useCallback, useEffect } from "react";

import createField from "./createField";
import createPiece from "./createPiece";
import formView from "./formView";

export const GameContext = createContext();

export const GameProvider = (props) => {
    const [gameState, setGameState] = useState("menu");
    const [fieldSize, setFieldSize] = useState([4, 4]);
    const initialField = createField(fieldSize);
    const [field, setField] = useState(initialField);
    const initialPieces = [];
    const [pieces, setPieces] = useState(initialPieces);

    const crtPiece = () => {
        createPiece(field, setField, pieces, setPieces);
    };

    useEffect(() => {
        formView(fieldSize, setField, field, pieces);
    }, [pieces]);

    return (
        <GameContext.Provider
            value={{
                field: field,
                setField: setField,
                gameState: gameState,
                crtPiece: crtPiece,
            }}>
            {props.children}
        </GameContext.Provider>
    );
};
