package main

import "fmt"

type tree struct {
	node []int
}

func main() {
	var N int
	fmt.Scan(&N)

	uvw := make([][]int, N-1)
	for i := 0; i < N-1; i++ {
		uvw[i] = make([]int, 3)
		for j := 0; j < 3; j++ {
			fmt.Scan(&uvw[i][j])
		}
	}

	x := make([]tree, N)
	for i := 0; i < N; i++ {

	}
}
