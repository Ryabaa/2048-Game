function deepCopy(arr) {
    const newArr = [];

    arr.forEach((item) => {
        newArr.push({ ...item });
    });

    return newArr;
}

export default deepCopy;
