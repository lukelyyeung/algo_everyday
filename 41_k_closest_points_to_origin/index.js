/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  return points
    .sort((a, b) => getEuclideanDist(a) - getEuclideanDist(b))
    .slice(0, k);
};

function getEuclideanDist([x1, y1], [x2, y2] = [0, 0]) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}
