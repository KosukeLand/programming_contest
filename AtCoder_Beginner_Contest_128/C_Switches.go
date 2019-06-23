package main

import (
	"fmt"
	"math"
)

var N, M, ans int
var k, p []int
var s [][]int

func main() {

	fmt.Scan(&N, &M)

	k = make([]int, M)
	s = make([][]int, M)
	p = make([]int, M)

	for i := 0; i < M; i++ {
		fmt.Scan(&k[i])
		s[i] = make([]int, k[i])

		for j := 0; j < k[i]; j++ {
			fmt.Scan(&s[i][j])
		}
	}
	for i := 0; i < M; i++ {
		fmt.Scan(&p[i])
	}

	dfs(0, []int{})
	fmt.Println(ans)
}

func dfs(n int, comb []int) {
	if n == N {
		calc(comb)
		return
	} else {
		for i := 0; i <= 1; i++ {
			dfs(n+1, append(comb, i))
		}
	}
}

func calc(comb []int) {
	var cnt_l int

	// 電球
	for i := 0; i < M; i++ {
		var cnt_s int

		// スイッチ
		for j := 0; j < k[i]; j++ {
			if comb[s[i][j]-1] == 1 {
				cnt_s++
			}
		}
		if cnt_s%2 == p[i] {
			cnt_l++
		}
	}
	if cnt_l == M {
		ans++
	}
	return
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
func (a SortBy) Less(i, j int) bool { return abs(a[i]) < abs(a[j]) }
