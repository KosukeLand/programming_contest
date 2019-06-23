package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
)

func main() {
	var N int
	fmt.Scan(&N)
	sc := bufio.NewScanner(os.Stdin)

	A := make([]int, N)
	B := make([]int, N)

	for i := 0; i < N; i++ {
		sc.Scan()
		A[i], _ = strconv.Atoi(sc.Text())
		sc.Scan()
		B[i], _ = strconv.Atoi(sc.Text())
	}
	for i := 0; i < N; i++ {
		fmt.Println(A[i] * B[i])
	}
}

/*  ----------------------------------------  */

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
func (a SortBy) Less(i, j int) bool { return abs(a[i]) < abs(a[j]) }
