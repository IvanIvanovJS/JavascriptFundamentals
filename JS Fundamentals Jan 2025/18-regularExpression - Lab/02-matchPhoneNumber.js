function matchPhoneNumber(arr) {
    let pattern = /\+359(?<spacer>[ |-])2\k<spacer>[\d]{3}\k<spacer>\b[\d]{4}\b/g
    let str = arr.shift();
    let result = str
        .match(pattern)
        .join(`, `);
    console.log(result);


}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])