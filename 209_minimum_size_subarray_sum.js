var minSubArrayLen = function(target, nums) {
    let l = 0, r = 0, sum = 0, minLen = Infinity;

    while (l < nums.length && r < nums.length) {
        if (l === r) {
            sum = nums[l];
            if (nums[l] >= target) {
                minLen = Math.min(minLen, 1);
                l++;
            }
            r++
            sum += nums[r];
        }
        else if (sum >= target) {
            minLen = Math.min(minLen, r - l + 1)
            sum -= nums[l];
            l++;
        }
        else {
            r++
            sum += nums[r]
        }
    }
    return minLen != Infinity ? minLen : 0;
};


console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
