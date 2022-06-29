import { useState, useEffect } from "react";

import pieceColors from "../game/pieceColors";

const initialPieceColor = "";
const initialPieceValue = "";

function Piece({ pieceNumber, field }) {
    const [pieceColor, setPieceColor] = useState(initialPieceColor);
    const [pieceValue, setPieceValue] = useState(initialPieceValue);

    useEffect(() => {
        pieceColors.forEach((color) => {
            if (pieceNumber === color.number) {
                setPieceColor(color.value);
            }
        });
    }, [field]);

    useEffect(() => {
        if (pieceNumber !== 0) {
            setPieceValue(pieceNumber);
        } else {
            setPieceValue(initialPieceValue);
        }
    }, [field]);

    return (
        <div className="field__piece" style={{ background: pieceColor }}>
            {pieceValue}
        </div>
    );
}

export default Piece;
