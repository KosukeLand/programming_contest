package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
)

var N, M, R int
var ans int = 1e9
var cost [][]int
var r []int

func main() {
	reader.Split(bufio.ScanWords)
	N, _ = strconv.Atoi(read())
	M, _ = strconv.Atoi(read())
	R, _ = strconv.Atoi(read())

	r = make([]int, R)
	cost = make([][]int, N)
	for i := 0; i < N; i++ {
		cost[i] = make([]int, N)
		for j := 0; j < N; j++ {
			cost[i][j] = 1e9
		}
	}

	for i := 0; i < R; i++ {
		r[i], _ = strconv.Atoi(read())
		r[i]--
	}

	for i := 0; i < M; i++ {
		a, _ := strconv.Atoi(read())
		b, _ := strconv.Atoi(read())
		c, _ := strconv.Atoi(read())
		cost[a-1][b-1] = c
		cost[b-1][a-1] = c
	}

	for k := 0; k < N; k++ {
		for i := 0; i < N; i++ {
			for j := 0; j < N; j++ {
				cost[i][j] = min(cost[i][j], cost[i][k]+cost[k][j])
			}
		}
	}
	//fmt.Println(cost)
	used := make(map[int]bool)

	// 調査対象はN!
	// 1,2,3,4...
	// 2,1,3,4...
	for i := 0; i < R; i++ {
		used[r[i]] = true
		//fmt.Printf("%d", r[i])
		ans = min(ans, dfs(1, r[i], 0, used))
		//fmt.Println(":", ans)
		used[r[i]] = false
	}
	fmt.Println(ans)
}

func dfs(n int, now int, sum int, used map[int]bool) int {
	if n == R {
		return sum
	} else {
		var ans int = 1e9
		for i := 0; i < R; i++ {
			next := r[i]
			if used[next] {
				continue
			} else {
				used[next] = true
				//fmt.Printf("%d", next)
				ans = min(ans, dfs(n+1, next, sum+cost[now][next], used))
				//fmt.Printf("/")
				used[next] = false
			}
		}
		return ans
	}
}

/*  ----------------------------------------  */

var reader = bufio.NewScanner(os.Stdin)

func read() string {
	reader.Scan()
	return reader.Text()
}
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
