package main

import (
	"fmt"
	"math"
	"strings"
)

func main() {
	var S string
	var ans int = 0
	fmt.Scan(&S)
	strs := strings.Split(S, "")

	for i := 0; i < len(strs); i++ {
		if strs[i] == "+" {
			ans += 1
		} else {
			ans -= 1
		}
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
