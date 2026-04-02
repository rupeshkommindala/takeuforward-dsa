// Missing Number

// (TC:O(n), SC:O(1))
class Solution {
  missingNumber(nums) {
    let n = nums.length;
    let totalSum = Math.floor((n * (n + 1)) / 2);
    let partialSum = 0;
    for (let i = 0; i < n; i++) {
      partialSum += nums[i];
    }
    return totalSum - partialSum;
  }
}

// (TC:O(n), SC:O(1))
class Solution {
  missingNumber(nums) {
    let xor = nums.length;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
      xor = xor ^ i ^ nums[i];
    }
    return xor;
  }
}
