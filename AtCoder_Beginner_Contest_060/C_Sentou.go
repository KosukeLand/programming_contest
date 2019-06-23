package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
)

var N, T, ans int

func main() {
	fmt.Scan(&N, &T)
	reader := bufio.NewScanner(os.Stdin)
	reader.Split(bufio.ScanWords)

	t := make([]int, N)
	for i := 0; i < N; i++ {
		reader.Scan()
		t[i], _ = strconv.Atoi(reader.Text())
	}

	for i := 0; i < N-1; i++ {
		if T < t[i+1]-t[i] {
			ans += T
		} else {
			ans += t[i+1] - t[i]
		}
	}

	fmt.Println(ans + T)
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
