// Maximum Consecutive Ones

// (TC:O(n), SC:O(1))
class Solution {
  findMaxConsecutiveOnes(nums) {
    let maxCount = 0;
    let currCount = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
        currCount++;
        maxCount = Math.max(currCount, maxCount);
      } else {
        currCount = 0;
      }
    }
    return maxCount;
  }
}

// (TC:O(n), SC:O(1))
class Solution {
  findMaxConsecutiveOnes(nums) {
    let maxCount = 0;
    let currCount = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
        currCount++;
      } else {
        maxCount = Math.max(currCount, maxCount);
        currCount = 0;
      }
    }
    return Math.max(currCount, maxCount);
  }
}
