/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const ransomNoteDict = ransomNote.split('').reduce((acc, cur) => {
    acc[cur] = (acc[cur] ?? 0) + 1;
    return acc;
  }, {});

  magazine.split('').forEach((char) => {
    if (ransomNoteDict[char] > 0) {
      ransomNoteDict[char] = ransomNoteDict[char] - 1;
    }
  });

  return Object.values(ransomNoteDict).every((value) => value === 0);
};
