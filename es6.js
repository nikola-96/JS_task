
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
