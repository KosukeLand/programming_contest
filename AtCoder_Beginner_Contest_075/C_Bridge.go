package main

import (
	"fmt"
	"math"
)

var N, M, ans int

func main() {
	fmt.Scan(&N, &M)
	cost := [51][51]int{}
	dp := [51][51]int{}

	for i := 0; i < 51; i++ {
		for j := 0; j < 51; j++ {
			cost[i][j] = 99999999
			dp[i][j] = 99999999
		}
	}
	var a = make([]int, M)
	var b = make([]int, M)
	for i := 0; i < M; i++ {

		fmt.Scan(&a[i])
		fmt.Scan(&b[i])

		cost[a[i]][b[i]] = 1
		cost[b[i]][a[i]] = 1
	}

	// 取り除く対象の辺は50本以下なので，ワーシャルフロイドで全探索しても
	// たかだか O(50*50*50*50)
	// もっと良いアルゴリズムあると思うけど，思いつかなかった...orz
	for index := 0; index < M; index++ {

		dp = cost

		// 橋を切る
		dp[a[index]][b[index]] = 99999999
		dp[b[index]][a[index]] = 99999999

		// ワーシャルフロイドで全探索
		for k := 1; k <= N; k++ {
			for i := 1; i <= N; i++ {
				for j := 1; j <= N; j++ {
					dp[i][j] = min(dp[i][k]+dp[k][j], dp[i][j])
				}
			}
		}

		var flag bool
		for i := 1; i <= N; i++ {
			for j := i + 1; j <= N; j++ {
				// 任意のノードiから任意のノードjへの移動コストが99999999だったら(非連結なら)
				if dp[i][j] == 99999999 {
					flag = true
					break
				}
			}
		}
		if flag == false {
			ans++
		}
	}
	fmt.Println(M - ans)
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
