import React, { useState, createContext, useReducer, useEffect } from "react";
import createField from "../../utils/createField";

export const GameContext = createContext();

export const GameProvider = (props) => {
    const [gameState, setGameState] = useState("menu");
    const [fieldSize, setFieldSize] = useState([4, 4]);
    const initialField = createField(fieldSize);
    const [field, setField] = useState(initialField);

    return (
        <GameContext.Provider
            value={{
                gameState: gameState,
                field: field,
            }}>
            {props.children}
        </GameContext.Provider>
    );
};
