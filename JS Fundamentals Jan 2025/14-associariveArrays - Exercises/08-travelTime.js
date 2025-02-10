function travelTime(arr) {
    let travelCost = {};
    for (let element of arr) {
        let [country, city, price] = element.split(` > `)
        price = +price;
        if (country in travelCost) {
            if (city in travelCost[country]) {
                if (price < travelCost[country][city]) {
                    travelCost[country][city] = price;
                }
            } else {
                travelCost[country][city] = price;
            }

        } else {
            travelCost[country] = {};
            travelCost[country][city] = price;
        }

    }
    //Albania -> Tirana -> 1000
    let countryEntries = Object.entries(travelCost).sort((a, b) => a[0].localeCompare(b[0]))
    
    for (let [country, cityObject] of countryEntries) {
        let cityEntries = Object.entries(cityObject).sort((a, b) => a[1] - b[1]);
        let result = ``;
        for (let [city, price] of cityEntries) {
            result += `${city} -> ${price} `
        }
        console.log(`${country} -> ${result}`)
    }
    
}
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]
    
)