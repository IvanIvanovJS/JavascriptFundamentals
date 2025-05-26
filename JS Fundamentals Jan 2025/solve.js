function solve(arr) {
    for (let row = 0; row < arr.length; row++) {
        let check = arr[row].filter(num => num === 4);
        console.log(check);
    }


}
solve([[4, 4, 4],
[6, 5, 4],
[5, 5, 5]]
)