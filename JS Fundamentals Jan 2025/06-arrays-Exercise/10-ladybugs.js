/*You are given a field size and the indexes of ladybugs inside the field. 
A ladybug changes its position either to its left or to its right by a given fly length. 
A command to a ladybug looks like this: "0 right 1". 
This means that the little insect placed on index 0 should fly one index to its right. 
If the ladybug lands on a fellow ladybug, it continues to fly in the same direction by the same fly length. 
If the ladybug flies out of the field, it is gone.
For example, imagine you are given a field with size 3 and ladybugs on indexes 0 and 1. 
If the ladybug on index 0 needs to fly to its right by the length of 1 (0 right 1) it will attempt to land on index 1 
but as there is another ladybug there it will continue further to the right by an additional length of 1, landing on index 2. 
After that, if the same ladybug needs to fly to its right by the length of 1 (2 right 1), 
it will land somewhere outside of the field, so it flies away:
If you are given a ladybug index that does not have a ladybug there, nothing happens. 
If you are given a ladybug index that is outside the field, nothing happens. 
Your job is to create the program, simulating the ladybugs flying around doing nothing. 
In the end, print all cells in the field separated by blank spaces. For each cell that has a ladybug on it print '1' 
and for each empty cell print '0'. For the example above, the output should be '0 1 0'. 
*/
function ladybugs(arr) {
    let fieldLength = Number(arr[0]); //counting from zero to length - 1.
    let ladybugsStartingIndexes = arr[1].split(` `);
    let field = new Array(fieldLength).fill(0);
    

    for (let k = 0; k < fieldLength; k++) {
        let ladyBugPosition = Number(ladybugsStartingIndexes[k]);


        if (ladyBugPosition < fieldLength && ladyBugPosition >= 0) {
            field[ladyBugPosition] = 1;
        }



    }
    for (let i = 2; i < arr.length; i++) {
        let tokens = arr[i].split(` `);
        let ladybugIndex = Number(tokens[0]);
        let direction = tokens[1];
        let flyingLength = Number(tokens[2]);
        
        if (ladybugIndex < 0 || ladybugIndex >= fieldLength || field[ladybugIndex] !== 1) {
            continue;
        }
        field[ladybugIndex] = 0;
        let step = direction === 'right' ? 1 : -1;
        let currentPosition = ladybugIndex + step * flyingLength;

        while(currentPosition >= 0 && currentPosition < fieldLength){
            if(field[currentPosition] === 0){
                field[currentPosition] = 1;
                break;
            }
            currentPosition += step * flyingLength;
        }

    }


    console.log(field.join(` `));

}
ladybugs([3, '0 1',
    '0 right 1',
    '2 right 1']);
    
