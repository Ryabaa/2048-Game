import createPiece from "./createPiece";

function movePiece(moveDirection, setMoveDirection, pieces, setPieces, fieldSize) {
    if (moveDirection !== "") {
        let newPieces = pieces;
        let piecesMoved = false;

        const moveFunction = (piece, count, nextPieceIndex, verticalDirection) => {
            const nextPiece = newPieces[nextPieceIndex];

            if (nextPieceIndex !== -1) {
                if (nextPiece.number !== piece.number) return;
                newPieces.splice(nextPieceIndex, 1);
                piece.number *= 2;
            }

            switch (moveDirection) {
                case "up":
                    if (piece.y === 0) return;
                    break;
                case "left":
                    if (piece.x === 0) return;
                    break;
                case "down":
                    if (piece.y === fieldSize) return;
                    break;
                case "right":
                    if (piece.x === fieldSize) return;
                    break;
                default:
                    break;
            }

            verticalDirection ? (piece.y = count) : (piece.x = count);
            piecesMoved = true;
        };

        switch (moveDirection) {
            case "up":
                newPieces.forEach((piece, pieceIndex) => {
                    for (let count = piece.y; count >= 0; count--) {
                        const nextPieceIndex = newPieces.findIndex((element) => piece.x === element.x && piece.y === element.y + 1);
                        moveFunction(piece, count, nextPieceIndex, true);
                    }
                });
                break;
            case "left":
                newPieces.forEach((piece, pieceIndex) => {
                    for (let count = piece.x; count >= 0; count--) {
                        const nextPieceIndex = newPieces.findIndex((element) => piece.x === element.x + 1 && piece.y === element.y);
                        moveFunction(piece, count, nextPieceIndex, false);
                    }
                });
                break;
            case "down":
                newPieces.forEach((piece, pieceIndex) => {
                    for (let count = piece.y; count < fieldSize; count++) {
                        const nextPieceIndex = newPieces.findIndex((element) => piece.x === element.x && piece.y === element.y - 1);
                        moveFunction(piece, count, nextPieceIndex, true);
                    }
                });
                break;
            case "right":
                newPieces.forEach((piece, pieceIndex) => {
                    for (let count = piece.x; count < fieldSize; count++) {
                        const nextPieceIndex = newPieces.findIndex((element) => piece.x === element.x - 1 && piece.y === element.y);
                        moveFunction(piece, count, nextPieceIndex, false);
                    }
                });
                break;
            default:
                break;
        }

        setPieces(newPieces);
        setMoveDirection("");

        if (piecesMoved) createPiece(fieldSize, pieces, setPieces);
    }
    return;
}

export default movePiece;
