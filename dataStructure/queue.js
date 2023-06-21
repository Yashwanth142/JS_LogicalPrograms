class Queue {
    constructor() {
      this.items = [];
    }
    enqueue(element) {
      this.items.push(element);
    }
    dequeue() {
      return this.items.shift();
    }
    isEmpty() {
      return this.items.length === 0;
    }
    peek() {
      if (!this.isEmpty()) {
        return this.items[0];
      }
      return null;
    }
    size() {
      return this.items.length;
    }
    print(){
      console.log(this.items.toString());
    }
  
  }
  
  const q=new Queue
  
  console.log(q.isEmpty());
  
  q.enqueue(10)
  q.enqueue(20)
  q.enqueue(30)
  q.enqueue(40)
  
  
  console.log(q.size());
  
  q.print()
  
  console.log(q.peek());
  console.log(q.dequeue());
  