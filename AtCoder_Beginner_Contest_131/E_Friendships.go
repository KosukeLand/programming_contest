package main

import (
	"fmt"
	"math"
)

var N, K int

type AB struct {
	A, B int
}

func main() {
	fmt.Scan(&N, &K)

	if N*(N-1)/2-(N-1) < K {
		fmt.Println(-1)
	} else {
		a := make([]AB, 0, N)

		// スター型
		for i := 2; i <= N; i++ {
			a = append(a, AB{1, i})
		}

		cnt := (N - 1) * (N - 2) / 2

		for i := 2; i < N; i++ {
			for j := i + 1; j <= N; j++ {
				if cnt == K {
					break
				}
				a = append(a, AB{i, j})
				cnt--
			}
		}
		fmt.Println(len(a))
		for _, ans := range a {
			fmt.Println(ans.A, ans.B)
		}
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
func pow(x, y int) int { return int(math.Pow(float64(x), float64(y))) }
func abs(x int) int    { return int(math.Abs(float64(x))) }
func floor(x int) int  { return int(math.Floor(float64(x))) }

type XY struct {
	x int
	y int
}

type SortBy [][]int

func (a SortBy) Len() int      { return len(a) }
func (a SortBy) Swap(i, j int) { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool {
	return a[i][1] < a[j][1]
}
