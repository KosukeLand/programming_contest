package main

import (
	"fmt"
	"math"
	"strings"
)

var n int
var t string

func main() {
	fmt.Scan(&n)
	S := make([][]string, n)

	for i := 0; i < n; i++ {
		S[i] = make([]string, 0, n)
		fmt.Scan(&t)
		S[i] = strings.Split(t, "")
	}

	ans := make(map[string]int)

	for i := 0; i < n; i++ {
		cnt := make(map[string]int)
		// S[i]に出現するアルファベットとその個数をカウント
		for j := 0; j < len(S[i]); j++ {
			cnt[S[i][j]]++
		}
		// 初回だけは，ansをS[0]と同等にする必要がある(そうじゃないと全部0になる)
		if i == 0 {
			ans = cnt
		}
		// 共通アルファベットの検索．最小値が解となる
		for key, _ := range ans {
			ans[key] = min(ans[key], cnt[key])
		}
	}

	var str string
	for _, x := range "abcdefghijklmnopqrstuvwxyz" {
		// 共通のアルファベットがあったら
		if ans[string(x)] != 0 {
			// 共通のアルファベット個数だけstrに文字を繋げる
			for i := 0; i < ans[string(x)]; i++ {
				str += string(x)
			}
		}
	}
	fmt.Println(str)
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
