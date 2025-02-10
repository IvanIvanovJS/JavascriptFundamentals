function partyTime(arr){
    let regularGuest = [];
    let vipGuest = [];
    let index = 0;
    let command = arr[index];
    while(command != `PARTY`){
        let firstCharacter = +command[0];
        if(!isNaN(command)){
            vipGuest.push(command);
        }else {
            regularGuest.push(command)
        }
        index++
        command = arr[index]
    }
    let slicedArr = arr.slice(arr.indexOf(`PARTY`) + 1)
    
    
    for(let guest of slicedArr){
        if(vipGuest.includes(guest)){
            vipGuest.splice(vipGuest.indexOf(guest),1)
        }
        if(regularGuest.includes(guest)){
            regularGuest.splice(regularGuest.indexOf(guest),1)
        }
    }
    let result = [];
    for (const element of vipGuest) {
        result.push(element)
    }
    for (const element of regularGuest) {
        result.push(element)
    }
    console.log(result.length);
    for (const element of result) {
        console.log(element);
        
    }
    
    
}
partyTime([
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    'dziNz78I',
    'dziNz78I',
    ]
    
    )