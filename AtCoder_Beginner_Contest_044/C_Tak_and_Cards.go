package main

import (
	"fmt"
	"math"
)

var N, A, ans int

func main() {
	fmt.Scan(&N, &A)
	x := make([]int, N)

	for i := 0; i < N; i++ {
		fmt.Scan(&x[i])
	}

	// しゃくとりほう
	var ans, cnt int
	var right int
	for left := 0; left < N; left++ {

		for cnt/(right-(left-1)) < A && right < N-1 {
			right++
			cnt += x[right]
		}
		fmt.Println(cnt/(right-(left-1))
		if cnt/(right-(left-1)) == A {
			ans++
		}
		cnt -= x[left]
	}
	fmt.Println(ans)
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
func ceil(x int) int   { return int(math.Ceil(float64(x))) }

type SortBy []int

func (a SortBy) Len() int           { return len(a) }
func (a SortBy) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool { return a[i] > a[j] }
