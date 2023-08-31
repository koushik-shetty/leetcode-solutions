package main

func validateStackSequences(pushed []int, popped []int) bool {
	stack := []int{}

	for i, j := 0, 0; j < len(popped); {
		sl := len(stack)
		if sl > 0 && stack[sl-1] == popped[j] {
			j++
			stack = stack[:sl-1]
		} else if i < len(pushed) {
			if pushed[i] == popped[j] {
				i++
				j++
			} else {
				stack = append(stack, pushed[i])
				i++
			}
		} else {
			return false
		}
	}
	if len(stack) == 0 {
		return true
	}
	return false
}
