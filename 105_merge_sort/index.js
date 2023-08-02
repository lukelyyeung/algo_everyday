function mergeSort(input) {
  if (input.length <= 1) {
    return input;
  }

  const center = Math.floor(input.length / 2);

  return doMerge(mergeSort(input.slice(0, center)), mergeSort(input.slice(center)));
}

function doMerge(input1, input2 = []) {
  const result = new Array(input1.length + input2.length);

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < input1.length || pointer2 < input2.length) {
    const candidate1 = input1[pointer1];
    const candidate2 = input2[pointer2];

    if (candidate1 <= candidate2 || typeof candidate2 !== "number") {
      result[pointer1 + pointer2] = candidate1;
      pointer1++;
      continue;
    }

    result[pointer1 + pointer2] = candidate2;
    pointer2++;
  }

  return result;
}

console.log(mergeSort([1, 3, 0, 2, -99]));
