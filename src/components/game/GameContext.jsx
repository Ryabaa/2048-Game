import React, { useState, createContext, useReducer, useEffect } from "react";

export const GameContext = createContext();

export const GameProvider = (props) => {
    const [gameState, setGameState] = useState("menu");
    const [field, setField] = useState([
        [0, 0],
        [0, 0],
    ]);

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
