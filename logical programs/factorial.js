function factorialOfNum(num) {
    if (num < 0) {
      console.log("Factorial of negative num does not exists");
    } else if (num == 0) {
      console.log(`Factorial of num ${num} is 1 `);
    } else {
      let fact = 1;
      for (let i = 1; i <= num; i++) {
        fact = fact * i;
      }
      console.log(`Factorial of num ${num} is ${fact}`);
    }
  }
  
  factorialOfNum(5);