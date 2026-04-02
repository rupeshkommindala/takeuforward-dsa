// Linear Search

// (TC:O(n), SC:O(1))
class Solution {
  linearSearch(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        return i;
      }
    }
    return -1;
  }
}
