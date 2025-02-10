function piccolo(arr) {
    let parkingLotInfo = new Set();
    for (let element of arr) {
        let carInfo = element.split(`, `);
        let [command, carNumber] = carInfo;
        if (command === `IN`) {
            parkingLotInfo.add(carNumber)
        } else {
            parkingLotInfo.delete(carNumber);
        }
    }
    let sortedParking = new Set([...parkingLotInfo].sort((a, b) => a.localeCompare(b)))
    if (sortedParking.size === 0) {
        console.log(`Parking Lot is Empty`);

    } else {
        for (const element of sortedParking) {
            console.log(element)
        }
    }

}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
    
)