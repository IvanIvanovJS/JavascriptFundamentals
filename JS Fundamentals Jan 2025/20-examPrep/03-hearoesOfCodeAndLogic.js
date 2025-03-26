// @ts-nocheck
function heroes(arr) {
    let index = 0;
    let championCount = +arr[index];
    index++
    let championsPool = [];
    for (index; index <= championCount; index++) {


        let [name, hp, mp] = arr[index].split(` `)
        let champion = { name: name, hp: hp, mp: mp };
        championsPool.push(champion);
    }

    let command = arr[index]
    index++

    while (command !== `End`) {
        let [action, currentName, ...rest] = command.split(` - `);
        let currentChampion = championsPool.find(x => x.name === currentName);
        currentChampion.mp = Number(currentChampion.mp);
        currentChampion.hp = Number(currentChampion.hp);

        if (action === `CastSpell`) {
            let [mpNeeded, spellName] = rest;
            mpNeeded = +mpNeeded;
            if (mpNeeded <= currentChampion.mp) {
                console.log(`${currentName} has successfully cast ${spellName} and now has ${currentChampion.mp - mpNeeded} MP!`);
                currentChampion.mp -= mpNeeded;
            } else {
                console.log(`${currentName} does not have enough MP to cast ${spellName}!`);

            }
        } else if (action === `TakeDamage`) {
            let [damage, attacker] = rest;
            damage = +damage;
            if (damage < currentChampion.hp) {
                console.log(`${currentName} was hit for ${damage} HP by ${attacker} and now has ${currentChampion.hp - damage} HP left!`);
                currentChampion.hp -= damage;
            } else {
                console.log(`${currentName} has been killed by ${attacker}!`);
                let indexOfChampion = championsPool.findIndex(x => x.name === currentName)
                championsPool.splice(indexOfChampion, 1)

            }
        } else if (action === `Heal`) {
            let amount = +rest;

            if ((amount + +currentChampion.hp) > 100) {
                let beforeHealing = currentChampion.hp;
                currentChampion.hp = 100;
                console.log(`${currentName} healed for ${100 - beforeHealing} HP!`);


            } else {
                console.log(`${currentName} healed for ${amount} HP!`);

                currentChampion.hp += amount;

            }
        } else if (action === `Recharge`) {
            let amount = +rest;
            if ((amount + +currentChampion.mp) > 200) {
                let beforeRecharge = currentChampion.mp;
                currentChampion.mp = 200;
                console.log(`${currentName} recharged for ${200 - beforeRecharge} MP!`);


            } else {
                console.log(`${currentName} recharged for ${amount} MP!`);

                currentChampion.mp += amount;
            }
        }

        command = arr[index];
        index++;
    }

    for (const champInfo of championsPool) {
        console.log(champInfo.name);
        console.log(`  HP: ${champInfo.hp}`);
        console.log(`  MP: ${champInfo.mp}`);



    }
}
heroes([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
]


)