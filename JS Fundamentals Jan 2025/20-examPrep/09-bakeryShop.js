function backeryShop(arr) {
    let index = 0;
    let command = arr[index];
    index++;
    let foodTrack = {};
    let sellCount = 0;
    while (command !== `Complete`) {
        let [action, quantity, food] = command.split(` `);
        quantity = Number(quantity)
        if (action === `Receive` && quantity > 0) {
            if (foodTrack[food]) {
                foodTrack[food] += quantity;
            } else {
                foodTrack[food] = quantity;
            }
        } else if (action === `Sell`) {
            if (!foodTrack[food]) {
                console.log(`You do not have any ${food}.`);

            } else {
                if (quantity > foodTrack[food]) {
                    console.log(`There aren't enough ${food}. You sold the last ${foodTrack[food]} of them.`);
                    sellCount += foodTrack[food]
                    delete foodTrack[food];
                } else {
                    console.log(`You sold ${quantity} ${food}.`);
                    sellCount += quantity;
                    foodTrack[food] -= quantity;
                    if (foodTrack[food] === 0) {
                        delete foodTrack[food];
                    }

                }
            }
        }

        command = arr[index];
        index++;
    }
    let entries = Object.entries(foodTrack);
    for (let [food, qty] of entries) {
        console.log(`${food}: ${qty}`);

    }
    console.log(`All sold: ${sellCount} goods`);



}
backeryShop([`Receive 10 muffins`,
    `Receive 23 bagels`,
    `Sell 20 bulki`,
    `Sell 15 muffins`,
    `Sell 10 bagels`,
    `Complete`])

