var subsetXORSum = function(nums) {
    return helper(nums, 0, []);
};

var helper = function(nums, idx, subset) {
    if(idx === nums.length) {
        return subset.reduce((acc, cur) => acc ^ cur, 0);
    }
    return helper(nums, idx+1, [...subset, nums[idx]]) + helper(nums, idx+1, subset);
}

console.log(subsetXORSum([5, 1,6])); // 28
console.log(subsetXORSum([1,3])); // 6