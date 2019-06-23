package main

import (
	"fmt"
	"math"
)

type AB struct {
	a, b int
}

var N, M int
var ans int

func main() {
	fmt.Scan(&N, &M)
	m := make(map[AB]int)

	for i := 0; i < M; i++ {
		var a int
		fmt.Scan(&a)
		var b int
		fmt.Scan(&b)

		m[AB{a, b}]++
		m[AB{b, a}]++
	}
	var used = [10]bool{}
	used[1] = true

	dfs(1, 1, used, m)
	fmt.Println(ans)
}
func dfs(n int, now int, used [10]bool, m map[AB]int) {

	if n == N {
		ans++
	} else {
		for i := 1; i <= N; i++ {
			if !used[i] && m[AB{now, i}] != 0 {
				used[i] = true
				dfs(n+1, i, used, m)
				used[i] = false
			}
		}
	}
}

/*  ----------------------------------------  */
func lcm(x, y uint64) uint64 {
	return (x / gcd(x, y)) * y
}

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
