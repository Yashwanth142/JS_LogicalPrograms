const num = 5

let n1 = 0;
let n2 = 1;
let n3;
for (let i = 0; i <= num; i++) {
   console.log(n1);
   n3=n1+n2
   n1=n2
   n2=n3
}

// recursion

// function reFibonacci(n1, n2, num) {
//   if (num === 0) {
//     return 0;
//   }
//   let val = n1 + n2;
//   console.log(val);
//   reFibonacci(n2, val, num - 1);
// }

// let n1 = 0;
// let n2 = 1;
// console.log(n1);
// console.log(n2);
// let num = 5;

// reFibonacci(n1, n2, num-1);