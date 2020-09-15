//
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredNumbers = numbers.map(x => x * x);

console.log(squaredNumbers);

// IIFE
(total = function(x = 10, y = 20){ 
    console.log((x + y));
})();

//arrow function
const double = (num) => num * 2

console.log(double(5));