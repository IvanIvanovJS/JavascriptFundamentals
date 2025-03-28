function passwordReset(arr) {
    let index = 0;
    let text = arr[index];
    index++;
    let command = arr[index];
    index++;
    while (command !== `Done`) {
        let [action, ...tokens] = command.split(` `);

        if (action === `TakeOdd`) {
            let newText = ``;
            for (let charIndex = 1; charIndex < text.length; charIndex += 2) {


                let char = text.charAt(charIndex);
                newText += char;


            }
            text = newText;
            console.log(text);

        } else if (action === `Cut`) {
            let [index, length] = tokens.map(Number);
            let substring = text.slice(index, index + length);
            text = text.replace(substring, ``);
            console.log(text);

        } else if (action === `Substitute`) {
            let [substring, substitute] = tokens;
            if (text.includes(substring)) {
                text = text.split(substring).join(substitute);
                console.log(text);

            } else {
                console.log(`Nothing to replace!`);

            }
        }

        command = arr[index];
        index++
    }
    console.log(`Your password is: ${text}`);

}
passwordReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])

)