package main

import (
	"fmt"
	"math"
	"sort"
)

var N int

func main() {
	fmt.Scan(&N)

	xxx := make(SortBy, N)
	for i := 0; i < N; i++ {
		fmt.Scan(&xxx[i].rest, &xxx[i].rank)
		xxx[i].i = i + 1
	}

	sort.Sort(xxx)
	for _, x := range xxx {
		fmt.Println(x.i)
	}
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
func floor(x int) int  { return int(math.Floor(float64(x))) }

type restaurant struct {
	rest string
	rank int
	i    int
}
type SortBy []restaurant

func (a SortBy) Len() int      { return len(a) }
func (a SortBy) Swap(i, j int) { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool {
	if a[i].rest == a[j].rest {
		return a[i].rank > a[j].rank
	}
	return a[i].rest < a[j].rest
}
