package main

import (
	"fmt"
	"math"
)

var W, H, N int

func main() {
	fmt.Scan(&W, &H, &N)
	var x_left, x_right int = 0, W
	var y_up, y_down int = H, 0

	for i := 0; i < N; i++ {
		var a, b, c int
		fmt.Scan(&a, &b, &c)

		if c == 1 {
			x_left = max(x_left, a)
		} else if c == 2 {
			x_right = min(x_right, a)
		} else if c == 3 {
			y_down = max(y_down, b)
		} else {
			y_up = min(y_up, b)
		}
	}

	fmt.Println(max(x_right-x_left, 0) * max((y_up-y_down), 0))
}

/*  ----------------------------------------  */

func gcd(x, y uint64) uint64 {
	if x%y == 0 {
		return y
	} else {
		r := x % y
		return gcd(y, r)
	}
}

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

type SortBy [][]int

func (a SortBy) Len() int      { return len(a) }
func (a SortBy) Swap(i, j int) { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool {
	return a[i][1] < a[j][1]
}
