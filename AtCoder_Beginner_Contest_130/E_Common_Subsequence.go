package main

import (
	"fmt"
	"math"
)

var N, M int
var mod int = pow(10, 9) + 7

func main() {
	fmt.Scan(&N, &M)

	S := make([]int, N)
	T := make([]int, M)

	for i := 0; i < N; i++ {
		fmt.Scan(&S[i])
	}
	for i := 0; i < M; i++ {
		fmt.Scan(&T[i])
	}

	dp := make([][]int, N+1)
	for i := 0; i < N+1; i++ {
		dp[i] = make([]int, M+1)
	}

	dp[0][0] = 1
	for i := 0; i < N+1; i++ {
		for j := 0; j < M+1; j++ {
			if 0 < i && 0 < j && S[i-1] == T[j-1] {
				dp[i][j] += dp[i-1][j-1]
				dp[i][j] %= mod
			}
			if 0 < i {
				dp[i][j] += dp[i-1][j]
				dp[i][j] %= mod
			}
			if 0 < j {
				dp[i][j] += dp[i][j-1]
				dp[i][j] %= mod
			}
			if 0 < i && 0 < j {
				dp[i][j] -= dp[i-1][j-1]
				dp[i][j] %= mod

				if dp[i][j] < 0 {
					dp[i][j] += mod
				}
			}
		}
	}
	fmt.Println(dp[N][M])
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
func pow(x, y int) int { return int(math.Pow(float64(x), float64(y))) }
func abs(x int) int    { return int(math.Abs(float64(x))) }
func floor(x int) int  { return int(math.Floor(float64(x))) }

type XY struct {
	x int
	y int
}
type SortBy []XY

func (a SortBy) Len() int      { return len(a) }
func (a SortBy) Swap(i, j int) { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool {
	if a[i].x == a[j].x {
		return a[i].y > a[j].y
	}
	return a[i].x > a[j].x
}
