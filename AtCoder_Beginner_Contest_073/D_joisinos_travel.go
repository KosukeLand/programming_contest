package main

import (
	"fmt"
	"math"
)

var N, M, R, ans int
var cost map[ab]int

type ab struct {
	a, b int
}

func main() {
	fmt.Scan(&N, &M, &R)

	r := make([]int, R+1)
	cost = make(map[ab]int)

	for i := 1; i <= R; i++ {
		fmt.Scan(&r[i])
	}

	for i := 0; i < M; i++ {
		var a, b, c int
		fmt.Scan(&a, &b, &c)
		cost[ab{a, b}] = c
		cost[ab{b, a}] = c
	}

	for k := 1; k <= N; k++ {
		for i := 1; i <= N; i++ {
			for j := 1; j <= N; j++ {
				if cost[ab{i, j}] != 0 && cost[ab{i, k}] != 0 && cost[ab{k, j}] != 0 {
					cost[ab{i, j}] = min(cost[ab{i, j}], cost[ab{i, k}]+cost[ab{k, j}])
				}
			}
		}
	}

	var used [9]bool

	// 調査対象はN!
	// 1,2,3,4...
	// 2,1,3,4...

	fmt.Println(r)
	fmt.Println(dfs(0, 1, 0, r, used))

}

func dfs(n int, now int, sum int, r []int, used [9]bool) int {
	if n == R {
		return sum
	} else {
		var ans int = 99999999
		for i := 1; i <= R; i++ {
			if used[i] || cost[ab{now, i}] == 0 {
				continue
			} else {
				used[i] = true
				fmt.Println(r)
				ans = min(ans, dfs(n+1, i, sum+cost[ab{r[now], r[i]}], r, used))
				used[i] = false
			}
		}
		return ans
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

type si struct {
	s int
	i int
}

type SortBy []si

func (a SortBy) Len() int           { return len(a) }
func (a SortBy) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool { return a[i].s < a[j].s }
