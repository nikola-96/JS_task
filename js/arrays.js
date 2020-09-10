
const colurs = ['red', 'green', 'blue', 'black', 'white'];

const loop = (colurs, type)=> {
        if (type === 'for'){

            for(let i = 0; i <= colurs.length; i++ ){
                console.log(colurs[i]);
                }
            }else if(type === 'forEach'){
                colurs.forEach((e)=>console.log(e))
            }
}

loop(colurs, 'for');
loop(colurs, 'forEach');


/**
 * 
 * sum arr strat from 50
 */
const numbersForReduce = [1, 2, 3, 4, 5]
const sumArr = (array)=> array.reduce((acc, element)=> acc + element, 50)
console.log(sumArr(numbersForReduce));

/**
 * zoo task
 */
function zooInventory(zoo){
    return zoo.map(element => [element[0], element[1].join(' is ')].join(' the '));
}

let myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
  ];

   console.log(zooInventory(myZoo));
