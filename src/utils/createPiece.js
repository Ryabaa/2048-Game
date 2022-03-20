function createPiece(field) {
    function getRandom(range) {
        return Math.floor(Math.random() * range);
    }

    const newField = field.map();

    function a() {
        const randIndex = [getRandom(field.length), getRandom(field[0].length)];
        if (field[randIndex[0]][randIndex[1]] === 0) {
            newField
        }
    }

    const randNumber = getRandom(1);
    const randPieceNumber = null;
    if (randNumber === 0) {
        randPieceNumber = 2;
    } else {
        randPieceNumber = 4;
    }

    return newField;
}

export default createPiece;
