import { useContext, useState, useCallback } from "react";
import { GameContext } from "../game/GameContext.jsx";
import { IconContext } from "react-icons";
import { BsPlayCircle } from "react-icons/bs";

import FieldSizeButton from "./FieldSizeButton.jsx";

const initialFieldSizeButtons = [
    { name: "3x3", value: 3, active: false },
    { name: "4x4", value: 4, active: true },
    { name: "5x5", value: 5, active: false },
];

const resetFieldSizeButtons = [
    { name: "3x3", value: 3, active: false },
    { name: "4x4", value: 4, active: false },
    { name: "5x5", value: 5, active: false },
];

function Start() {
    const { setFieldSize, setGameState, bestScoresData } = useContext(GameContext);
    const [fieldSizeButtons, setFieldSizeButtons] = useState(initialFieldSizeButtons);

    const editButton = useCallback(
        (newButton, buttonIndex) => {
            let newButtons = [...resetFieldSizeButtons];
            newButtons.splice(buttonIndex, 1, newButton);
            setFieldSizeButtons(newButtons);
        },
        [fieldSizeButtons]
    );

    const handleStartGame = () => {
        setGameState("game");
    };

    return (
        <section className="start">
            <div className="start__play" onClick={handleStartGame}>
                <p className="start__play-text">Play</p>
                <IconContext.Provider value={{ className: "start__icon" }}>
                    <BsPlayCircle />
                </IconContext.Provider>
            </div>

            <div className="start__fieldsize">
                <p className="start__fieldsize-text">Field Size</p>
                <div className="start__buttons-container">
                    {fieldSizeButtons.map((button, buttonIndex) => (
                        <FieldSizeButton
                            className="start__button"
                            key={buttonIndex}
                            button={button}
                            buttonIndex={buttonIndex}
                            editButton={editButton}
                            setFieldSize={setFieldSize}
                            bestScoresData={bestScoresData}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Start;
