import { useContext } from "react";
import { GameContext } from "../game/GameContext.jsx";

function FieldSizeButton({ button, buttonIndex, editButton }) {
    const { setFieldSize, bestScoresData } = useContext(GameContext);
    let { name, value, active } = button;

    const handleChangeFieldSize = () => {
        editButton({ ...button, active: true }, buttonIndex);
        setFieldSize(value);
    };

    return (
        <button className={active ? "start__button start__button--active" : "start__button"} onClick={handleChangeFieldSize}>
            <p className="start__button-text">{name}</p>
            <div className="start__button-info">
                <p className="start__button-info-text">Best</p>
                <p className="start__button-score">{bestScoresData[value]}</p>
            </div>
        </button>
    );
}

export default FieldSizeButton;
