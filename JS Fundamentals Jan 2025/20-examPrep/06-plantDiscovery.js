function plantDiscovery(arr) {
    let index = 0;
    let plantBook = Number(arr[index]);
    index++
    let plantRarity = new Map();
    let plantCount = new Map();
    for (index; index <= plantBook; index++) {
        let [plantName, rarity] = arr[index].split(`<->`);
        plantRarity.set(plantName, [+rarity]);

    }
    let [command, name, ...tokens] = arr[index].split(` `);
    index++

    while (command !== `Exhibition`) {
        if (plantRarity.get(name) === undefined) {
            [command, name, ...tokens] = arr[index].split(` `);
            index++;
            console.log(`error`);

            continue;
        }
        if (command === `Rate:`) {
            if (plantRarity.get(name).length < 2) {
                plantRarity.get(name).push(+tokens[1]);
                plantCount.set(name, 1);

            } else {
                plantRarity.get(name)[1] = (plantRarity.get(name)[1] + +tokens[1]);
                plantCount.set(name, plantCount.get(name) + 1);
            }


        } else if (command === `Update:`) {
            plantRarity.get(name)[0] = +tokens[1];
        } else if (command === `Reset:`) {
            plantRarity.get(name)[1] = 0;
            plantCount.set(name, 0)
        }

        [command, name, ...tokens] = arr[index].split(` `);
        index++;
    }
    console.log(`Plants for the exhibition:`);
    let entry = plantRarity.entries();





    for (const element of entry) {

        let name = element[0]
        let rating = element[1][1];
        if (plantCount.has(name)) {
            rating = element[1][1] / plantCount.get(name)
        }

        if (rating) {
            console.log(`- ${element[0]}; Rarity: ${element[1][0]}; Rating: ${rating.toFixed(2)}`);
        } else {
            rating = 0;
            console.log(`- ${element[0]}; Rarity: ${element[1][0]}; Rating: ${rating.toFixed(2)}`);
        }




    }


}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
