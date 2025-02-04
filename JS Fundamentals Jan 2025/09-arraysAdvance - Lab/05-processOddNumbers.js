function processOddNumbers(arr){
    let OddInexes = arr
                    .filter((x, index) => index % 2 !== 0)
                    .map(x => x *2)
                    .reverse()
                    .join(` `)
    console.log(OddInexes);
    
}
processOddNumbers([10, 15, 20, 25])