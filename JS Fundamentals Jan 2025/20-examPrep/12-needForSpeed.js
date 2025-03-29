function needForSpeed(arr) {
    let index = 0;
    let numOfCars = arr[index];
    index++;
    let carList = new Map();

    for (index; index <= numOfCars; index++) {
        let [brand, milage, fuel] = arr[index].split(`|`);

        milage = Number(milage);
        fuel = Number(fuel);
        carList.set(brand, { milage: milage, fuel })

    }
    let command = arr[index];
    index++;


    while (command !== `Stop`) {
        let [action, ...tokens] = command.split(` : `);
        if (action === `Drive`) {
            let [brand, distance, fuel] = tokens;
            distance = +distance;
            fuel = +fuel;
            if (carList.get(brand).fuel < fuel) {
                console.log(`Not enough fuel to make that ride`);

            } else {
                carList.get(brand).fuel -= fuel;
                carList.get(brand).milage += distance;
                console.log(`${brand} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if (carList.get(brand).milage >= 100000) {
                    carList.delete(brand);
                    console.log(`Time to sell the ${brand}!`);

                }
            }
        } else if (action === `Refuel`) {
            let [brand, fuel] = tokens;
            fuel = +fuel;
            let tankVolume = 75;
            let neededFuel = tankVolume - carList.get(brand).fuel;
            if (carList.get(brand).fuel + fuel > tankVolume) {
                carList.get(brand).fuel = 75;
                console.log(`${brand} refueled with ${neededFuel} liters`);

            } else {
                carList.get(brand).fuel += fuel;
                console.log(`${brand} refueled with ${fuel} liters`);
            }
        } else if (action === `Revert`) {
            let [brand, milage] = tokens;
            milage = +milage;
            carList.get(brand).milage -= milage;

            if (carList.get(brand).milage < 10000) {
                carList.get(brand).milage = 10000;

            } else {
                console.log(`${brand} mileage decreased by ${milage} kilometers`)
            }

        }



        command = arr[index];
        index++;
    }

    let entries = carList.entries();
    for (let [brand, { milage, fuel }] of entries) {
        console.log(`${brand} -> Mileage: ${milage} kms, Fuel in the tank: ${fuel} lt.`);

    }


}
needForSpeed([
    `4`,
    `Lamborghini Veneno|11111|74`,
    `Bugatti Veyron|12345|67`,
    `Koenigsegg CCXR|67890|12`,
    `Aston Martin Valkryie|99900|50`,
    `Drive : Koenigsegg CCXR : 382 : 82`,
    `Drive : Aston Martin Valkryie : 99 : 23`,
    `Drive : Aston Martin Valkryie : 2 : 1`,
    `Refuel : Lamborghini Veneno : 40`,
    `Revert : Bugatti Veyron : 2000`,
    `Stop`
]
)
//     `Audi A6 driven for 543 kilometers. 47 liters of fuel consumed.
// Mercedes CLS driven for 94 kilometers. 11 liters of fuel consumed.
// Not enough fuel to make that ride
// Audi A6 refueled with 50 liters
// Mercedes CLS mileage decreased by 500 kilometers
// Audi A6 -> Mileage: 10000 kms, Fuel in the tank: 65 lt.
// Mercedes CLS -> Mileage: 10594 kms, Fuel in the tank: 24 lt.
// Volkswagen Passat CC -> Mileage: 45678 kms, Fuel in the tank: 5 lt.
// `