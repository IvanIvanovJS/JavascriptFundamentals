function pascalCaseSplitter(str) {
    let pattern = /[A-Z][a-z0-9]*/g;
    let result = str.match(pattern);
    console.log(result.join(`, `));

}
pascalCaseSplitter((`ThisIsSoAnnoyingToDo`))
