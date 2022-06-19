function checkFieldFullness(pieces, fieldSize, setGameState) {
    if (pieces.length === fieldSize * fieldSize) {
        let isFieldFull = false;

        pieces.forEach((piece) => {
            if (piece.x !== 0 && piece.y !== 0 && piece.x !== fieldSize - 1 && piece.y !== fieldSize - 1) {
                if (pieces.findIndex((element) => piece.x === element.x && piece.y === element.y + 1 && piece.number === element.number)) {
                    isFieldFull = true;
                }
                if (pieces.findIndex((element) => piece.x === element.x && piece.y === element.y + 1 && piece.number === element.number)) {
                    isFieldFull = true;
                }
                if (pieces.findIndex((element) => piece.x === element.x + 1 && piece.y === element.y && piece.number === element.number)) {
                    isFieldFull = true;
                }
                if (pieces.findIndex((element) => piece.x === element.x && piece.y === element.y - 1 && piece.number === element.number)) {
                    isFieldFull = true;
                }
                if (pieces.findIndex((element) => piece.x === element.x - 1 && piece.y === element.y && piece.number === element.number)) {
                    isFieldFull = true;
                }
            }
        });

        if (isFieldFull) {
            setGameState("end");
        }
    }
}

export default checkFieldFullness;
