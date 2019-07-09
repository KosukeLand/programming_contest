package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
)

var mod = pow(10, 9) + 7
var A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z int
var ans int
var end_a, end_b, n int

var dist [101]int
var cnt [101]int

func main() {
	reader.Split(bufio.ScanWords)
	N, _ = strconv.Atoi(read())
	a, _ := strconv.Atoi(read())
	b, _ := strconv.Atoi(read())
	a--
	b--

	if a == b {
		fmt.Println(0)
	}

	M, _ = strconv.Atoi(read())

	x := make([][]int, N)
	for i := 0; i < N; i++ {
		x[i] = make([]int, 0, N)
	}

	for i := 0; i < M; i++ {
		t1, _ := strconv.Atoi(read())
		t2, _ := strconv.Atoi(read())
		x[t1-1] = append(x[t1-1], t2-1)
		x[t2-1] = append(x[t2-1], t1-1)
	}

	q := make([]int, 0, 1e8)
	for i, _ := range dist {
		dist[i] = 1e8
	}
	dist[a] = 0
	cnt[a] = 1
	q = append(q, a)

	for len(q) != 0 {
		t := q[0]
		q = q[1:]
		if t == b {
			break
		}
		for _, j := range x[t] {
			if dist[j] == 1e8 {
				dist[j] = dist[t] + 1
				cnt[j] += cnt[t]
				cnt[j] %= mod
				q = append(q, j)
			} else if dist[j] == dist[t]+1 {
				cnt[j] += cnt[t]
				cnt[j] %= mod
			} else {
				continue
			}
		}
	}
	fmt.Println(cnt[b] % mod)
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

func combination(x, y int) int {
	fmt.Println(x, y, permutation(x, y), permutation(y, y))
	return permutation(x, y) / permutation(y, y)
}

func permutation(x, y int) int {
	var ans, cnt int = 1, 0
	for cnt < y {
		ans *= (x - cnt)
		cnt++
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
func ceil(x int) int   { return int(math.Ceil(float64(x))) }

type SortBy []int

func (a SortBy) Len() int           { return len(a) }
func (a SortBy) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool { return a[i] > a[j] }
