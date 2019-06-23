package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
)

var N, ans int

func main() {
	fmt.Scan(&N)
	reader := bufio.NewScanner(os.Stdin)
	reader.Split(bufio.ScanWords)

	F := make([][]int, N)
	P := make([][]int, N)

	for i := 0; i < N; i++ {
		F[i] = make([]int, 10)
		for j := 0; j < 10; j++ {
			fmt.Scan(&F[i][j])
		}
	}

	for i := 0; i < N; i++ {
		P[i] = make([]int, 11)
		for j := 0; j <= 10; j++ {
			fmt.Scan(&P[i][j])
		}
	}

	for bit := 1; bit < (1 << 10); bit++ {
		for i := 0; i < N; i++ {
			var cnt int

			for j := 0; j < 10; j++ {

				if (bit >> uint64(j)) & 1 {
					if F[i][j] == 1 {

						cnt++
					}
				}
			}
		}
	}
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
