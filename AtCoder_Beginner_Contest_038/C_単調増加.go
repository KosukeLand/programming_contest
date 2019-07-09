package main

import (
	"fmt"
	"math"
)

var N int

func main() {
	fmt.Scan(&N)
	a := make([]int, N)

	for i := 0; i < N; i++ {
		fmt.Scan(&a[i])
	}

	var right, cnt, ans int
	for left := 0; right < N; {

		if left == right {
			cnt++
			right++
		} else {
			if a[left] < a[right] {
				cnt++
				left++
				right++
			} else {
				if 2 <= cnt {
					ans += combination(cnt, 2) + cnt
				} else {
					ans += cnt
				}
				cnt = 0
				left = right
			}
		}
	}
	fmt.Println(ans + combination(cnt, 2) + cnt)
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
func pow(x, y int) int    { return int(math.Pow(float64(x), float64(y))) }
func sqrt(x int) int      { return int(math.Sqrt(float64(x))) }
func abs(x int) int       { return int(math.Abs(float64(x))) }
func floor(x float64) int { return int(math.Floor(float64(x))) }
func ceil(x float64) int  { return int(math.Ceil(float64(x))) }

type SortBy []int

func (a SortBy) Len() int           { return len(a) }
func (a SortBy) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool { return a[i] > a[j] }
