package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
)

const pi = math.Pi

var mod int = pow(10, 9) + 7
var Umod uint64 = 1000000007
var ans int = 1e9

func main() {
	reader.Split(bufio.ScanWords)
	H, _ := strconv.Atoi(read())
	W, _ := strconv.Atoi(read())
	T, _ := strconv.Atoi(read())

	str := make([]string, H*W)
	for i := 0; i < H; i++ {
		str[i] = read()
	}

	var left, right, x int = -1, T + 1, 0
	var S, G, p int
	for left+1 < right {
		cost := make([][]int, H*W)
		for i := 0; i < H*W; i++ {
			cost[i] = make([]int, H*W)
			for j := 0; j < H*W; j++ {
				if i == j {
					cost[i][j] = 0
				} else {
					cost[i][j] = 1e10
				}
			}
		}
		x = (left + right) / 2
		for i := 0; i < H*W; i++ {
			switch string(str[i/W][i%W]) {
			case "#":
				p = x
			case ".":
				p = 1
			case "S":
				S = i
				p = 1
			case "G":
				G = i
				p = 1
			}

			if 0 <= i-W {
				cost[i-W][i] = p
			}
			if i+W < H*W {
				cost[i+W][i] = p
			}
			if 0 <= i-1 && i%W != 0 {
				cost[i-1][i] = p
			}
			if i+1 < H*W && (i+1)%W != 0 {
				cost[i+1][i] = p
			}
		}

		for k := 0; k < H*W; k++ {
			for i := 0; i < H*W; i++ {
				for j := 0; j < H*W; j++ {
					cost[i][j] = min(cost[i][j], cost[i][k]+cost[k][j])
				}
			}
		}
		if cost[S][G] <= T {
			left = x
		} else {
			right = x
		}
	}
	fmt.Println(left)
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

type SortBy []struct {
	b, c int
}

func (a SortBy) Len() int           { return len(a) }
func (a SortBy) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool { return a[i].c > a[j].c }

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
