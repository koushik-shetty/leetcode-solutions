package main

import (
	"math"
)

func findUnsortedSubarray(nums []int) int {
	l := int(math.Floor(float64(len(nums) / 2)))
	r := l
	high, low := nums[l], nums[l]
	start, end := l, l
	for l >= 0 {
		if nums[l] >= low {
			start = l
		}
		if nums[l] < low {
			low = nums[l]
		}
		l--
	}
	for r < len(nums) {
		if nums[r] <= high {
			end = r
		}
		if nums[r] >= high {
			high = nums[r]
		}
		r++
	}
	if start == end || nums[start] == nums[end] {
		return 0
	}
	return end - start + 1
}
