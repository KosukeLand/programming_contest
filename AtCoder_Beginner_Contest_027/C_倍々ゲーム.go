package main

import (
	"fmt"
	"math"
)

var mod = pow(10, 9) + 7
var A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z int
var ans int

func main() {
	var NN uint64
	fmt.Scan(&NN)

	// 半分+1以上N-1以下をとった方が勝ち
	// N = 19ならば
	// 10〜19で自分のターンなら負け
	// 5〜9で自分のターンなら勝ち
	// 3〜4で自分のターンなら負け
	// 2で自分のターンなら勝ち

	var y uint64 = 1
	var e uint64 = 1
	if NN == 1 {
		fmt.Println("Aoki")
		return
	}

	for {
		e *= 4
		y += e
		if NN <= y {
			fmt.Println("Takahashi")
			return
		}
		y += e
		if NN <= y {
			fmt.Println("Aoki")
			return
		}
	}
}

/*  ----------------------------------------  */

func lcm(x, y int) int {
	return (x / gcd(x, y)) * y
}

func gcd(x, y int) int {
	if x%y == 0 {
		return y
	} else {
		r := x % y
		return gcd(y, r)
	}
}

func combination(x, y int) int {
	fmt.Println(x, y, permutation(x, y), permutation(y, y))
	return permutation(x, y) / permutation(y, y)
}

func permutation(x, y int) int {
	var ans, cnt int = 1, 0
	for cnt < y {
		ans *= (x - cnt)
		cnt++
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
func ceil(x int) int   { return int(math.Ceil(float64(x))) }

type SortBy []int

func (a SortBy) Len() int           { return len(a) }
func (a SortBy) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool { return a[i] > a[j] }
