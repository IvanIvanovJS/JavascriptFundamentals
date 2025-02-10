function arenaTier(arr) {
    let gladiatorPool = {};
    let index = 0;
    let command = arr[index]
    let totalSkill = new Map();
    while (command !== `Ave Cesar`) {
        if (command.includes(`->`)) {
            let [gladiator, technique, skill] = command.split(` -> `);
            skill = +skill;
            if (gladiator in gladiatorPool) {
                if (technique in gladiatorPool[gladiator]) {
                    if (skill > gladiatorPool[gladiator][technique]) {
                        gladiatorPool[gladiator][technique] = skill;
                        totalSkill.set(gladiator, totalSkill.get(gladiator) + skill);
                    }
                } else {

                    gladiatorPool[gladiator][technique] = skill;
                    totalSkill.set(gladiator, totalSkill.get(gladiator) + skill);
                }
            } else {
                gladiatorPool[gladiator] = {};
                gladiatorPool[gladiator][technique] = skill;
                totalSkill.set(gladiator, skill)
            }
        } else {
            let [gladiator1, gladiator2] = command.split(` vs `);
            if (gladiatorPool[gladiator1] && gladiatorPool[gladiator2]) {
                let techniques1 = Object.keys(gladiatorPool[gladiator1]);
                let techniques2 = Object.keys(gladiatorPool[gladiator2]);

                let commonTechnique = techniques1.find(tech => techniques2.includes(tech));
                if (commonTechnique) {
                    if (totalSkill.get(gladiator1) > totalSkill.get(gladiator2)) {
                        delete gladiatorPool[gladiator2];
                        totalSkill.delete(gladiator2);
                    } else if (totalSkill.get(gladiator1) < totalSkill.get(gladiator2)) {
                        delete gladiatorPool[gladiator1];
                        totalSkill.delete(gladiator1);
                    }
                }

            }

        }

        index++;
        command = arr[index];
    }
    let sortedGladiators = [...totalSkill.entries()]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (let [gladiator, skill] of sortedGladiators) {
        console.log(`${gladiator}: ${skill} skill`);
        let sortedTechniques = Object.entries(gladiatorPool[gladiator])
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (let [technique, value] of sortedTechniques) {
            console.log(`- ${technique} <!> ${value}`);
        }


    }
}
    arenaTier([
        'Peter -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
    ]

    )