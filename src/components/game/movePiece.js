import createPiece from "./createPiece";

function movePiece(moveDirection, setMoveDirection, pieces, setPieces, fieldSize, score, setScore) {
    let piecesMoved = false;

    const moveFunction = (piece, count, nextPieceIndex, verticalDirection) => {
        const nextPiece = pieces[nextPieceIndex];
        if (nextPieceIndex !== -1) {
            if (nextPiece.number !== piece.number) {
                return;
            }
            pieces.splice(nextPieceIndex, 1);
            piece.number *= 2;
            setScore((score += piece.number));
        }
        verticalDirection ? (piece.y = count) : (piece.x = count);
        piecesMoved = true;
    };

    switch (moveDirection) {
        case "up":
            pieces.forEach((piece, pieceIndex) => {
                for (let count = piece.y; count >= 0; count--) {
                    const nextPieceIndex = pieces.findIndex((element) => piece.x === element.x && piece.y - 1 === element.y);
                    if (piece.y === 0) return;
                    moveFunction(piece, count, nextPieceIndex, true);
                }
            });
            break;
        case "left":
            pieces.forEach((piece, pieceIndex) => {
                for (let count = piece.x; count >= 0; count--) {
                    const nextPieceIndex = pieces.findIndex((element) => piece.x - 1 === element.x && piece.y === element.y);
                    if (piece.x === 0) return;
                    moveFunction(piece, count, nextPieceIndex, false);
                }
            });
            break;
        case "down":
            pieces.forEach((piece, pieceIndex) => {
                for (let count = piece.y; count < fieldSize; count++) {
                    const nextPieceIndex = pieces.findIndex((element) => piece.x === element.x && piece.y + 1 === element.y);
                    if (piece.y === fieldSize - 1) return;
                    moveFunction(piece, count, nextPieceIndex, true);
                }
            });
            break;
        case "right":
            pieces.forEach((piece, pieceIndex) => {
                for (let count = piece.x; count < fieldSize; count++) {
                    const nextPieceIndex = pieces.findIndex((element) => piece.x + 1 === element.x && piece.y === element.y);
                    if (piece.x === fieldSize - 1) return;
                    moveFunction(piece, count, nextPieceIndex, false);
                }
            });
            break;
        default:
            break;
    }

    if (piecesMoved) {
        setPieces(pieces);
        createPiece(fieldSize, pieces, setPieces);
    }

    setMoveDirection("");

    return;
}

export default movePiece;
