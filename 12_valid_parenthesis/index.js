/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  // Create array as stacks,
  // Iterate string
  // If right side push to the stack
  // If left side, check if the last pushed bracket is corresponding
  //    return false if false
  //    pop the last opening bracket if true
  // finally, return if all stacks are empty

  const stack = [];

  const bracketPairingMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // If it is enclosing bracket
    if ([')', '}', ']'].includes(char)) {
      if (stack.length === 0) {
        return false;
      }

      if (stack[stack.length - 1] !== bracketPairingMap[char]) {
        return false;
      }

      stack.pop();
    }

    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

console.log(isValid('(]'));
console.log(isValid('()'));
console.log(isValid('()[]{}'));
