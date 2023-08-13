// https://leetcode.com/problems/design-add-and-search-words-data-structure
class WordDictionary {
  constructor() {
    this.trie = {};
  }

  addWord(word) {
    let cursor = this.trie;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!cursor[char]) {
        cursor[char] = {
          isEnd: i === word.length - 1,
        };
      } else {
        cursor[char].isEnd = cursor[char].isEnd || i === word.length - 1;
      }

      cursor = cursor[char];
    }
  }

  search(word) {
    return this.recursiveSearch(word, 0, this.trie);
  }

  recursiveSearch(word, charIndex, trie) {
    const char = word[charIndex];

    if (charIndex === word.length - 1) {
      if (char === ".") {
        return Object.values(trie).some((charNode) => charNode.isEnd);
      }

      const charNode = trie[char];
      return charNode ? charNode.isEnd : false;
    }

    if (char === ".") {
      for (const key in trie) {
        if (key === "isEnd") {
          continue;
        }

        if (this.recursiveSearch(word, charIndex + 1, trie[key])) {
          return true;
        }
      }

      return false;
    }

    const charNode = trie[char];

    if (!charNode) {
      return false;
    }

    return this.recursiveSearch(word, charIndex + 1, charNode);
  }
}
