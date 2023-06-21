function greeting(){  
    console.log('greeting')
    setTimeout(sayhi,3000);
    console.log('bye')
}

function sayhi(){
    setTimeout(end,0);
    console.log('hi')
}
function end(){
    console.log('end')
}
greeting();


// function f1(){  
//     console.log('greeting')
//     setTimeout(f4,3000);
//     console.log('bye')   
//     setTimeout(f2,2000);   
// }

// function f2(){
//     setTimeout(f3,0);
//     console.log('f2')
// }
// function f3(){
//     console.log('f3')
// }
// function f4(){
//     console.log('End')
// }
// f1();
