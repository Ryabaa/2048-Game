function keyPressFunction(event, setMoveDirection) {
    switch (event.keyCode) {
        case 87:
        case 38:
            setMoveDirection("up");
            break;
        case 65:
        case 37:
            setMoveDirection("left");
            break;
        case 83:
        case 40:
            setMoveDirection("down");
            break;
        case 68:
        case 39:
            setMoveDirection("right");
            break;
        default:
            break;
    }
}

export default keyPressFunction;
