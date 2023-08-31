function freqNum(nums = [], limit) {
    let l = 0, r = 0, maxLen = -Infinity;
    nums.sort((a, b) => a - b);
    console.log(nums)

    let remK = limit, winMax = -Infinity, currSum = 0;
    while (r < nums.length) {
        winMax = Math.max(winMax, nums[r]);
        currSum += nums[r];
        console.log(`l: ${l}, r: ${r}, ml: ${maxLen}, cs: ${currSum}, wm: ${winMax}`)
        if (winMax * (r - l + 1) <= (currSum + limit)) {
            maxLen = Math.max(maxLen, r - l + 1)
            r++
        } else {
            l++;
            currSum -= nums[l - 1];
        }
    }
    return maxLen;
}

console.log("freqNum: ", freqNum([1, 2, 4], 5));
console.log("freqNum: ", freqNum([1, 4, 8, 13], 5));
console.log("freqNum: ", freqNum([3, 9, 6], 2));
console.log("freqNum: ", freqNum([1, 2, 1, 2, 1, 3, 1, 3], 5));
