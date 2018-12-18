const Node = function(element) {
  this.element = element;
  this.next = null;
};

export default class LinkedList {
  length = 0;
  head = null;

  getSize() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  add(element) {
    const node = new Node(element);
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

  remove(element) {
    let currentNode = this.head;
    let previousNode;
    if (currentNode.element === element) {
      this.head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    this.length--;
  }

  isEmpty() {
    return this.length === 0;
  }

  indexOf(element) {
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

  elementAt(index) {
    let currentNode = this.head;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  }

  addAt(index, element) {
    const node = new Node(element);

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
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    this.length++;
  }

  removeAt(index) {
    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      this.head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this.length--;
    return currentNode.element;
  }
}
