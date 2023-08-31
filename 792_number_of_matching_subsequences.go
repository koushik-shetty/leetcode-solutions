package main

func numMatchingSubseq(s string, words []string) int {
	cache := [26][]int{}
	for idx, r := range s {
		cache[r-'a'] = append(cache[r-'a'], idx)
	}

	matches := 0

	for _, word := range words {
	}
	return matches
}
