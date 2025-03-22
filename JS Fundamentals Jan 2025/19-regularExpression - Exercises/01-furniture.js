function furniture(arr) {
    let pattern = />>(?<name>[A-Z]+|[A-Z][a-z]+)<<(?<price>[\d]+|[\d]+\.[\d]+)!(?<qty>[\d]+)/;
    let command = arr.shift();
    let sum = 0;
    console.log(`Bought furniture:`);

    while (command !== `Purchase`) {
        let match = command.match(pattern);


        if (match) {
            let name = match.groups.name;
            console.log(name);

            let price = Number(match.groups.price);
            let qty = Number(match.groups.qty);
            let currentSum = price * qty;
            sum += currentSum;
        }
        command = arr.shift()
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);

}
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']

)