function createField(fieldSize) {
    let row = Array.apply(null, Array(fieldSize[0])).map(() => 0);
    let field = Array.apply(null, Array(fieldSize[1])).map(() => [...row]);

    return field;
}

export default createField;
