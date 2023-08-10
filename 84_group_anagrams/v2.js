function groupAnagrams(strs) {
  // declare result with type string[][]
  // create a array with element like { sorted: 'aet', original: 'tea' } and then sort by sorted
  // iterate over derived array, whenever hit new sorted, push new subarray in result

  const convertedArray = strs.map((str) => ({
    original: str,
    sorted: str.split("").sort().join(""),
  }));

  convertedArray.sort((a, b) => a.sorted - b.sorted);

  const result = [];
  let lastSorted;

  convertedArray.forEach((element) => {
    if (lastSorted !== element.sorted) {
      lastSorted = element.sorted;
      result.push([element.original]);
    } else {
      result[result.length - 1].push(element.original);
    }
  });

  return result;
}
