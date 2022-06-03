import getRandom from "../../utils/getRandom";

function createPiece(fieldSize, pieces, setPieces) {
    const getData = () => {
        const newPiece = {
            y: getRandom(fieldSize),
            x: getRandom(fieldSize),
            number: getRandom(2) === 0 ? 2 : 4,
        };

        //Проверку полон ли массив, потом вынести в фукнцию завершения игры
        if (pieces !== [] && pieces.length !== fieldSize * fieldSize) {
            const pieceIndex = pieces.findIndex((piece) => piece.x === newPiece.x && piece.y === newPiece.y);
            if (pieceIndex !== -1) {
                getData();
            } else {
                setPieces([...pieces, newPiece]);
            }
        }

        return;
    };
    getData();
}

export default createPiece;
