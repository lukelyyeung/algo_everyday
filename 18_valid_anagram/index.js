/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const mapOfS = s.split('').reduce((acc, char) => {
    acc[char] = (acc[char] ?? 0) + 1;
    return acc;
  }, {});

  const mapOfT = t.split('').reduce((acc, char) => {
    acc[char] = (acc[char] ?? 0) + 1;
    return acc;
  }, {});

  return Object.keys(mapOfS).every((char) => mapOfS[char] === mapOfT[char]) && s.length === t.length;
};
