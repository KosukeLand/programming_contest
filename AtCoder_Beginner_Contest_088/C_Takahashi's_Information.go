package main

import (
	"fmt"
	"math"
)

var ans int

func main() {
	var max_g int

	c := make([][]int, 3)
	for i := 0; i < 3; i++ {
		c[i] = make([]int, 3)

		for j := 0; j < 3; j++ {
			fmt.Scan(&c[i][j])
			max_g = max(max_g, c[i][j])
		}
	}

	for a1 := 0; a1 <= max_g; a1++ {
		b1 := c[0][0] - a1
		b2 := c[0][1] - a1
		b3 := c[0][2] - a1

		for a2 := 0; a2 <= max_g; a2++ {
			if (a2 + b1) != c[1][0] {
				continue
			}
			if (a2 + b2) != c[1][1] {
				continue
			}
			if (a2 + b3) != c[1][2] {
				continue
			}
			for a3 := 0; a3 <= max_g; a3++ {
				if (a3 + b1) != c[2][0] {
					continue
				}
				if (a3 + b2) != c[2][1] {
					continue
				}
				if (a3 + b3) != c[2][2] {
					continue
				}
				fmt.Println("Yes")
				return
			}
		}
	}
	fmt.Println("No")
}

/*  ----------------------------------------  */
func combination(x, y int) int {
	return permutation(x, y) / permutation(y, y)
}

func permutation(x, y int) int {
	var ans int = 1
	for i := x - y; 0 < i; i-- {
		ans *= i
	}
	return ans
}

func max(x ...int) int {
	var res int = x[0]
	for i := 1; i < len(x); i++ {
		res = int(math.Max(float64(x[i]), float64(res)))
	}
	return res
}

func min(x ...int) int {
	var res int = x[0]
	for i := 1; i < len(x); i++ {
		res = int(math.Min(float64(x[i]), float64(res)))
	}
	return res
}
func pow(x, y int) int { return int(math.Pow(float64(x), float64(y))) }
func abs(x int) int    { return int(math.Abs(float64(x))) }
func floor(x int) int  { return int(math.Floor(float64(x))) }

type SortBy []int

func (a SortBy) Len() int           { return len(a) }
func (a SortBy) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool { return a[i] > a[j] }
