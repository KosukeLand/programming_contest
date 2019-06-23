package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
)

var N, K int
var ans uint64

func main() {
	fmt.Scan(&N, &K)
	reader := bufio.NewScanner(os.Stdin)
	reader.Split(bufio.ScanWords)

	a := make([]int, N)

	for i := 0; i < N; i++ {
		reader.Scan()
		a[i], _ = strconv.Atoi(reader.Text())
	}

	m := make([]uint64, N+1)

	for i := 1; i <= N; i++ {
		m[i] = m[i-1] + uint64(a[i-1])
	}

	var left, right int
	for left <= N-1 && right <= N {
		if m[right]-m[left] < uint64(K) {
			right++
		} else {
			left++
			ans += uint64(N - right + 1)
		}
	}
	fmt.Println(ans)
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
