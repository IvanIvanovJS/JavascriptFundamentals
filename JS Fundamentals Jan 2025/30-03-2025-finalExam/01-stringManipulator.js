function stringManipulatior(arr) {
    let index = 0;
    let text = arr[index];
    index++;

    let command = arr[index];
    index++;
    while (command !== `End`) {
        let [action, ...tokens] = command.split(` `);
        if (action === `Translate`) {
            let [char, replacement] = tokens;
            text = text.split(char).join(replacement);
            console.log(text);

        } else if (action === `Includes`) {
            let [substring] = tokens;
            if (text.includes(substring)) {
                console.log(`True`);

            } else {
                console.log(`False`);

            }
        } else if (action === `Start`) {
            let [substring] = tokens;
            if (text.startsWith(substring)) {
                console.log(`True`);

            } else {
                console.log(`False`);

            }
        } else if (action === `Lowercase`) {
            text = text.toLowerCase();
            console.log(text);

        } else if (action === `FindIndex`) {
            let [char] = tokens;
            let lastChar = text.lastIndexOf(char);
            console.log(lastChar);

        } else if (action === `Remove`) {
            let [startIndex, count] = tokens;
            startIndex = +startIndex;
            count = +count;
            let removedCharacters = text.slice(startIndex, startIndex + count);

            text = text.replace(removedCharacters, ``);
            console.log(text);


        }

        command = arr[index];
        index++;
    }
}
stringManipulatior((["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"])
)