package main

import (
	"fmt"
	"math"
)

func main() {
	var ans, A, B, C, X, Y int
	fmt.Scan(&A, &B, &C, &X, &Y)

	// 1枚ずつ買った方が良い？ハーフを2枚買った方が良い？
	x1 := min(A+B, C*2)
	// 少なくとも少ない枚数までは購入する
	y1 := min(X, Y)
	// 安い金額 x 枚数
	ans += x1 * y1

	// XとYのうち枚数が多い方を適当に埋める
	m1 := X - y1
	m2 := Y - y1

	if m1 < m2 {
		ans += min((m1+m2)*C*2, (m1+m2)*B)
	} else {
		ans += min((m1+m2)*C*2, (m1+m2)*A)
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
func (a SortBy) Less(i, j int) bool { return abs(a[i]) < abs(a[j]) }
