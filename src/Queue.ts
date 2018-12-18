export default class Queue {
  collection: any[] = [];

  print(): void {
    console.log(this.collection);
  }

  enqueue(element: any) {
    this.collection.push(element);
  }

  dequeue(): void {
    return this.collection.shift();
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
