/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // pop the last digit of a and b
  // add digitA, digitB and carryOver tgt, recalculate carryOver

  let result = '';
  let carryOver = 0;

  while (a.length || b.length) {
    let digitA = +(a[a.length - 1] ?? 0);
    a = a.substring(0, a.length - 1);
    let digitB = +(b[b.length - 1] ?? 0);
    b = b.substring(0, b.length - 1);

    const sum = digitA + digitB + carryOver;
    carryOver = Math.floor(sum / 2);
    result = (sum % 2).toString() + result;
  }

  return carryOver > 0 ? carryOver.toString() + result : result;
};

// console.log(addBinary('11', '1'));
// console.log(addBinary('1010', '1011'));
console.log(addBinary('1111', '1111'));
