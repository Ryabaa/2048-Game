import React, { useState, createContext, useCallback, useEffect } from "react";

import createField from "./createField";
import createPiece from "./createPiece";

export const GameContext = createContext();

export const GameProvider = (props) => {
    const [gameState, setGameState] = useState("menu");
    const [fieldSize, setFieldSize] = useState([4, 4]);
    const initialField = createField(fieldSize);
    const [field, setField] = useState(initialField);

    const crtPiece = () => {
        createPiece(field, setField);
        console.log(field);
    };

    return (
        <GameContext.Provider
            value={{
                gameState: gameState,
                field: field,
                crtPiece: crtPiece,
            }}>
            {props.children}
        </GameContext.Provider>
    );
};
