import createPiece from "./createPiece";

function sortPieces(pieces, setPieces, moveDirection, fieldSize, score, setScore) {
    let linesAxis = "x";
    let piecesAxis = "y";
    let piecesOrder = "decrease";
    let piecesMoved = false;
    switch (moveDirection) {
        case "left":
        case "right":
            linesAxis = "y";
            piecesAxis = "x";
            break;
    }
    switch (moveDirection) {
        case "right":
        case "down":
            piecesOrder = "increase";
            break;
    }

    const uniqueLinesNumber = [...new Set(pieces.map((piece) => piece[linesAxis]))];
    const lines = Array.apply(null, Array(uniqueLinesNumber.length)).map(() => []);

    uniqueLinesNumber.forEach((lineNumber, lineIndex) => {
        pieces.forEach((piece) => {
            if (lineNumber === piece[linesAxis]) {
                lines[lineIndex].push(piece);
            }
        });
    });

    const newLines = lines.map((line) => {
        const newLine = [...line];
        newLine
            .sort((a, b) => (piecesOrder === "increase" ? b[piecesAxis] - a[piecesAxis] : a[piecesAxis] - b[piecesAxis]))
            .forEach((piece, pieceIndex, arr) => {
                const samePieceIndex = arr.findIndex((findPiece) => findPiece.number === piece.number);
                if (samePieceIndex !== -1 && samePieceIndex !== pieceIndex) {
                    let pathEmpty = true;
                    for (let i = samePieceIndex + 1; i < pieceIndex; i++) {
                        pathEmpty = arr[i] ? !pathEmpty : pathEmpty;
                    }
                    if (pathEmpty) {
                        arr.splice(pieceIndex, 1);
                        arr.splice(samePieceIndex, 1, { ...piece, number: piece.number * 2 });
                        setScore(score + piece.number * 2);
                        piecesMoved = true;
                    }
                }
            });
        newLine
            .sort((a, b) => (piecesOrder === "increase" ? b[piecesAxis] - a[piecesAxis] : a[piecesAxis] - b[piecesAxis]))
            .map((piece, pieceIndex, arr) => {
                if (piecesOrder === "increase") {
                    for (let i = piece[piecesAxis]; i < fieldSize - 1; i++) {
                        const nextPiece = arr.find((findPiece) => findPiece[piecesAxis] === i + 1);
                        if (nextPiece) break;
                        piece[piecesAxis] += 1;
                        piecesMoved = true;
                    }
                } else {
                    for (let i = piece[piecesAxis]; i > 0; i--) {
                        const nextPiece = arr.find((findPiece) => findPiece[piecesAxis] === i - 1);
                        if (nextPiece) break;
                        piece[piecesAxis] -= 1;
                        piecesMoved = true;
                    }
                }
                return piece;
            });
        return newLine;
    });

    const newPieces = [];
    newLines.forEach((line) => {
        line.forEach((piece) => {
            newPieces.push({ ...piece });
        });
    });

    if (piecesMoved) {
        setPieces(newPieces);
        createPiece(fieldSize, newPieces, setPieces);
    }
}

export default sortPieces;
