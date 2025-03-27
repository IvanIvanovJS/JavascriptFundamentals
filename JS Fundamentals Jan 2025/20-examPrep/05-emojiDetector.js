function emojiDetector(arr) {
    let text = arr[0];
    let emojiPattern = /(?<symbol>\*\*|::)[A-Z][a-z]{2,}\k<symbol>/g;
    let numPattern = /\d/g
    let nums = text.match(numPattern);
    let emojis = text.match(emojiPattern);
    let coolNum = 1;
    let coolEmojis = [];
    if (nums) {
        for (let num of nums) {
            coolNum *= Number(num);

        }
    }

    if (emojis) {
        for (let names of emojis) {
            let alphabetPattern = /[A-Za-z]/g;
            let name = names.match(alphabetPattern);
            let askiiSum = 0;
            if (name) {
                for (let char of name) {
                    askiiSum += char.charCodeAt();
                }
                if (askiiSum >= coolNum) {
                    coolEmojis.push(names)
                }
            }

        }
    }

    console.log(`Cool threshold: ${coolNum}`);
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    coolEmojis.forEach(element => {
        console.log(element);
    });



}
emojiDetector((["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]))