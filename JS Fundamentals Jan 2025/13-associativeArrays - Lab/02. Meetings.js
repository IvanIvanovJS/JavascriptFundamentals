function meetings(arr){
let result = new Map();

for(let info of arr){
    let [dayOfWeek, name] = info.split(` `)
    if(result.get(dayOfWeek)){
        console.log(`Conflict on ${dayOfWeek}!`);
        continue;
    }
    result.set(dayOfWeek, name)
    console.log(`Scheduled for ${dayOfWeek}`);
    }
    for(let [dayOfWeek, name] of result){
        console.log(`${dayOfWeek} -> ${name}`);
        
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
   )