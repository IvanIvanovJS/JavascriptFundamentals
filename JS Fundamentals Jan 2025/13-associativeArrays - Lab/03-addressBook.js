function addressBook(arr) {

    let result = new Map()
    for (let element of arr) {
        let [name, number] = element
            .split(`:`);

        result.set(name, number)

    }
    let sortedResult = new Map([...result].sort((a,b) => a[0].localeCompare(b[0])))
    for (let [name, number] of sortedResult) {
        console.log(`${name} -> ${number}`);

    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)