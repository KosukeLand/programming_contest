package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strings"
)

var N, ans int

func main() {
	fmt.Scan(&N)
	reader := bufio.NewScanner(os.Stdin)
	xxx := make(map[string]int, N)

	for i := 0; i < N; i++ {
		reader.Scan()
		s := strings.Split(reader.Text(), "")[0]
		if s == "M" || s == "A" || s == "R" || s == "C" || s == "H" {
			xxx[s]++
		}

	}
	ans += xxx["M"] * xxx["A"] * xxx["R"]
	ans += xxx["M"] * xxx["A"] * xxx["C"]
	ans += xxx["M"] * xxx["A"] * xxx["H"]
	ans += xxx["M"] * xxx["R"] * xxx["C"]
	ans += xxx["M"] * xxx["R"] * xxx["H"]
	ans += xxx["M"] * xxx["C"] * xxx["H"]
	ans += xxx["A"] * xxx["R"] * xxx["C"]
	ans += xxx["A"] * xxx["R"] * xxx["H"]
	ans += xxx["A"] * xxx["C"] * xxx["H"]
	ans += xxx["R"] * xxx["C"] * xxx["H"]

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

// type LR []int

// func (a SortBy) Len() int           { return len(a) }
// func (a SortBy) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
// func (a SortBy) Less(i, j int) bool { return a[i] < a[j] }
