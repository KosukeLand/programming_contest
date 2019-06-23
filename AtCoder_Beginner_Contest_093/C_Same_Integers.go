package main

import (
	"fmt"
	"math"
)

func main() {
	var A, B, C, ans int
	fmt.Scan(&A, &B, &C)
	m := max(A, B, C)

	if (3*m)%2 == (A+B+C)%2 {
		// 3つの数字がそろうのはm
		ans += ((3 * m) - (A + B + C)) / 2
	} else {
		// 3つの数字がそろうのはm+1
		ans += ((3 * (m + 1)) - (A + B + C)) / 2
	}

	fmt.Println(ans)
}

/*  ----------------------------------------  */

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

type SortBy []int

func (a SortBy) Len() int           { return len(a) }
func (a SortBy) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool { return abs(a[i]) > abs(a[j]) }
