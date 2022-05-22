/**
 * @typedef {Record<string, { timestamps: number[]; values: any[]; }>} Store
 * User type definition
 * @typedef {Object} TimeMap
 * @property {Store} store
 */
class TimeMap {
  store = new Map();

  /**
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @return {void}
   */
  set(key, value, timestamp) {
    const data = this.store.get(key);

    if (!data) {
      this.store.set(key, {
        timestamps: [timestamp],
        values: [value],
      });

      return;
    }

    const timestamps = data.timestamps;
    const index = this.getNearestTimestampIndex(timestamps, timestamp);

    if (timestamps[index] === timestamp) {
      data.values[index] = value;
      return;
    }

    const indexToInsert = timestamps[index] > timestamp ? index : index + 1;
    data.timestamps.splice(indexToInsert, 0, timestamp);
    data.values.splice(indexToInsert, 0, value);
  }

  /**
   * @param {string} key
   * @param {number} timestamp
   * @return {string}
   */
  get(key, timestamp) {
    const data = this.store.get(key);

    if (!data) {
      return '';
    }

    const timestamps = data.timestamps;
    let index = this.getNearestTimestampIndex(timestamps, timestamp);

    if (timestamps[index] === timestamp) {
      return data.values[index];
    }

    index = timestamps[index] > timestamp ? index - 1 : index;

    return data.values[index] ?? '';
  }

  /**
   * @param {number[]} timestamps
   * @return {number}
   */
  getNearestTimestampIndex(timestamps, timestamp) {
    let left = 0;
    let right = timestamps.length - 1;

    while (left < right) {
      const center = Math.floor((left + right) / 2);

      if (timestamps[center] === timestamp) {
        return center;
      }

      if (timestamps[center] > timestamp) {
        right = center - 1;
      } else {
        left = center + 1;
      }
    }

    return left;
  }
}
/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
