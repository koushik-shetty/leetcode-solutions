package main

import "math"

func circularArrayLoop(nums []int) bool {
	visited := make(map[int]bool)
	for startLoc, _ := range nums {
		k := 0
		isHetro := false
		prevLoc, nextLoc := startLoc, startLoc

		for !visited[nextLoc] {
			visited[nextLoc] = true
			k++
			if !isHetro && math.Signbit(float64(prevLoc)) != math.Signbit(float64(nextLoc)) {
				isHetro = true
			}
			prevLoc = nextLoc
			nextLoc := (nextLoc + nums[nextLoc]) % len(nums)
			if nextLoc < 0 {
				//since next is neg, add to the length for sub
				nextLoc = len(nums) + nextLoc
			}
		}
		if k > 1 && !isHetro {
			return true
		}

	}
	return false
}
