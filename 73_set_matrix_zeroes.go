package main

func setZeroes(matrix [][]int) {
	rows := make([]bool, len(matrix))
	cols := make([]bool, len(matrix[0]))
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[0]); j++ {
			if matrix[i][j] == 0 {
				rows[i] = true
				cols[j] = true
			}
		}
	}

	for row, val := range rows {
		for j := 0; j < len(matrix); j++ {
			if val {
				matrix[row][j] = 0
			}
		}
	}
	for col, val := range cols {
		for j := 0; j < len(matrix[0]); j++ {
			if val {
				matrix[j][col] = 0
			}
		}
	}
}
