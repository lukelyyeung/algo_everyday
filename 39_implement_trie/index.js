class Trie {
  sudNodes = {};

  constructor(prefix) {
    this.prefix = prefix;
  }

  /**
   * @param  {string} word
   */
  insert(word) {
    // create cursor
    // iterate through word
    // check if subNodes with char found
    // create if not found
    let cursor = this.sudNodes;

    word.split('').forEach((char) => {
      cursor[char] = cursor[char] ?? {};
      cursor = cursor[char];
    });

    cursor.isAWord = true;
  }

  /**
   * @param  {string} word
   */
  search(word) {
    // iterate through word
    // go down until not found or end
    // return true if not ended earlier
    let cursor = this.sudNodes;

    for (let i = 0; i < word.length; i++) {
      cursor = cursor[word[i]];

      if (!cursor) {
        return false;
      }
    }

    return cursor.isAWord ?? false;
  }

  /**
   * @param  {string} str
   */
  startsWith(str) {
    // iterate through word
    // go down until not found or end
    // return true if not ended earlier

    let cursor = this.sudNodes;

    for (let i = 0; i < str.length; i++) {
      cursor = cursor[str[i]];

      if (!cursor) {
        return false;
      }
    }

    return true;
  }
}
