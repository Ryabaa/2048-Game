import createPiece from "./createPiece";

function movePiece(moveDirection, setMoveDirection, pieces, setPieces, fieldSize) {
    if (moveDirection !== "") {
        let newPieces = pieces;

        switch (moveDirection) {
            case "up":
                newPieces.forEach((piece, pieceIndex) => {
                    for (let count = piece.y; count >= 0; count--) {
                        const nextPieceIndex = newPieces.findIndex((element) => piece.x === element.x && piece.y === element.y + 1);
                        const nextPiece = newPieces[nextPieceIndex];

                        if (nextPieceIndex !== -1) {
                            if (nextPiece.number !== piece.number) break;
                            piece.number *= 2;
                            newPieces.splice(nextPieceIndex, 1);
                        }

                        piece.y = count;
                    }
                });
                break;
            case "left":
                newPieces.forEach((piece, pieceIndex) => {
                    for (let count = piece.x; count >= 0; count--) {
                        const nextPieceIndex = newPieces.findIndex((element) => piece.x === element.x + 1 && piece.y === element.y);
                        const nextPiece = newPieces[nextPieceIndex];

                        if (nextPieceIndex !== -1) {
                            if (nextPiece.number !== piece.number) break;
                            piece.number *= 2;
                            newPieces.splice(nextPieceIndex, 1);
                        }

                        piece.x = count;
                    }
                });
                break;
            case "down":
                newPieces.forEach((piece, pieceIndex) => {
                    for (let count = piece.y; count < fieldSize; count++) {
                        const nextPieceIndex = newPieces.findIndex((element) => piece.x === element.x && piece.y === element.y - 1);
                        const nextPiece = newPieces[nextPieceIndex];

                        if (nextPieceIndex !== -1) {
                            if (nextPiece.number !== piece.number) break;
                            piece.number *= 2;
                            newPieces.splice(nextPieceIndex, 1);
                        }

                        piece.y = count;
                    }
                });
                break;
            case "right":
                newPieces.forEach((piece, pieceIndex) => {
                    for (let count = piece.x; count < fieldSize; count++) {
                        const nextPieceIndex = newPieces.findIndex((element) => piece.x === element.x - 1 && piece.y === element.y);
                        const nextPiece = newPieces[nextPieceIndex];

                        if (nextPieceIndex !== -1) {
                            if (nextPiece.number !== piece.number) break;
                            piece.number *= 2;
                            newPieces.splice(nextPieceIndex, 1);
                        }

                        piece.x = count;
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
