import createPiece from "./createPiece";

function movePiece(moveDirection, setMoveDirection, pieces, setPieces, fieldSize) {
    if (moveDirection !== "") {
        let newPieces = pieces;
        //const nextPieceIndex = newPieces.findIndex((element) => piece.x === element.x && piece.y === element.y + 1);

        switch (moveDirection) {
            case "up":
                newPieces.forEach((piece, pieceIndex) => {
                    for (let count = fieldSize - 1; count >= 0; count--) {
                        const newPiece = { y: count, x: piece.x, number: piece.number };
                        newPieces.splice(pieceIndex, 1, newPiece);
                    }
                });
                break;
            case "left":
                newPieces.forEach((piece, pieceIndex) => {
                    for (let count = fieldSize - 1; count >= 0; count--) {
                        const newPiece = { y: piece.y, x: count, number: piece.number };
                        newPieces.splice(pieceIndex, 1, newPiece);
                    }
                });
                break;
            case "down":
                newPieces.forEach((piece, pieceIndex) => {
                    for (let count = piece.y; count < fieldSize; count++) {
                        const newPiece = { y: count, x: piece.x, number: piece.number };
                        newPieces.splice(pieceIndex, 1, newPiece);
                    }
                });
                break;
            case "right":
                newPieces.forEach((piece, pieceIndex) => {
                    for (let count = piece.x; count < fieldSize; count++) {
                        const newPiece = { y: piece.y, x: count, number: piece.number };
                        newPieces.splice(pieceIndex, 1, newPiece);
                    }
                });
                break;

            default:
                break;
        }

        setPieces(newPieces);
        setMoveDirection("");
        createPiece(fieldSize, pieces, setPieces);
    }
    return;
}

export default movePiece;
