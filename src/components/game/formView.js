import createField from "../../utils/createField";

function formView(fieldSize, setField, pieces) {
    const newField = createField(fieldSize);

    newField.forEach((row, rowIndex) => {
        pieces.forEach((piece) => {
            if (piece.y === rowIndex) {
                row.forEach((item, itemIndex) => {
                    if (piece.x === itemIndex) {
                        newField[rowIndex][itemIndex] = piece.number;
                    }
                });
            }
        });
    });

    setField(newField);
}

export default formView;
