import getRandom from "../../utils/getRandom";

function createPiece(fieldSize, pieces, setPieces) {
    const getData = () => {
        const newPiece = {
            y: getRandom(fieldSize, null),
            x: getRandom(fieldSize, null),
            number: getRandom(null, [2, 4]),
        };

        if (pieces !== []) {
            const pieceIndex = pieces.findIndex((piece) => piece.x === newPiece.x && piece.y === newPiece.y);
            if (pieceIndex !== -1) {
                getData();
            } else {
                setPieces([...pieces, newPiece]);
            }
        }

        return;
    };
    getData();
}

export default createPiece;
