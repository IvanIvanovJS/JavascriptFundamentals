function race(arr) {
    let patternName = /[A-Za-z]/g;
    let patternNum = /[\d]/g
    let racers = arr.shift().split(`, `);
    let command = arr.shift();
    let result = [];



    while (command !== `end of race`) {
        let racer = {};
        let matchName = command.match(patternName);
        let racerName = matchName.join(``);
        let matchNum = command.match(patternNum);
        let distance = 0;
        for (let element of matchNum) {
            let num = Number(element);
            distance += num;
        }
        if (racers.includes(racerName)) {
            let isSaved = result.find(x => x.name === racerName);
            if (isSaved) {
                isSaved.distance += distance;
            } else {
                racer.name = racerName;
                racer.distance = distance;
                result.push(racer)
            }
        }
        command = arr.shift();
    }

    result = result.sort((a, b) => b.distance - a.distance);
    console.log(`1st place: ${result[0].name}`);
    console.log(`2nd place: ${result[1].name}`);
    console.log(`3rd place: ${result[2].name}`);








}


race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']

)