function emailChecking(str) {
    let pattern = /^[A-Za-z0-9]+\.*[\w.-]+@[a-z-]+\.[a-z-]+\.*[a-z-]*/g;
    let arr = str.split(` `);
    for (let element of arr) {
        let match = element.match(pattern);
        if (match) {

            console.log(match[0]);
        }

    }



}
emailChecking(`Please contact us at: support@github.com.`)