package main

func firstMissingPositive(nums []int) int {
	h := map[int]bool{}
	for _, num := range nums {
		h[num] = true
	}
	for i := 1; i <= (len(nums) + 1); i++ {
		if _, ok := h[i]; !ok {
			return i
		}
	}
	return len(nums) + 1
}
