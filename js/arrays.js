
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
 * rotate an array to the right by a certain number of steps 
 */
    const rotateArray = (steps, arr)=>{ 
        const newArr = arr.splice(steps);

         return [...arr.reverse(), ...newArr];
    };
    console.log(rotateArray(3,[0,1,2,3,4,5,6]))

/**
 * 
 * sum arr strat from 50
 */
const numbersForReduce = [1, 2, 3, 4, 5]
const sumArr = (array)=> array.reduce((acc, element)=> acc + element, 50)
console.log(sumArr(numbersForReduce));

/**
 * 
 * creating array  
 */


 const createArr = (num) =>{

     let array = Array.from(Array(num + 1), (x, index)=> index++);
     let [...array2] = array;
     return [...array2, ...array.reverse()]

 }
 console.log(createArr(5));

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
