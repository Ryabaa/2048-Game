const touchFunction = (event, setTouchStart, setTouchCurrent, setTouchEnd) => {
    const getTouchData = () => {
        return { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
    };
    const getMouseData = () => {
        return { x: event.clientX, y: event.clientY };
    };

    switch (event.type) {
        case "touchstart":
            setTouchStart(getTouchData);
            break;
        case "mousedown":
            setTouchStart(getMouseData);
            break;
        case "touchmove":
            setTouchCurrent(getTouchData);
            break;
        case "mousemove":
            setTouchCurrent(getMouseData);
            break;
        case "mouseup":
        case "touchend":
            setTouchEnd(true);
            break;
        default:
            break;
    }
};

export default touchFunction;
