function matchFullName(str) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let match = pattern.exec(str);
    let result = [];


    while (match) {
        result.push(match[0])
        match = pattern.exec(str);
    }
    console.log(result.join(` `));


}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")