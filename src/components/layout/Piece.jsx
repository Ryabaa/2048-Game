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
        <div className="field__piece" style={number === 0 ? {} : { background: colorState, boxShadow: `0px 1px 50px ${colorState + 50}` }}>
            {number === 0 ? "" : number}
        </div>
    );
}

export default Piece;
