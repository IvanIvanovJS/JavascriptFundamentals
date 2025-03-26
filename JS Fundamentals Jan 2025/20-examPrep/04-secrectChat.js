function secretChat(arr) {
    let index = 0;
    let text = arr[index];

    index++;
    let [command, ...tokens] = arr[index].split(`:|:`);
    index++;
    while (command !== "Reveal") {
        if (command === `InsertSpace`) {
            let indexSpace = Number(tokens.join(``));
            let textAsArr = text.split(``);
            textAsArr.splice(indexSpace, 0, ` `);
            text = textAsArr.join(``);
            console.log(text);

        } else if (command === `Reverse`) {
            let substring = tokens.join(``);
            if (text.includes(substring)) {
                let currentText = text.replace(substring, (``))
                substring = substring.split(``).reverse().join(``);
                text = currentText + substring;
                console.log(text);

            } else {
                console.log(`error`);

            }
        } else if (command === `ChangeAll`) {
            let [substring, replacement] = tokens;
            console.log(typeof text);

            text = text.split(substring).join(replacement)

            console.log(text);

        }

        [command, ...tokens] = arr[index].split(`:|:`);
        index++;

    }

    console.log(`You have a new text message: ${text}`);

}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]


)