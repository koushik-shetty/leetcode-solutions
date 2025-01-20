var subsets = function(nums) {
    return helper(nums, 0, []);
};

var helper = function(nums, idx, subset) {
    if(idx >= nums.length) {
        return [subset] ;
    }
    return [...helper(nums, idx+1, [...subset, nums[idx]]),...helper(nums, idx+1, subset)];
}

console.log(subsets([5, 1,6])); // 28
console.log(subsets([1,3])); // 6