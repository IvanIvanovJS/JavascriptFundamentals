class Storage{
    constructor(capacity){
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(productObj){
        this.storage.push(productObj)
        this.capacity -= Number(productObj.quantity)
        this.totalCost += +productObj.price * +productObj.quantity
    }
    getProducts(){
        let result = [];
        for(let productObj of this.storage){
            let objAsJSON = JSON.stringify(productObj)
            result.push(objAsJSON);
            
        }
       return result = result.join(`\n`)
    }
}


let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);
