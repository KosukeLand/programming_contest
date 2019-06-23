package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
)

var N, ans int

func main() {
	fmt.Scan(&N)

	reader := bufio.NewScanner(os.Stdin)
	reader.Split(bufio.ScanWords)
	t := make([]XY, N)

	for i := 0; i < N; i++ {
		reader.Scan()
		t[i].x, _ = strconv.Atoi(reader.Text())
		reader.Scan()
		t[i].y, _ = strconv.Atoi(reader.Text())
	}

	for i := 0; i < N; i++ {
		for j := i + 1; j < N; j++ {
			// p, qを仮置きする
			p := t[i].x - t[j].x
			q := t[i].y - t[j].y

			var cnt int
			for k := 0; k < N; k++ {
				for l := 0; l < N; l++ {
					// pとqが一致すれば，カウンタを加算
					if t[k].x-t[l].x == p && t[k].y-t[l].y == q {
						cnt++
					}
				}
			}
			// 一致回数が
			ans = max(ans, cnt)
		}
	}
	fmt.Println(N - ans)
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
