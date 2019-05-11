export default class Stack {
  count: number = 0;
  storage: {[key: number]: number | string} = {};
  // Adds a value onto the end of the stack
  push(value: number | string): void {
    this.storage[this.count] = value;
    this.count++;
  }
  // Removes and returns the value at the end of the stack
  pop(): any {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  size(): number {
    return this.count;
  }
  // Returns the value at the end of the stack
  peek(): any {
    return this.storage[this.count - 1];
  }
}
