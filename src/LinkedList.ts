class BinaryNode {
  constructor(
    public element: BinaryNode | null,
    public next: BinaryNode | null,
  ) {
    this.element = element;
    this.next = null;
  }
}

export default class LinkedList {
  length = 0;
  head: BinaryNode | null = null;

  getSize() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  add(element: any): void {
    const node = new BinaryNode(element, null);
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    this.length++;
  }

  remove(element: any): void {
    let currentNode = this.head;
    let previousNode;
    if (currentNode && currentNode.element === element) {
      this.head = currentNode.next;
    } else {
      while (currentNode && currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      if (previousNode && currentNode) {
        previousNode.next = currentNode.next;
      }
    }

    this.length--;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  indexOf(element: any): number {
    let currentNode = this.head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }

    return -1;
  }

  elementAt(index: number): BinaryNode | null | void {
    let currentNode = this.head;
    let count = 0;
    while (count < index) {
      count++;
      if (currentNode) {
        currentNode = currentNode.next;
      }
    }
    if (currentNode) {
      return currentNode.element;
    }
  }

  addAt(index: number, element: BinaryNode): boolean | void {
    const node = new BinaryNode(element, null);

    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if (index > this.length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      this.head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        if (currentNode) {
          currentNode = currentNode.next;
        }
      }
      node.next = currentNode;
      if (previousNode) {
        previousNode.next = node;
      }
    }
    this.length++;
  }

  removeAt(index: number): BinaryNode | null | void {
    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0 && currentNode) {
      this.head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        if (currentNode) {
          currentNode = currentNode.next;
        }
      }
      if (previousNode && currentNode) {
        previousNode.next = currentNode.next;
      }
    }
    this.length--;
    if (currentNode) {
      return currentNode.element;
    }
  }
}
