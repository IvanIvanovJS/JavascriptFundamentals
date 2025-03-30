function messageTranslator(arr) {
    let counter = +arr[0];
    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<translate>[A-Za-z]{8,})\]/;
    for (let i = 1; i <= counter; i++) {
        let match = arr[i].match(pattern);

        if (match) {
            let command = match.groups.command;
            let stringTranslate = match.groups.translate;
            let printTranslate = []
            for (let char of stringTranslate) {
                let askii = char.charCodeAt();
                printTranslate.push(askii);
            }
            console.log(`${command}: ${printTranslate.join(` `)}`);


        } else {
            console.log("The message is invalid");

        }
    }
}
messageTranslator(["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"])
