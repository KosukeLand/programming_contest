package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
	"strings"
)

const pi = math.Pi

var mod int = pow(10, 9) + 7
var Umod uint64 = 1000000007
var ans, cnt int

func main() {
	reader.Split(bufio.ScanWords)
	H, _ := strconv.Atoi(read())
	W, _ := strconv.Atoi(read())
	c := make([][]string, H)

	var start_x, start_y, goal_x, goal_y int
	for i := 0; i < H; i++ {
		c[i] = make([]string, W)
		c[i] = strings.Split(read(), "")

		for j := 0; j < W; j++ {
			if c[i][j] == "s" {
				start_x, start_y = j, i
			}
			if c[i][j] == "g" {
				goal_x, goal_y = j, i
			}
		}
	}

	var dy = []int{1, -1, 0, 0}
	var dx = []int{0, 0, 1, -1}
	q := make([][]int, 0, H*W*5)
	q = append(q, []int{start_y, start_x, 0})
	mark := make([][][]bool, H)
	for i := 0; i < H; i++ {
		mark[i] = make([][]bool, W)
		for j := 0; j < W; j++ {
			mark[i][j] = make([]bool, 3)
		}
	}
	for len(q) != 0 {
		y, x, count := q[0][0], q[0][1], q[0][2]
		q = q[1:]

		if goal_x == x && goal_y == y {
			fmt.Println("YES")
			return
		}
		for i := 0; i < 4; i++ {
			ny, nx := y+dy[i], x+dx[i]
			if !(0 <= ny && ny < H && 0 <= nx && nx < W) {
				continue
			}
			if count == 2 && c[ny][nx] == "#" {
				continue
			}
			if mark[ny][nx][count] == true {
				continue
			}
			if c[ny][nx] == "#" {
				mark[ny][nx][count] = true
				q = append(q, []int{ny, nx, count + 1})
			} else {
				mark[ny][nx][count] = true
				q = append(q, []int{ny, nx, count})
			}
		}
	}
	fmt.Println("NO")
}

/*  ----------------------------------------  */

var reader = bufio.NewScanner(os.Stdin)

func read() string {
	reader.Scan()
	return reader.Text()
}

func lcm(x, y int) int {
	return (x / gcd(x, y)) * y
}

func gcd(x, y int) int {
	if x%y == 0 {
		return y
	} else {
		r := x % y
		return gcd(y, r)
	}
}

var fac [1000000]int
var finv [1000000]int
var inv [1000000]int

func combination_init() {
	fac[0], fac[1] = 1, 1
	finv[0], finv[1] = 1, 1
	inv[1] = 1

	// invは a^(-1) mod p
	// pをaで割ることを考える

	// p/a*(a) + p%a = p
	// p/a*(a) + p%a = 0          (mod p)
	// -p%a = p/a*(a)             (mod p)
	// -p%a *a^(-1)= p/a          (mod p)
	// a^(-1)= p/a * (-p%a)^(-1)  (mod p)
	// a^(-1) =

	for i := 2; i < 1000000; i++ {
		fac[i] = fac[i-1] * i % mod
		inv[i] = mod - inv[mod%i]*(mod/i)%mod
		finv[i] = finv[i-1] * inv[i] % mod
	}
}

func combination(x, y int) int {
	if x < y {
		return 0
	}
	if fac[0] != 1 {
		combination_init()
	}
	return fac[x] * (finv[y] * finv[x-y] % mod) % mod
	//return fac[x] / (fac[y] * fac[x-y])
}

func permutation(x, y int) int {
	if x < y {
		return 0
	}
	if fac[0] != 1 {
		combination_init()
	}
	return fac[x] * (finv[x-y] % mod) % mod
	//return fac[x] / fac[x-y]
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
func ceil(x int) int   { return int(math.Ceil(float64(x))) }

type SortBy [][]int

func (a SortBy) Len() int      { return len(a) }
func (a SortBy) Swap(i, j int) { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool {
	if a[i][0] == a[j][0] {
		return a[i][1] < a[j][1]
	}
	return a[i][0] < a[j][0]
}

type PriorityQueue []int

func (h PriorityQueue) Len() int            { return len(h) }
func (h PriorityQueue) Less(i, j int) bool  { return h[i] < h[j] }
func (h PriorityQueue) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }
func (h *PriorityQueue) Push(x interface{}) { *h = append(*h, x.(int)) }
func (h *PriorityQueue) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}
