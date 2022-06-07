var MedianFinder = function () {
  this.items = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let left = 0;
  let right = this.items.length - 1;

  while (left < right) {
    const center = Math.floor((left + right) / 2);

    if (this.items[center] === num) {
      this.items.splice(center + 1, 0, num);
      return;
    }

    if (num > this.items[center]) {
      left = center + 1;
    } else {
      right = center - 1;
    }
  }

  if (this.items[left] > num) {
    this.items.splice(left, 0, num);
    return;
  }

  this.items.splice(left + 1, 0, num);
  return;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.items.length % 2 === 1) {
    return this.items[Math.floor(this.items.length / 2)];
  }

  const upper = Math.floor(this.items.length / 2); 
  return (this.items[upper] + this.items[upper - 1]) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const finder=  new MedianFinder();
finder.addNum(1);
finder.addNum(2);
// finder.addNum(1.2);
// finder.addNum(105);
// finder.addNum(3);
// console.log(finder.items);
console.log(finder.findMedian());