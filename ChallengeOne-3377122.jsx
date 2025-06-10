class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let current = this.root;
        
        for (let letter of word) {
            if (!current.children[letter]) {
                current.children[letter] = new TrieNode();
            }
            current = current.children[letter];
        }
        
        current.isEndOfWord = true;
    }
    
    search(word) {
        let current = this.root;
        
        for (let letter of word) {
            if (!current.children[letter]) {
                return false;
            }
            current = current.children[letter];
        }
        
        return current.isEndOfWord;
    }
    
    startsWith(prefix) {
        let current = this.root;
        
        for (let letter of prefix) {
            if (!current.children[letter]) {
                return false;
            }
            current = current.children[letter];
        }
        
        return true;
    }
}

let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));
console.log(trie.search("app"));
console.log(trie.startsWith("app"));
trie.insert("app");
console.log(trie.search("app"));
