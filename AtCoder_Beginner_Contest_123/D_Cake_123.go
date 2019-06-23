package main

import (
	"fmt"
	"math"
	"sort"
)

func main() {
	var X, Y, Z, K int

	fmt.Scan(&X, &Y, &Z, &K)

	var A = make(SortBy, X)
	var B = make(SortBy, Y)
	var C = make(SortBy, Z)
	var AB = make(SortBy, 0)
	var ABC = make(SortBy, 0)

	for i := 0; i < X; i++ {
		fmt.Scan(&A[i])
	}
	for i := 0; i < Y; i++ {
		fmt.Scan(&B[i])
	}
	for i := 0; i < Z; i++ {
		fmt.Scan(&C[i])
	}

	sort.Sort(A)
	sort.Sort(B)
	sort.Sort(C)

	for i := 0; i < X; i++ {
		for j := 0; j < Y; j++ {
			AB = append(AB, A[i]+B[j])
		}
	}
	sort.Sort(AB)
	for i := 0; i < min(len(AB), K); i++ {
		for j := 0; j < Z; j++ {
			ABC = append(ABC, AB[i]+C[j])
		}
	}
	sort.Sort(ABC)
	for i := 0; i < K; i++ {
		fmt.Println(ABC[i])
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

type SortBy []int

func (a SortBy) Len() int           { return len(a) }
func (a SortBy) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool { return abs(a[i]) > abs(a[j]) }
