function biggerHalf(arr) {
    return arr.sort((a, b) => a - b).slice(Math.floor(arr.length / 2))
}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
