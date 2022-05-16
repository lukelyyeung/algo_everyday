const assert = require('node:assert');

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // Topological sorting

  // need to know
  // 1. each courses's number of prerequisites
  // 2. courses depends on this course

  // looping the courses that has 0 prerequisites
  // select it, add 1 to the achievableCourseCount
  // Reduce the dependent courses's prerequisites count by 1
  // Push to the stack if reduced to 0

  // until there is no courses without 0 prerequisites
  // return achievableCourseCount >= numCourses

  const courseMap = prerequisites.reduce((acc, [course, prerequisite]) => {
    acc[course] = acc[course] ?? { prerequisiteCount: 0, dependents: [] };
    acc[course].prerequisiteCount = acc[course].prerequisiteCount + 1;

    acc[prerequisite] = acc[prerequisite] ?? { prerequisiteCount: 0, dependents: [] };
    acc[prerequisite].dependents.push(course);

    return acc;
  }, {});

  let achievableCourseCount = 0;
  const queue = [];

  for (let i = 0; i < numCourses; i++) {
    if (!courseMap[i]) {
      achievableCourseCount++;
    } else if (courseMap[i].prerequisiteCount === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const course = queue.shift();
    achievableCourseCount++;

    if (achievableCourseCount >= numCourses) {
      return true;
    }

    courseMap[course].dependents.forEach((dependent) => {
      courseMap[dependent].prerequisiteCount = courseMap[dependent].prerequisiteCount - 1;

      if (courseMap[dependent].prerequisiteCount === 0) {
        queue.push(+dependent);
      }
    });
  }

  return achievableCourseCount >= numCourses;
};

assert.equal(canFinish(2, [[0, 1]]), true);
assert.equal(canFinish(2, [[1, 0]]), true);
assert.equal(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ]),
  false,
);
assert.equal(
  canFinish(3, [
    [1, 0],
    [1, 2],
    [0, 1],
  ]),
  false,
);
assert.equal(
  canFinish(5, [
    [1, 4],
    [2, 4],
    [3, 1],
    [3, 2],
  ]),
  true,
);
assert.equal(
  canFinish(8, [
    [1, 0],
    [2, 6],
    [1, 7],
    [6, 4],
    [7, 0],
    [0, 5],
  ]),
  true,
);
