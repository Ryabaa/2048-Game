function handleKeyPress(event, setMoveDirection) {
    setMoveDirection("");
    switch (event.keyCode) {
        case 87:
            setMoveDirection("up");
            break;
        case 65:
            setMoveDirection("left");
            break;
        case 83:
            setMoveDirection("down");
            break;
        case 68:
            setMoveDirection("right");
            break;
        default:
            break;
    }
}

export default handleKeyPress;
