class Stack {
    constructor() {
      this.items = [];
    }
    push(element) {
      this.items.push(element);
    }
    pop() {
      if (this.items.length === 0) {
        console.log(this.items)
        return "empty";
      }
      return this.items.pop();
    }
    peek() {
      return this.items[this.items.length - 1];
    }
    isEmpty() {
      return this.items.length === 0;
    }
    size() {
      return this.items.length;
    }
    print() {
      console.log(this.items.toString());
    }
  }
  
  const stack = new Stack();
  
  //console.log(stack.pop());
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.push(80);
  
  console.log(stack.size());
  
  console.log(stack.peek());
  console.log(stack.pop());
  console.log(stack.isEmpty());
  stack.print();