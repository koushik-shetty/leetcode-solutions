package main

func spiralOrder(matrix [][]int) []int {
	m, n := len(matrix), len(matrix[0])
	endi, endj := m/2, m/2
	endj = endi
	out := make([]int, 0)
	i, j := 0, 0
	for i <= endi && j <= endj {
		out = append(out, matrix[i][j])
		for k := j + 1; k < n-j-1; k++ {
			out = append(out, matrix[i][k])
		}
		for k := i; k < m-i-1; k++ {
			out = append(out, matrix[k][n-i-1])
		}
		for k := n - j - 1; k > j; k-- {
			out = append(out, matrix[m-i-1][k])
		}
		for k := m - i - 1; k > i; k-- {
			out = append(out, matrix[k][j])
		}
		i++
		j++
	}
	// in the up down direction
	return out
}
