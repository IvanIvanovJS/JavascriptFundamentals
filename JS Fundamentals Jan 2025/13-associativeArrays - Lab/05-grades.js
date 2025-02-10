function schooGrades(arr){
    let result = new Map();
    for (let element of arr) {
        let info = element.split(` `);
        let [name, ...grades] = info;
        if(!result.get(name)){
            result.set(name, [])
            
        }
        for (const grade of grades) {
            result.get(name).push(+grade)
        }
        
        
    }
    let sortedResult = new Map([...result].sort((a,b) => a[0].localeCompare(b[0])));
    

    for(let [name, grades] of sortedResult){
        let sumOfGrades = grades.reduce((acc, num) => acc + num,0);
        let averageGrades = sumOfGrades / grades.length;
        console.log(`${name}: ${averageGrades.toFixed(2)}`); 
      
    }
    

}
schooGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
    )