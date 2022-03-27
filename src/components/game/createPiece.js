import getRandom from "../../utils/getRandom";

function createPiece(field, setField, pieces, setPieces) {
    const randRow = getRandom(field.length);
    const randPiece = getRandom(field[0].length);
    const randNumber = getRandom(2);

    try {
        if (field[randRow][randPiece] === 0) {
            console.log(randNumber);
            setPieces([
                ...pieces,
                {
                    y: randRow,
                    x: randPiece,
                    number: randNumber === 0 ? 2 : 4,
                },
            ]);
        } else {
            createPiece(field, setField, pieces, setPieces);
        }
    } catch {
        return;
    }
}

export default createPiece;
