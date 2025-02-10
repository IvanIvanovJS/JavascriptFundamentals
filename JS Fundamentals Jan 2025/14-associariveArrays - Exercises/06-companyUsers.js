function companyUsers(arr){
    let users = new Map();
    for (let element of arr) {
        let [name, id] = element.split(` -> `);
        if(!users.has(name)){
            users.set(name, []);
        }
        if(users.has(name)){
            if(!users.get(name).includes(id)){
                users.get(name).push(id)
            }
            
        }
    }
    
     let sortedUsers = new Set([...users].sort((a, b) => a[0].localeCompare(b[0])))
    
    for (const [name, id] of sortedUsers) {
        console.log(`${name}`);
        let result = [];
        for (const element of id) {
            result.push(`-- ${element}`)
        }
        console.log(result.join(`\n`));
        
    }
    
    
}
companyUsers([`SoftUni -> AA12345`,
    `SoftUni -> CC12344`,
    `Lenovo -> XX23456`,
    `SoftUni -> AA12345`,
    `Movement -> DD11111`]
    )