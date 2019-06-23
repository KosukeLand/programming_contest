package main

import (
	"fmt"
	"math"
)

var N, M int

func main() {
	fmt.Scan(&N, &M)
	a, b := make([]int, N), make([]int, N)
	c, d := make([]int, M), make([]int, M)

	for i := 0; i < N; i++ {
		fmt.Scan(&a[i], &b[i])
	}
	for i := 0; i < M; i++ {
		fmt.Scan(&c[i], &d[i])
	}

	for i := 0; i < N; i++ {
		var ans int = 999999999999
		var point int

		for j := 0; j < M; j++ {
			if abs(a[i]-c[j])+abs(b[i]-d[j]) < ans {
				ans = abs(a[i]-c[j]) + abs(b[i]-d[j])
				point = j + 1
			}
		}
		fmt.Println(point)
	}
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

func pow(x, y int) uint64 { return uint64(math.Pow(float64(x), float64(y))) }
func abs(x int) int       { return int(math.Abs(float64(x))) }
func floor(x int) int     { return int(math.Floor(float64(x))) }
func ceil(x int) int      { return int(math.Ceil(float64(x))) }

type si struct {
	s int
	i int
}

type SortBy []si

func (a SortBy) Len() int           { return len(a) }
func (a SortBy) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool { return a[i].s < a[j].s }
