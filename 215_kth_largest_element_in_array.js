function kthLargest(num, k) {
}

function quickSelect(nums, first, last) {
    pivot = nums[last]
    let swapSpot = first;
    for (let i = first; i < last; i++) {
        if (nums[i] < nums[swapSpot]) {

        }
    }

}

console.log(kthLargest([3, 2, 1, 5, 6, 4], 2))
console.log(kthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
