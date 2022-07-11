import pieceColors from "../game/pieceColors";

function Piece({ pieceNumber }) {
    return (
        <div className="field__piece" style={{ background: pieceColors[pieceNumber] }}>
            {pieceNumber ? pieceNumber : ""}
        </div>
    );
}

export default Piece;
