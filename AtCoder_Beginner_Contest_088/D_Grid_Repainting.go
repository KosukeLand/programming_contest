package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strings"
)

var ans int = 9999999999999999
var H, W int
var str [][]string

func main() {
	fmt.Scan(&H, &W)
	reader := bufio.NewScanner(os.Stdin)

	str = make([][]string, H)
	for i := 0; i < H; i++ {
		str[i] = make([]string, W)
		reader.Scan()
		t := strings.Split(reader.Text(), "")

		for j, v := range t {
			str[i][j] = v
		}
	}
	fmt.Println(dfs(0, 0, 0))
}

func dfs(h, w, sum int) int {
	var res int

	if h == H-1 && w == W-1 {
		return sum
	}
	if h+1 <= H-1 {
		if str[h+1][w] == "#" {
			res += dfs(h+1, w, sum+1)
		} else {
			res += dfs(h+1, w, sum)
		}
	}

	if w+1 <= W-1 {
		if str[h][w+1] == "#" {
			res += dfs(h, w+1, sum+1)
		} else {
			res += dfs(h, w+1, sum)
		}
	}
	ans = min(ans, res)
	return res
}

/*  ----------------------------------------  */
func combination(x, y int) int {
	return permutation(x, y) / permutation(y, y)
}

func permutation(x, y int) int {
	var res int = 1
	for i := x - y; 0 < i; i-- {
		ans *= i
	}
	return res
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
