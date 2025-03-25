function activationKeys(arr) {
    let rawActivationKey = arr[0];
    let str = arr.shift();

    let command = arr.shift();
    while (command !== `Generate`) {
        let instruction = command.split(`>>>`);
        let type = instruction[0];
        if (type === `Contains`) {
            let substring = instruction[1];

            if (str.includes(substring)) {
                console.log(`${str} contains ${substring}`);

            } else {
                console.log(`Substring not found!`);


            }

        } else if (type === `Flip`) {
            let caseType = instruction[1];
            let startIndex = Number(instruction[2]);
            let endIndex = Number(instruction[3])
            if (caseType === `Upper`) {
                let substring = str
                    .substring(startIndex, endIndex);

                let toUpper = substring.toUpperCase();
                str = str.replace(substring, toUpper);
                console.log(str);

            } else {
                let substring = str
                    .substring(startIndex, endIndex);

                let toLower = substring.toLowerCase();
                str = str.replace(substring, toLower);
                console.log(str);
            }
        } else if (type === `Slice`) {
            let startIndex = Number(instruction[1]);
            let endIndex = Number(instruction[2]);
            let substring = str.substring(startIndex, endIndex);
            str = str.replace(substring, "");
            console.log(str);


        }

        command = arr.shift();
    }

    console.log(`Your activation key is: ${str}`);



}
activationKeys((((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
)
)
)