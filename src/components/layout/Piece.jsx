import { useEffect, useState } from "react";

import pieceColors from "../../utils/colors";

function Piece({ number }) {
    const [colorState, setColorState] = useState("");

    useEffect(() => {
        pieceColors.forEach((i) => {
            if (number === i.number) setColorState(i.color);
        });
    });

    return (
        <div className="field__piece" style={{ background: colorState }}>
            {number == 0 ? "" : number}
        </div>
    );
}

export default Piece;
