function softUniBarIncome(arr) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+\.?\d*)\$/;
    let command = arr.shift();
    let totalSum = 0;
    while (command !== `end of shift`) {
        let match = command.match(pattern);
        if (match) {
            let name = match.groups.name;
            let product = match.groups.product;
            let count = Number(match.groups.count);
            let price = Number(match.groups.price);
            let currentSum = count * price;
            totalSum += currentSum;
            console.log(`${name}: ${product} - ${currentSum.toFixed(2)}`);
        }



        command = arr.shift();
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);

}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']

)