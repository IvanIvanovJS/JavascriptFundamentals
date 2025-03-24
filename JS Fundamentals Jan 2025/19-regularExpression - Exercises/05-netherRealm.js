function netherRealm(str) {
    let arr = str.split(/\s*,\s*/);
    let result = [];
    for (let demon of arr) {
        let health = 0;
        let damage = 0;
        for (let char of demon) {
            let charPattern = /[^0-9+\-*\/.]/gi
            let match = char.match(charPattern);
            if (match) {
                let healthNum = char.charCodeAt();
                health += healthNum;
            }

        }
        let minPattern = /-\d]|-[\d+\.\d]+/g
        let minMatch = demon.match(minPattern);
        let numPattern = /\d]|[\d+\.\d]+/g
        if (minMatch) {

            for (let num of minMatch) {
                let minNum = num.match(numPattern);
                if (minNum) {
                    damage -= +minNum;

                }
            }

        }
        let plusPattern = /(?<![-.\d])\d+(?:\.\d+)?/g
        let plusMatch = demon.match(plusPattern);


        if (plusMatch) {
            for (let num of plusMatch) {
                let plusNum = +num;
                damage += plusNum
            }
        }
        let multiplyPattern = /\*/g
        let multiplyMatch = demon.match(multiplyPattern);
        if (multiplyMatch) {
            for (let char of multiplyMatch) {
                damage *= 2;
            }
        }
        let divisionPattern = /\//g;
        let divisionMatch = demon.match(divisionPattern);
        if (divisionMatch) {
            for (let char of divisionMatch) {
                damage /= 2;
            }
        }
        let demonObj = { name: demon, health: health, damage: damage }
        result.push(demonObj);
    }
    result = result.sort((a, b) => a.name.localeCompare(b.name))
    for (const element of result) {
        console.log(`${element.name} - ${element.health} health, ${element.damage.toFixed(2)} damage`);

    }



}
netherRealm("M3ph1st0**, Azazel")