package main

import (
	"fmt"
	"math"
)

var H, W int

func main() {
	fmt.Scan(&H, &W)
	S := make([][]string, H+2)
	m := make([][]int, H+2)
	S[0], S[H+1] = make([]string, W+2), make([]string, W+2)
	m[0], m[H+1] = make([]int, W+2), make([]int, W+2)

	for i := 1; i <= H; i++ {
		S[i] = make([]string, W+2)
		m[i] = make([]int, W+2)
		var t string
		fmt.Scan(&t)

		for j := 1; j <= W; j++ {
			S[i][j] = string(t[j-1])
			if string(t[j-1]) == "#" {
				m[i][j] = 999
			}
		}
	}

	for i := 1; i <= H; i++ {
		for j := 1; j <= W; j++ {
			if S[i][j] == "#" {
				m[i-1][j-1]++
				m[i-1][j]++
				m[i-1][j+1]++
				m[i][j-1]++
				m[i][j+1]++
				m[i+1][j-1]++
				m[i+1][j]++
				m[i+1][j+1]++
			}
		}
	}

	for i := 1; i <= H; i++ {
		for j := 1; j <= W; j++ {
			if 999 <= m[i][j] {
				fmt.Printf("%s", "#")
			} else {
				fmt.Printf("%d", m[i][j])
			}
		}
		fmt.Printf("\n")
	}
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

type XY struct {
	x int
	y int
}

type SortBy []XY

func (a SortBy) Len() int      { return len(a) }
func (a SortBy) Swap(i, j int) { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool {
	if a[i].x == a[j].x {
		return a[i].y > a[j].y
	}
	return a[i].x > a[j].x
}
