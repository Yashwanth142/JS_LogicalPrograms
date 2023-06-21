//lexcial scope
// const Function1 = () => {
//     let value = 2;
//     console.log(value);

//     const childFunction = () => {
//          console.log(value += 1);
//     }
//     childFunction();
// }

// Function1();
//The lexical scope of childFunction allows access to the parent scope

//Closure
//A closure is a function having access to the parent scope, 
//even after the parent function has closed.

const myFunction = () => {
    let value = 2;
    console.log(value);

    const childFunction2 = () => {
         console.log(value += 1);
    }

    return childFunction2;
}

const result = myFunction();
//console.log(result);
result();
result();
result();