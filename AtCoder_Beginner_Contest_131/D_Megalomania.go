package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"sort"
	"strconv"
)

var N int

func main() {
	fmt.Scan(&N)
	A := make(SortBy, N)

	reader := bufio.NewScanner(os.Stdin)
	reader.Split(bufio.ScanWords)

	for i := 0; i < N; i++ {
		A[i] = make([]int, 2)

		reader.Scan()
		A[i][0], _ = strconv.Atoi(reader.Text())
		reader.Scan()
		A[i][1], _ = strconv.Atoi(reader.Text())

	}
	sort.Sort(A)
	var time int
	for i := 0; i < N; i++ {
		x, y := A[i][0], A[i][1]

		time += x
		if y < time {
			fmt.Println("No")
			return
		}
	}
	fmt.Println("Yes")
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
