package main

func rotate(matrix [][]int) {
	for i, j := 0, len(matrix)-1; i < j; i, j = i+1, j-1 {
		for k := 0; k < len(matrix[0]); k++ {
			matrix[j][k], matrix[i][k] = matrix[i][k], matrix[j][k]
		}
	}
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix); j++ {
			if i == j {
				break
			}
			matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
		}
	}
}
