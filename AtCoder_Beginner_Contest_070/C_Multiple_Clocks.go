package main

import (
	"fmt"
	"math"
)

var N, cnt int

func main() {
	fmt.Scan(&N)
	T := make([]uint64, N)

	for i := 0; i < N; i++ {
		fmt.Scan(&T[i])
	}
	var ans uint64 = uint64(T[0])

	// x,yの最小公倍数はx*y/gcd(x,y)
	// 具体例
	//   15 = 3*5
	//   24 = 2*2*2*3

	// uint64でも収まらないので，割り算を先に実施
	for _, value := range T {
		ans = (ans / gcd(ans, value)) * value
	}
	fmt.Println(ans)
}

func gcd(x, y uint64) uint64 {
	if x%y == 0 {
		return y
	} else {
		r := x % y
		return gcd(y, r)
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

func pow(x, y int) uint64 { return uint64(math.Pow(float64(x), float64(y))) }
func abs(x int) int       { return int(math.Abs(float64(x))) }
func floor(x int) int     { return int(math.Floor(float64(x))) }

type XY struct {
	x int
	y int
}

type SortBy [][]int

func (a SortBy) Len() int      { return len(a) }
func (a SortBy) Swap(i, j int) { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool {
	if a[i][0] == a[j][0] {
		return a[i][1] > a[j][1]
	}
	return a[i][0] > a[j][0]
}
