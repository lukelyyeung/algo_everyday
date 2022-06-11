const assert = require('assert');

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord, endWord, wordList) {
  if (!wordList.some((word) => word === endWord)) {
    return 0;
  }

  const comboMap = {};

  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i];

    for (let j = 0; j < word.length; j++) {
      const wildCardWord = word.substring(0, j) + '*' + word.substring(j + 1);
      comboMap[wildCardWord] = comboMap[wildCardWord] ?? [];
      comboMap[wildCardWord].push(word);
    }
  }

  const queue = [];
  const visited = {};
  queue.push({ word: beginWord, level: 1 });

  // @TODO Is it possible to have recursive version ?
  while (queue.length) {
    const { word, level } = queue.shift();

    for (let i = 0; i < word.length; i++) {
      const wildCardWord = word.substring(0, i) + '*' + word.substring(i + 1);

      if (!comboMap[wildCardWord]) {
        continue;
      }

      for (let j = 0; j < comboMap[wildCardWord].length; j++) {
        const adjacentWord = comboMap[wildCardWord][j];

        if (adjacentWord === endWord) {
          return level + 1;
        }

        if (!visited[adjacentWord]) {
          visited[adjacentWord] = true;
          queue.push({ level: level + 1, word: adjacentWord });
        }
      }
    }
  }

  return 0;
}

assert.deepStrictEqual(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']), 5);
assert.deepStrictEqual(ladderLength('hot', 'dog', ['hot', 'dog']), 0);
assert.deepStrictEqual(ladderLength('hot', 'dog', ['hot', 'dog', 'dot']), 3);
assert.deepStrictEqual(
  ladderLength('qa', 'sq', [
    'si',
    'go',
    'se',
    'cm',
    'so',
    'ph',
    'mt',
    'db',
    'mb',
    'sb',
    'kr',
    'ln',
    'tm',
    'le',
    'av',
    'sm',
    'ar',
    'ci',
    'ca',
    'br',
    'ti',
    'ba',
    'to',
    'ra',
    'fa',
    'yo',
    'ow',
    'sn',
    'ya',
    'cr',
    'po',
    'fe',
    'ho',
    'ma',
    're',
    'or',
    'rn',
    'au',
    'ur',
    'rh',
    'sr',
    'tc',
    'lt',
    'lo',
    'as',
    'fr',
    'nb',
    'yb',
    'if',
    'pb',
    'ge',
    'th',
    'pm',
    'rb',
    'sh',
    'co',
    'ga',
    'li',
    'ha',
    'hz',
    'no',
    'bi',
    'di',
    'hi',
    'qa',
    'pi',
    'os',
    'uh',
    'wm',
    'an',
    'me',
    'mo',
    'na',
    'la',
    'st',
    'er',
    'sc',
    'ne',
    'mn',
    'mi',
    'am',
    'ex',
    'pt',
    'io',
    'be',
    'fm',
    'ta',
    'tb',
    'ni',
    'mr',
    'pa',
    'he',
    'lr',
    'sq',
    'ye',
  ]),
  5,
);
