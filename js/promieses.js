const promise = new Promise((resolve, reject)=>{
    if(true){
        setTimeout(function() {
            resolve('Succes!');
          }, 3000)
        }else{
            reject('Error')
        }
});

promise.then((message) => console.log(message))
        .catch((error) => console.log(error));

/**
 * Promise all 
 */

 const promise1 = new Promise((resolve, reject)=>{
     setTimeout(resolve, 1000, 'first promise')
 })

 const promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, 'second promise')
})

 const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 3000, 'third promise')
})

 const promise4 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 4000, 'fourth promise')
})

Promise.all([promise1, promise2, promise3, promise4])
        .then(values => console.log(values))