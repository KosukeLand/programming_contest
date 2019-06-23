package main

import (
	"fmt"
	"math"
)

var H, W int
var ans int = 999999999999

func main() {
	fmt.Scan(&H, &W)

	if H*W%3 == 0 {
		fmt.Println(0)
	} else {
		for i := 1; i < H; i++ {
			Sa := i * W
			Sb := (H - i) * floor(W/2)
			Sc := H*W - Sa - Sb

			s_max := max(Sa, Sb, Sc)
			s_min := min(Sa, Sb, Sc)
			ans = min(ans, s_max-s_min)
		}

		for i := 1; i < H; i++ {
			Sa := i * W
			Sb := floor((H-i)/2) * W
			Sc := H*W - Sa - Sb

			s_max := max(Sa, Sb, Sc)
			s_min := min(Sa, Sb, Sc)
			ans = min(ans, s_max-s_min)
		}

		for i := 1; i < W; i++ {
			Sa := i * H
			Sb := (W - i) * floor(H/2)
			Sc := H*W - Sa - Sb

			s_max := max(Sa, Sb, Sc)
			s_min := min(Sa, Sb, Sc)
			ans = min(ans, s_max-s_min)
		}
		for i := 1; i < W; i++ {
			Sa := i * H
			Sb := floor((W-i)/2) * H
			Sc := H*W - Sa - Sb

			s_max := max(Sa, Sb, Sc)
			s_min := min(Sa, Sb, Sc)
			ans = min(ans, s_max-s_min)
		}
		fmt.Println(ans)
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
func ceil(x int) int      { return int(math.Ceil(float64(x))) }

type si struct {
	s int
	i int
}

type SortBy []si

func (a SortBy) Len() int           { return len(a) }
func (a SortBy) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool { return a[i].s < a[j].s }
