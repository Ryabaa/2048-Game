function movePiece(moveDirection, pieces, setPieces) {
    let newPieces = pieces;
    console.log("old - ", newPieces);

    switch (moveDirection) {
        case "up":
            break;
        case "left":
            break;
        case "down":
            newPieces.forEach((piece, pieceIndex) => {
                const nextPieceIndex = pieces.findIndex((element) => piece.x === element.x && piece.y === element.y + 1);
                for (let count = piece.y; count < 4; count++) {
                    console.log(1);
                    const newPiece = { y: count, x: piece.x, number: piece.number };
                    newPieces.splice(pieceIndex, 1, newPiece);
                }
            });
            console.log("new - ", newPieces);
            break;
        case "right":
            break;

        default:
            break;
    }

    setPieces(newPieces);
    return;
}

export default movePiece;
