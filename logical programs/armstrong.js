function armstrong(num) {
    let len = num.toString().length;
    let sum = 0;
    let temp = num;
    while (temp > 0) {
      let rem = temp % 10;
      sum = sum + rem ** len;
      temp = parseInt(temp / 10);
    }
    if (sum == num) {
      console.log("armstrong");
    } else {
      console.log("not armstrong");
    }
  }
  
  armstrong(1634)