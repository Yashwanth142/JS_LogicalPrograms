//Promise finally
// const myPromise = new Promise((res, rej) => {
//     let x=false
//     if (x) {
//       res('Fulfilled');
//     } else {
//       rej('Rejected');
//     }
//   });
  
//   myPromise
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => console.log('Operations have ended.'));

//-------------------------------------------------------------------------------------------------------------------
//Promise All
// const promise1 = Promise.resolve(3);
// const promise2 = 'resolve';//Promise.reject('error');
// const promise3 = new Promise((resolve, reject) => {
//   let  x=false
//   if(x){
//     resolve('Fulfilled');
//   }else{
//     reject('Rejected')
//   }
// });

// Promise.all([promise1, promise2, promise3])
// .then((values) => {
//     console.log(values);
// })
// .catch((err) => {
//     console.log(err);
// });

//-------------------------------------------------------------------------------------------------------------------
// var add = function(x, y) { 
//      return new Promise((resolve,reject) => { 
//      var sum = x + y; 
//       if(sum)
//      { 
//       resolve(sum);
//      } else { 
//         reject(Error("Could not add the two values!")); 
//       } 
//     }); 
//   }; 
//   add(2,2)
//     .then((added) => {
//       console.log(added)
//       return added*2;
//     }).then((added)=>{
//       console.log(added)
//       return added;
//      })
//      .catch((err) => {
//       console.log(err);
//     });
//-------------------------------------------------------------------------------------------------------------------
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('The first promise has resolved');
//       resolve(10);
//     }, 1000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('The second promise has resolved');
//       resolve(20);
//     }, 2000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('The third promise has resolved');
//       resolve(30);
//     }, 3000);
//   });
  
//   Promise.all([p1, p2, p3]).then((results) => {
//     const total = results.reduce((p, c) => p + c);
  
//     console.log(`Results: ${results}`);
//     console.log(`Total: ${total}`);
//   });
//-------------------------------------------------------------------------------------------------------------------

// async function f() {
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 1000)
//     });
  
//     let result = await promise; // wait until the promise resolves
  
//     console.log(result); // "done!"
// }
  
// f();
//-------------------------------------------------------------------------------------------------------------------

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('The first promise has resolved');
//       resolve(10);
//     }, 1000);
//   });
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('The second promise has resolved');
//       resolve(20);
//     }, 2000);
//     // resolve(20)
//     // reject('error')
//   });
// const allPromise = Promise.all([promise1, promise2]);

// try {
//   const values = await allPromise;
//   console.log(values); // [resolvedValue1, resolvedValue2]
// } catch (error) {
//   console.log(error); // rejectReason of any first rejected promise
// }
//-------------------------------------------------------------------------------------------------------------------

// const a = new Promise((_, reject) => setTimeout(reject,  100, new Error("a")));
// const b = new Promise((resolve)   => setTimeout(resolve, 200, "b"));

// Promise.race([a, b]).then(
//     value => {
//         console.log(`race: fulfilled with ${value}`);
//     },
//     rej => {
//         console.log(`race: rejected with ${rej.message}`);
//     }
// );

// Promise.any([a, b]).then(
//     (value) => {
//         console.log(`any:  fulfilled with ${value}`);
//     },
//     (rej) => {
//         console.log(`any:  rejected with ${rej.errors.map(({message}) => message).join()}`);
//     }
// );
//-------------------------------------------------------------------------------------------------------------------

// const promise1 = Promise.reject('promise1');
// const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'promise2'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 300, 'promise3'));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then(
//     (rej) => {
//         console.log(`any: fulfilled with ${value}`);
//     },
//     (reason) => {
//         console.log(`any: rejected with ${rej}`);
//     }
// );
// Promise.race(promises).then(
//     (value) => {
//         console.log(`race: fulfilled with ${value}`);
//     },
//     (rej) => {
//         console.log(`race: rejected with ${rej}`);
//     }
// );
//-------------------------------------------------------------------------------------------------------------------

const promise1 = new Promise((resolve, reject) => {
    setTimeout(reject, 500, 'promise1');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'promise2');
  });
  
  Promise.race([promise1, promise2]).then((value) => {
    console.log(`race: fulfilled with ${value}`);
    // Both resolve, but promise2 is faster
  },(rej) => {
     console.log(`race: rejected with ${rej}`);
    });