function touchAction(touchStart, touchCurrent, setMoveDirection) {
    if (touchCurrent.x || touchCurrent.y) {
        const minDistance = 50;

        const touchDistance = {
            x: touchStart.x - touchCurrent.x,
            y: touchStart.y - touchCurrent.y,
        };

        if (Math.abs(touchDistance.x) > Math.abs(touchDistance.y)) {
            if (Math.abs(touchDistance.x) > minDistance) {
                if (touchDistance.x > 0) {
                    setMoveDirection("left");
                } else {
                    setMoveDirection("right");
                }
            }
        } else {
            if (Math.abs(touchDistance.y) > minDistance) {
                if (touchDistance.y > 0) {
                    setMoveDirection("up");
                } else {
                    setMoveDirection("down");
                }
            }
        }
    }

    return;
}

export default touchAction;
