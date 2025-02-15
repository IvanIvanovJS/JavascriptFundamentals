function shoppingList (arr){
    let initialList = arr.shift().split(`!`);
    for (let element of arr) {
        let [command, item, newItem]= element.split(` `);
        if(command === `Urgent`){
            if(!initialList.includes(item)){
                initialList.unshift(item);
            } 
        } else if (command === `Unnecessary`){
            if(initialList.includes(item)){
                initialList.splice(initialList.indexOf(item),1);
            }
        } else if (command === `Correct`){
            if(initialList.includes(item)){
           initialList.splice(initialList.indexOf(item),1,newItem)
            }
        } else if (command === `Rearrange`){
            if(initialList.includes(item)){
            let rearrangedItem = initialList.splice(initialList.indexOf(item),1);
            initialList.push(rearrangedItem);
            }
        }
        
    }
    console.log(initialList.join(`, `));
    
}
shoppingList((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

    )
