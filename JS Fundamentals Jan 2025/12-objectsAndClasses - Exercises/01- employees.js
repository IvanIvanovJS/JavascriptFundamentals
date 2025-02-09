function employees(arr){
    for (let name of arr) {
        let personObj = {
            name: name,
            personalNumber: name.length
        }
        console.log(`Name: ${personObj.name} -- Personal Number: ${personObj.personalNumber}`);
        
    }

}
employees ([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )