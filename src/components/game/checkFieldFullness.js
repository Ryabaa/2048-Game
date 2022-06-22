function checkFieldFullness(pieces, fieldSize, setGameState) {
    if (pieces.length === fieldSize * fieldSize) {
        let isFieldFull = true;

        pieces.forEach((piece) => {
            if (
                piece.y + 1 !== fieldSize &&
                pieces.findIndex((element) => piece.x === element.x && piece.y + 1 === element.y && piece.number === element.number) !== -1
            ) {
                isFieldFull = false;
            }
            if (
                piece.y - 1 !== -1 &&
                pieces.findIndex((element) => piece.x === element.x && piece.y - 1 === element.y && piece.number === element.number) !== -1
            ) {
                isFieldFull = false;
            }
            if (
                piece.x + 1 !== fieldSize &&
                pieces.findIndex((element) => piece.x + 1 === element.x && piece.y === element.y && piece.number === element.number) !== -1
            ) {
                isFieldFull = false;
            }
            if (
                piece.x - 1 !== -1 &&
                pieces.findIndex((element) => piece.x - 1 === element.x && piece.y === element.y && piece.number === element.number) !== -1
            ) {
                isFieldFull = false;
            }
        });

        if (isFieldFull) {
            setGameState("end");
        }
    }
}

export default checkFieldFullness;
