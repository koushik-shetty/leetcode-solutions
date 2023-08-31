var singleNonDuplicate = function(nums) {
    let l = 0, m = 0, r = nums.length - 1;
    while (l <= r) {
        m = l + Math.floor((r + l) / 2)
        if (nums[m] === nums[m - 1]) {
            r = m;
        } else if (nums[m] === nums[m + 1]) {
            l = m + 1;
        } else {
            return nums[m];
        }
    }
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
