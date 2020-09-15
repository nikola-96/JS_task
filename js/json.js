const jsObject = {
    firstName : "Nikola",
    lastName : "Markovic",
    age : 24
};

const jsonObject = '{'+
                    '"firstName" : "Nikola",' +
                    '"lastName" : "Markovic", ' +
                    '"age" : 24' +
                '}';

console.log(JSON.parse(jsonObject));
console.log(JSON.stringify(jsObject));

const jsArray = [1, 2, 3, 4, 5];

const jsonArray = '[1, 2, 3, 4, 5]';

console.log(JSON.parse(jsonArray));
console.log(JSON.stringify(jsArray));

JSON.parse(jsonArray).forEach(element => console.log(element)); 