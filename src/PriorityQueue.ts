export default class PriorityQueue {
  collection: any[] = [];

  printCollection(): void {
    console.log(this.collection);
  }

  enqueue(element: any): void {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          // checking priorities
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  }

  dequeue(): any {
    const value = this.collection.shift();
    return value[0];
  }

  first(): any {
    return this.collection[0];
  }

  last(): any {
    return this.collection[this.collection.length - 1];
  }

  size(): number {
    return this.collection.length;
  }

  isEmpty(): boolean {
    return this.collection.length === 0;
  }
}
