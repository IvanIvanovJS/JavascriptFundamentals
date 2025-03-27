function emojiDetector(input) {
    const text = input[0];


    const digits = text.match(/\d/g) || [];
    let coolThreshold = 1;
    digits.forEach(digit => {
        coolThreshold *= parseInt(digit);
    });


    const emojiRegex = /(::|\*\*)[A-Z][a-z]{2,}\1/g;
    const allEmojis = text.match(emojiRegex) || [];


    const validEmojis = [];
    const coolEmojis = [];

    allEmojis.forEach(emoji => {

        const word = emoji.slice(2, -2);


        if (/^[A-Z][a-z]+$/.test(word)) {
            validEmojis.push(emoji);


            let coolness = 0;
            for (let i = 0; i < word.length; i++) {
                coolness += word.charCodeAt(i);
            }

            if (coolness >= coolThreshold) {
                coolEmojis.push(emoji);
            }
        }
    });


    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${validEmojis.length} emojis found in the text. The cool ones are:`);
    if (coolEmojis.length > 0) {
        coolEmojis.forEach(emoji => console.log(emoji));
    }
}