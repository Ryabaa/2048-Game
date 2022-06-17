function checkFieldFullness(pieces, fieldSize, setGameState) {
    let nextPieces = [];

    pieces.forEach((piece) => {
        nextPieces.push(pieces.findIndex((element) => piece.x === element.x && piece.y === element.y + 1));
        nextPieces.push(pieces.findIndex((element) => piece.x === element.x + 1 && piece.y === element.y));
        nextPieces.push(pieces.findIndex((element) => piece.x === element.x && piece.y === element.y - 1));
        nextPieces.push(pieces.findIndex((element) => piece.x === element.x - 1 && piece.y === element.y));

        /* if (pieces.length === fieldSize * fieldSize && pieces[leftPieceIndex].number === piece.number) {
            console.log("end");
        } */
    });

    console.log(nextPieces);
}

export default checkFieldFullness;
