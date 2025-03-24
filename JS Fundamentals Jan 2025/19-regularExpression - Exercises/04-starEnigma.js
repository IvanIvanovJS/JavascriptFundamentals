// @ts-nocheck
function starEnigma(arr) {
    let planetsCount = +arr.shift();
    let starPatern = /[star]/gi
    let enigmaMessage = [];

    for (const element of arr) {
        let match = element.match(starPatern);
        let enigmaKey = match ? match.length : 0;
        let enigmaMessege = '';

        for (let char of element) {
            let enigmaAskii = char.charCodeAt() - enigmaKey;
            let enigmaChar = String.fromCharCode(enigmaAskii)
            enigmaMessege += enigmaChar

        }
        enigmaMessage.push(enigmaMessege)


    }
    let atacedPlanets = [];
    let destroyedPlanets = [];
    let enigmaPattern = /@(?<planet>[A-Za-z]+)\w?[^@\-!:>]*:\d+[^@\-!:>]*!(?<action>A|D)![^@\-!:>]*->\d+/


    for (let message of enigmaMessage) {
        let match = message.match(enigmaPattern)
        if (match) {
            let action = match.groups.action;
            let name = match.groups.planet;


            if (action === "D") {
                destroyedPlanets.push(name)

            } else if (action === "A") {
                atacedPlanets.push(name)
            }
        }


    }
    atacedPlanets = atacedPlanets.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${atacedPlanets.length}`);
    for (let planet of atacedPlanets) {
        console.log(`-> ${planet}`);

    }

    destroyedPlanets = destroyedPlanets.sort((a, b) => a.localeCompare(b));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    for (let planet of destroyedPlanets) {
        console.log(`-> ${planet}`);

    }

}
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']

)