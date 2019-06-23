package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"sort"
	"strconv"
)

var N, K int
var ans int

func main() {
	fmt.Scan(&N, &K)
	reader := bufio.NewScanner(os.Stdin)
	reader.Split(bufio.ScanWords)
	m := make(map[int]int)

	for i := 0; i < N; i++ {
		reader.Scan()
		t, _ := strconv.Atoi(reader.Text())
		m[t]++
	}

	a := make([]int, 0)
	for _, value := range m {
		a = append(a, value)
	}

	sort.Ints(a)

	for _, value := range a {
		if K < len(a) {
			ans += value
			a = a[1:]
		} else {
			break
		}
	}
	fmt.Println(ans)
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

type XY struct {
	x int
	y int
}

type SortBy [][]int

func (a SortBy) Len() int      { return len(a) }
func (a SortBy) Swap(i, j int) { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool {
	if a[i][0] == a[j][0] {
		return a[i][1] > a[j][1]
	}
	return a[i][0] > a[j][0]
}
