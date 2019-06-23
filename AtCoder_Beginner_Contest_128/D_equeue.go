package main

import (
	"fmt"
	"math"
	"sort"
)

func main() {
	var N, K, ans int
	fmt.Scan(&N, &K)

	var V = make([]int, N)
	for i := 0; i < N; i++ {
		fmt.Scan(&V[i])
	}
	var V_left = make(SortBy, 0)

	for left := 0; left <= min(N, K); left++ {
		// left=0は左からの操作回数0を示す．left=0の場合，appendしない
		if 0 < left {
			V_left = append(V_left, V[left-1])
		}

		// V_leftをV_rightにコピー
		var V_right = make(SortBy, len(V_left))
		copy(V_right, V_left)

		for right := 0; left+right <= min(N, K); right++ {
			// right=0は左からの操作回数0を示す．right=0の場合，appendしない
			if 0 < right {
				V_right = append(V_right, V[len(V)-1-right+1])
			}

			// V_rightをV_ansにコピーし，V_ansを昇順にソート
			var V_ans = make(SortBy, len(V_right))
			copy(V_ans, V_right)
			sort.Sort(V_ans)

			// 価値が負の宝石は，負の大きい宝石から筒へリターン
			for trash := 0; trash < min(K-(left+right), len(V_right)); trash++ {
				if V_ans[0] < 0 {
					V_ans = V_ans[1:]
				}
			}
			var result int
			for i := 0; i < len(V_ans); i++ {
				result += V_ans[i]
			}
			ans = max(ans, result)

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
func floor(x int) int  { return int(math.Floor(float64(x))) }

type SortBy []int

func (a SortBy) Len() int           { return len(a) }
func (a SortBy) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool { return a[i] < a[j] }
