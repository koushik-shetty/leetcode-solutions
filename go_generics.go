package main

func filter[T comparable](s []T, comparator func(a T, idx int) bool) []T {
	out := make([]T, 0)
	for k, v := range s {
		if comparator(v, k) {
			out = append(out, v)
		}
	}
	return out

}
