const assert = require('assert');

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare(s, t) {
  let sPointer = s.length - 1;
  let tPointer = t.length - 1;

  while (sPointer >= 0 || tPointer >= 0) {
    if (s[sPointer] === '#') {
      let deleteCount = 1;
      sPointer--;
      while (deleteCount > 0 || s[sPointer] === '#') {
        if (s[sPointer] === '#') {
          deleteCount++;
        } else {
          deleteCount--;
        }

        sPointer--;
      }
    }

    if (t[tPointer] === '#') {
      let deleteCount = 1;
      tPointer--;
      while (deleteCount > 0 || t[tPointer] === '#') {
        if (t[tPointer] === '#') {
          deleteCount++;
        } else {
          deleteCount--;
        }

        tPointer--;
      }
    }

    if ((t[tPointer] ?? '') !== (s[sPointer] ?? '')) {
      return false;
    }

    tPointer--;
    sPointer--;
  }

  return true;
}

assert.equal(backspaceCompare('ab#c', 'ad#c'), true);
assert.equal(backspaceCompare('ab##', 'c#d#'), true);
assert.equal(backspaceCompare('a#c' ,'b'), false);
assert.equal(backspaceCompare('a#c' ,''), false);
assert.equal(backspaceCompare('a#c#' ,'b'), false);
