class TrieNode {
  public map: { [key: string]: TrieNode } = {};
  public end = false;
}

/*
node{ a: node{ end:true} }
*/
class WordDictionary {
  public node = new TrieNode();
  constructor() {}

  addWord(word: string): void {
    let node = this.node;
    for (let letter of word) {
      if (!(letter in node.map)) {
        node.map[letter] = new TrieNode();
      }
      node = node.map[letter];
    }
    node.end = true;
  }

  search(word: string, ind = 0, node: TrieNode | null = null): boolean {
    if (node === null) node = this.node;
    for (let i = ind; i < word.length; i++) {
      if (word[i] === ".") {
        for (let letter in node.map) {
          if (this.search(word, i + 1, node.map[letter])) return true;
        }
        return false;
      } else {
        if (!(word[i] in node.map)) return false;
        node = node.map[word[i]];
      }
    }
    return node.end;
  }
}

class WordDictionaryMap {
  public map: { [key: string]: true }[] = [];
  constructor() {}

  addWord(word: string): void {
    if (!this.map[word.length]) {
      this.map[word.length] = {};
    }
    this.map[word.length][word] = true;
  }

  search(word: string): boolean {
    // word < 25
    // map.size < 10^4
    if (!this.map[word.length]) return false;
    if (word.indexOf(".") === -1) {
      return word in this.map[word.length];
    }
    let i = 0;
    for (let storedWord in this.map[word.length]) {
      for (i = 0; i < word.length; i++) {
        if (word[i] !== storedWord[i] || word[i] !== ".") break;
      }
      if (i === word.length) return true;
    }
    return false;
    // const len = word.length;
    // if (!this.map[len]) return false;
    // const map = this.map[len];
    // if (word in map) return true;   // very inefficient
    // for (const key in map) {
    //   let i = 0;
    //   for (i; i < len; i++) {
    //     if (word[i] === ".") continue;
    //     if (key[i] !== word[i]) break;
    //   }
    //   if (i === len) return true;
    // }
    // return false;
  }
}

export { WordDictionary };

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
/*

{b:{
    a:{
        d:"#"
    }
 c:{

 }

}}
 how about 2d [[a~z], [a~z],..]
*/

/*
what we have
{a:string, b:number, c:boolean}
we want to declare another object type
{a:(string)=>string, b:(number)=>number, c:boolean=>boolean}
*/
type MapObjectType<T> = {
  [Property in keyof T]: (val: T[Property]) => T[Property];
};

type Original = {
  a: string;
  b: number;
  c: boolean;
};

type newType = MapObjectType<Original>;

const nt: newType = {
  a: (val) => val + "abc",
  b: (num) => num + 100,
  c: (boolean) => boolean || true,
};
