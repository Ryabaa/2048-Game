function createField(fieldSize) {
    const row = Array.apply(null, Array(fieldSize)).map(() => 0);
    const field = Array.apply(null, Array(fieldSize)).map(() => [...row]);

    return field;
}

export default createField;
