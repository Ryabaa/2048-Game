function getRandom(range, arr) {
    if (range) return Math.floor(Math.random() * range);
    if (arr) return arr[Math.floor(Math.random() * arr.length)];
}

export default getRandom;
