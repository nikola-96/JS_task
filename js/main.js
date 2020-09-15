
var outside3 = 'Define outside, var';

function fnc(){

    var inside4 = "Define inside fnc block";

    for (let i = 0; i < 10; i++) {
        var inside1 = "Define inside for block var";
        let  inside2 = "Define inside for block let";        
    }
    console.log(inside1);//ok
    // console.log(inside2);//error
    console.log(outside3);// ok
}

// console.log(inside4);// error 

fnc();