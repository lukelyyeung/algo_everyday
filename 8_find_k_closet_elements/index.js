/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function findClosestElements(arr, k, x) {
  let start = 0;
  let end = arr.length - 1;

  if (x <= arr[start]) {
    return arr.slice(0, k);
  }

  if (x >= arr[end]) {
    return arr.slice(end + 1 - k, end + 1);
  }

  while (start <= end) {
    const center = Math.floor((start + end) / 2);

    const isCenterCloserThanLeftSide = isACloserToXThanOneSide(
      arr,
      center,
      x,
      -1,
    );
    const isCenterCloserThanRightSide = isACloserToXThanOneSide(
      arr,
      center,
      x,
      +1,
    );

    if (
      arr[center] === x ||
      (isCenterCloserThanLeftSide && isCenterCloserThanRightSide)
    ) {
      return getClosestElementsOfIndex(arr, k, center, x);
    } else if (isACloserToXThanOneSide(arr, center, x, -1)) {
      // Search Right hand side
      start = center + 1;
    } else {
      end = center - 1;
      // Search Left hand side
    }
  }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} index
 * @return {number[]}
 */
function getClosestElementsOfIndex(arr, k, index, x) {
  // console.log({ arr, k, index, x });
  const result = [arr[index]];
  let left = index - 1;
  let right = index + 1;

  while (result.length !== k) {
    if (
      Number.isInteger(arr[left]) &&
      isAClosetToXThanB(arr[left], arr[right], x)
    ) {
      result.unshift(arr[left]);
      left--;
    } else {
      result.push(arr[right]);
      right++;
    }
  }

  return result;
}

function isAClosetToXThanB(a, b, x) {
  if (typeof a === 'undefined' || typeof b === 'undefined') {
    return typeof a !== 'undefined';
  }

  const result =
    Math.abs(a - x) < Math.abs(b - x) ||
    (Math.abs(a - x) === Math.abs(b - x) && b > a);
  return result;
}

function isACloserToXThanOneSide(arr, i, x, modifier) {
  let index = i + modifier;

  while (arr[i] === arr[index]) {
    index += modifier;
  }

  return isAClosetToXThanB(arr[i], arr[index], x);
}
