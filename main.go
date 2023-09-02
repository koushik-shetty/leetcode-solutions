package main

import "fmt"

func main() {
	//fmt.Printf("valid ops: %#v\n", validateStackSequences([]int{1, 2, 3, 4, 5}, []int{4, 3, 5, 2, 1}))
	//fmt.Printf("valid ops: %#v\n", validateStackSequences([]int{1, 2, 3, 4, 5}, []int{4, 3, 5, 1, 2}))

	// fmt.Printf("missing number: %#v\n", firstMissingPositive([]int{1, 2, 3, 4, 5}))
	// fmt.Printf("missing number: %#v\n", firstMissingPositive([]int{3, 4, -1, 1}))
	// fmt.Printf("missing number: %#v\n", firstMissingPositive([]int{1, 2, 0}))
	// fmt.Printf("missing number: %#v\n", firstMissingPositive([]int{7, 8, 9, 11, 12}))

	// m := [][]int{{5, 1, 9, 11}, {2, 4, 8, 10}, {13, 3, 6, 7}, {15, 14, 12, 16}}
	// rotate(m)
	// fmt.Printf("rotated: %#v\n", m)
	// m2 := [][]int{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}
	// rotate(m2)
	// fmt.Printf("rotated: %#v\n", m2)

	// fmt.Printf("spiral order: %#v\n", spiralOrder([][]int{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}))
	// fmt.Printf("spiral order: %#v\n", spiralOrder([][]int{{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}}))
	// fmt.Printf("spiral order: %#v\n", spiralOrder([][]int{{1, 2, 3, 4, 5, 6}, {5, 6, 7, 8, 9, 10}, {9, 10, 11, 12, 13, 14}}))

	// m := [][]int{{5, 1, 9, 11}, {2, 4, 0, 10}, {13, 3, 6, 7}, {15, 14, 12, 16}}
	// setZeroes(m)
	// fmt.Printf("after setzero: %#v\n", m)

	// fmt.Printf("filtered res: %#v\n", filter[int]([]int{10, 20, 40, 50, 15, 80, 100, 4}, func(a, k int) bool { return a >= 50 }))
	// fmt.Printf("Letter combinations: %#v\n", letterCombinations("23"))
	// fmt.Printf("Letter combinations: %#v\n", letterCombinations("2389"))
	// fmt.Printf("isValidLoop: %#v\n", circularArrayLoop([]int{2, -1, 1, 2, 2}))
	// fmt.Printf("isValidLoop: %#v\n", circularArrayLoop([]int{-1, -2, -3, -4, -5, 6}))
	fmt.Printf("unsorted: %#v\n", findUnsortedSubarray([]int{2, 6, 4, 8, 10, 9, 15}))
	fmt.Printf("unsorted: %#v\n", findUnsortedSubarray([]int{1, 2, 3, 4}))
	fmt.Printf("unsorted: %#v\n", findUnsortedSubarray([]int{1}))
	fmt.Printf("unsorted: %#v\n", findUnsortedSubarray([]int{4, 3, 2, 1}))
	fmt.Printf("unsorted: %#v\n", findUnsortedSubarray([]int{1, 3, 2, 2, 2}))
}
