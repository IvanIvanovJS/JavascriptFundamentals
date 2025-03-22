// @ts-nocheck
function matchDates(arr) {
    let str = arr.shift();
    let pattern = /(?<day>[\d]{2})(?<separator>\.|-|\/)(?<month>[A-Z][a-z]{2})\k<separator>(?<year>[\d]{4})/g
    let result = pattern.exec(str);

    while (result) {
        let day = result.groups.day;
        let month = result.groups.month;
        let year = result.groups.year;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

        result = pattern.exec(str);
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])