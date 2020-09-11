
/**
 * ES6 Classes
 */

class Character{
    constructor(){

        if (this.constructor == Character) {
            throw new Error("Abstract classes can't be instantiated.");
          }
            this.x = Math.floor(Math.random() * Math.floor(11));
            this.y = Math.floor(Math.random() * Math.floor(11));
            Character.numInstances = (Character.numInstances || 0) + 1
    }
         getPosition(){
            return`Position of character is. On X: ${this.x}, on Y: ${this.y} `;
        }

         setPosition(x, y){
            if(x > 10 || y > 10 ){
                throw new Error("Max range is 10.");
            } 
            this.x = x;
            this.y = y;
        }
}

class PlayerCharacter extends Character{
    constructor(){
        super();
    }
}
class NonPlayerCharacter extends Character {
    constructor(){
        super();
    }
}

const proba = new PlayerCharacter();
console.log(proba);
console.log(Character.numInstances);
const proba2 = new PlayerCharacter()
console.log(Character.numInstances);
const proba3 = new NonPlayerCharacter();
console.log(Character.numInstances);
console.log(proba3);

/**
 * Prototypes
 */

 let Prototype_Character ={
    x : Math.floor(Math.random() * Math.floor(11)),
    y : Math.floor(Math.random() * Math.floor(11)),
    getPosition(){
        return `Position of character is. On X: ${this.x}, on Y: ${this.y} `;
    },
    setPosition(x, y){
        if(x > 10 || y > 10 ){
            throw new Error("Max range is 10.");
        } 
        this.x = x;
        this.y = y;
    },
 }
 let Prototype_PlayerCharacter = {};
 let Prototype_NonPlayerCharacter = {};
 Prototype_NonPlayerCharacter.__proto__ = Prototype_Character;
 Prototype_PlayerCharacter.__proto__ = Prototype_Character;
 Prototype_PlayerCharacter.setPosition(10, 10)
 console.log(Prototype_PlayerCharacter.getPosition());

 
