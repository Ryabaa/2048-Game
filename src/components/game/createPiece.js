import getRandom from "../../utils/getRandom";

function createPiece(field, setField) {
    const randRow = getRandom(field.length);
    const randPiece = getRandom(field[0].length);
    if (field[randRow][randPiece] === 0) {
        field[randRow].splice(randPiece, 1, 2);
        setField(field);
    } else {
        createPiece(field, setField);
    }
}

export default createPiece;
