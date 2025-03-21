function hashTag(input) {

    let arr = input.split(` `);

    for (let word of arr) {
        let isHashTagOn = word.startsWith("#")
        let pattern = /^#([A-Za-z]+)$/
        if (isHashTagOn) {
            if (word.match(pattern))
                console.log(word.slice(1));

        }

    }

}
hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')