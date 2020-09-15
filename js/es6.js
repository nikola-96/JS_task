
//const

const isConst = 54;
// isConst = 9; error

//let vs var 

const loop1 = ()=>{
    for (let i = 0; i < 5; i++){
        console.log(i, 'let in for')
      }
    //   console.log(i, 'let in fnc')
    }

const loop2 = () => {
    for (var i = 0; i < 5; i++){
        console.log(i, 'var in for')
      }
      console.log(i, 'var in fnc')
}

loop1();
loop2();


/**
 * 
 * class
 */

 class VivifyWorker{
   constructor(name, surname, comp){
     this.name = name;
     this.surname = surname;
     this.comp = comp;
   }
   code(){
    return this.name + ' ' + this.surname +  ' work on his project.';
  }
 }

 const pera = new VivifyWorker('Pera', 'Peric', 'MacBook');
 console.log(pera);
 console.log(pera.code());


/**
 * class functions
 */

 function createVivifyWorker(name, surname, comp){
   return{
     name,
     surname,
     comp,
     code(){
       return name + ' ' + surname +  ' work on his project.';
     }
   }
 }

 const nikola = createVivifyWorker('Nikola', 'Markovic', 'MacBook');

 console.log(nikola)
 console.log(nikola.code())

/**
 * arrow fnc vs regular fnc
 */

const me = { 
  name: "Nikola Markovic", 
  thisInArrow:() => { 
  console.log("My name is " + this.name); // no 'this' binding here 
  }, 
  thisInRegular(){ 
  console.log("My name is " + this.name); // 'this' binding works here 
  } 
 };

 me.thisInArrow(); 
 me.thisInRegular();

 /**
  *  async/await vs. Promise.then
  */

  async function fetchAsync() {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
      const data = await response.json() 
      console.log(data, 'from async/await');
  }
  fetchAsync()

  const fetchAsyncPromise = ()=>{
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
      .then(response => response.json())
      .then(data => console.log(data, 'from promise'))
  }
  fetchAsyncPromise()