package main

func countSubIslands(grid1 [][]int, grid2 [][]int) int {
	//get islands in grid1
	//get islands in grid2
	// check if g2 islands forms
	return 0
}

func markIslands(g1 [][]int) [][]int {
	visited := [][]int{}

	for i := 0; i < len(g1); i++ {
		for j := 0; j < len(g1[0]); j++ {
			if g1[i][j] == 1 {
				getIslandCells(g1, visited, i, j)
			}
		}
	}
	q := []int{grid1[0][0]}
	for len(q) > 0 {

	}
	return visited
}

func getIslandCells(g, v [][]int, i, j int) [][]int {
	if v[i][j] == 1 {
		return [][]int{}
	}
	v[i][j] = 1

}
