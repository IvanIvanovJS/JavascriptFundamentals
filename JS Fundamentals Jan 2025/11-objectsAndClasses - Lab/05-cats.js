function cats(arr){
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    meow(){
        console.log(`${this.name}, age ${this.age} says Meow`);
        
    }
}

    for(let i = 0; i < arr.length; i++){
        let catInfo = arr[i]
            .split(` `);
        
        let name = catInfo[0]
        let age = catInfo[1]
        let cat = new Cat(name, age);
        
        cat.meow();
    }
    
    
}

cats(['Mellow 2', 'Tom 5'])