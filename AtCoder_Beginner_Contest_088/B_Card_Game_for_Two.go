package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"sort"
	"strconv"
)

var N, ans int

func main() {
	fmt.Scan(&N)
	reader := bufio.NewScanner(os.Stdin)
	reader.Split(bufio.ScanWords)

	a := make(SortBy, N)
	for i := 0; i < N; i++ {
		reader.Scan()
		a[i], _ = strconv.Atoi(reader.Text())
	}
	sort.Sort(a)

	var Alice, Bob int
	for 2 <= len(a) {
		Alice += a[0]
		Bob += a[1]
		a = append(a[2:])
	}
	if len(a) == 1 {
		Alice += a[0]
	}

	fmt.Println(Alice - Bob)
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

type SortBy []int

func (a SortBy) Len() int           { return len(a) }
func (a SortBy) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool { return a[i] > a[j] }
