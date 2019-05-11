interface NodeType {
  keys: Map<any, any>;
  end: boolean;
  isEnd: () => boolean;
  setEnd: () => void;
}

class Node implements NodeType {
  keys = new Map();
  end: boolean = false;

  public isEnd(): boolean {
    return this.end;
  }

  public setEnd(): void {
    this.end = true;
  }
}

export default class Trie {
  root = new Node();

  add(input: string, node = this.root): void {
    if (input.length === 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  }

  isWord(word: string): boolean {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }
    return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
  }

  print() {
    const words = new Array();
    const search = (node: Node, str: string) => {
      if (node.keys.size !== 0) {
        for (const letter of node.keys.keys()) {
          search(node.keys.get(letter), str.concat(letter));
        }
        if (node.isEnd()) {
          words.push(str);
        }
      } else {
        return str.length > 0 && words.push(str);
      }
    };
    search(this.root, '');
    return words.length > 0 ? words : null;
  }
}
