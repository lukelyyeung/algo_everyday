/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
  let hare = nums[0];
  let tortoise = nums[0];

  while (true) {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];

    if (tortoise === hare) {
      break;
    }
  }

  // Trace back where the cycle begin
  let pointer1 = nums[0];
  let pointer2 = tortoise; 

  while (pointer1 !== pointer2) {
    pointer1 = nums[pointer1];
    pointer2 = nums[pointer2];
  }

  return pointer1;
}

console.log(findDuplicate([3,1,3,4,2]));
  