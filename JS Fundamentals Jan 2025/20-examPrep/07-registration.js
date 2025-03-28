function registration(arr) {
    let index = 0;
    let username = arr[index];
    index++;
    let command = arr[index];
    index++;
    while (command !== `Registration`) {
        let [action, ...tokens] = command.split(` `);
        if (action === `Letters`) {
            let subAction = tokens[0];
            if (subAction === `Lower`) {
                username = username.toLowerCase();
            } else if (subAction === `Upper`) {
                username = username.toUpperCase();
            }
            console.log(username);

        } else if (action === `Reverse`) {
            tokens = tokens.map(Number);
            let [startIndex, endIndex] = tokens;
            if (startIndex >= 0 && startIndex < username.length && endIndex >= 0 && endIndex < username.length) {
                let substring = username.substring(startIndex, endIndex + 1);
                let print = substring.split(``).reverse().join(``);
                console.log(print);

            }


        } else if (action === `Substring`) {
            let substring = tokens[0];
            if (username.includes(substring)) {
                let print = username.replace(substring, ``);
                console.log(print);

            } else {
                console.log(`The username ${username} doesn't contain ${substring}.`);

            }
        } else if (action === `Replace`) {
            let char = tokens[0];
            username = username.split(char).join(`-`);
            console.log(username);

        } else if (action === `IsValid`) {
            let char = tokens[0];
            if (username.includes(char)) {
                console.log(`Valid username.`);

            } else {
                console.log(`${char} must be contained in your username.`);

            }
        }

        command = arr[index];
        index++;
    }
}
registration([
    'ThisIsSoftUni',
    'Reverse 0 0',
    'Replace S',
    'Substring hi',
    'Registration'
])