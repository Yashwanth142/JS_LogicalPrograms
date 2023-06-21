import operation from './export.js';
import { message,name,age } from './export.js';

console.log(operation.sum(2,3));
console.log(operation.sub(8,4));
console.log(operation.div(9,3));
console.log(operation.mul(2,5));

console.log(message('vishnu',20));

console.log(name+' is '+age +' years old');