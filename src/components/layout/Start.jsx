import { useContext, useState, useCallback, useEffect } from "react";
import { GameContext } from "../game/GameContext.jsx";
import { IconContext } from "react-icons";
import { BsPlayCircle } from "react-icons/bs";

import FieldSizeButton from "./FieldSizeButton.jsx";

const initialFieldSizeButtons = [
    { name: "3x3", value: 3, active: false },
    { name: "4x4", value: 4, active: false },
    { name: "5x5", value: 5, active: false },
];

function Start() {
    const { setGameState, fieldSize } = useContext(GameContext);
    const [fieldSizeButtons, setFieldSizeButtons] = useState(initialFieldSizeButtons);

    useEffect(() => {
        const buttonIndex = fieldSizeButtons.findIndex((button) => button.value === fieldSize);
        const newButtons = [...initialFieldSizeButtons];
        const newButton = { ...newButtons[buttonIndex], active: true };
        newButtons.splice(buttonIndex, 1, newButton);
        setFieldSizeButtons(newButtons);
    }, [fieldSize]);

    const handleStartGame = () => {
        setGameState("game");
    };

    return (
        <section className="start">
            <h1 className="title">2048</h1>
            <button onClick={handleStartGame}>
                <IconContext.Provider value={{ className: "start__icon" }}>
                    <BsPlayCircle />
                </IconContext.Provider>
            </button>

            <div className="start__fieldsize">
                <div className="start__buttons-container">
                    {fieldSizeButtons.map((button, buttonIndex) => (
                        <FieldSizeButton className="start__button" key={buttonIndex} button={button} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Start;
