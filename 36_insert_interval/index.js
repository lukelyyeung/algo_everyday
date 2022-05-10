// iterate intervals
// check if current interval overlapped with new interval
// if yes, update the startOverlapIndex and endOverlapIndex

// check if startOverlapIndex is undefined
// if yes, update newInterval[1] to intervals[endOverlapIndex][1] and drop delete the startOverlapIndex - endOverlapIndex
// else, replace the startOverlapIndex - endOverlapIndex with [intervals[startOverlapIndex][0], intervals[endOverlapIndex][1]]
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let index = 0;
  let overlapStartIndex;
  let overlapEndIndex;
  let indexToInsert;

  while (index < intervals.length) {
    const interval = intervals[index];

    // indexToInsert = interval[0] > newInterval[1] ? index : index + 1;

    if (newInterval[0] > interval[1]) {
      indexToInsert = index + 1;
    } else if (interval[0] > newInterval[1]) {
      indexToInsert = indexToInsert ?? index;
    }

    if (areIntervalOverlapped(interval, newInterval)) {
      overlapStartIndex = overlapStartIndex ?? index;
      overlapEndIndex = index;
    }
    index++;
  }

  if (overlapEndIndex === undefined) {
    intervals.splice(indexToInsert, 0, newInterval);
  } else {
    intervals.splice(overlapStartIndex, overlapEndIndex - overlapStartIndex + 1, [
      Math.min(intervals[overlapStartIndex][0], newInterval[0]),
      Math.max(intervals[overlapEndIndex][1], newInterval[1]),
    ]);
  }

  return intervals;
};

/**
 * @param {number[]} intervalA
 * @param {number[]} intervalB
 * @return {boolean}
 */
function areIntervalOverlapped(intervalA, intervalB) {
  return (
    //  |------|
    //      |------|

    // |--------|
    //   |---|
    (intervalA[0] <= intervalB[1] && intervalA[1] >= intervalB[0]) ||
    //      |------|
    //   |-----|

    //   |---|
    // |--------|
    (intervalB[0] <= intervalA[1] && intervalB[1] >= intervalA[0])
  );
}

// console.log(
//   insert(
//     [
//       [1, 3],
//       [6, 9],
//     ],
//     [2, 5],
//   ),
// );

// console.log(
//   insert(
//     [
//       [1, 2],
//       [3, 5],
//       [6, 7],
//       [8, 10],
//       [12, 16],
//     ],
//     [4, 8],
//   ),
// );
// console.log(
//   insert(
//     [
//       [1, 2],
//       [7, 10],
//       [11, 16],
//     ],
//     [4, 7],
//   ),
// );
console.log(insert([[1, 5]], [6, 8]));
console.log(
  insert(
    [
      [2, 5],
      [6, 7],
      [8, 9],
    ],
    [0, 1],
  ),
);
console.log(insert([[1, 5]], [0, 6]));
