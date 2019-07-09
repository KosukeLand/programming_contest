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
var ans, cnt int

var dist = [301]int{}

func main() {
	reader.Split(bufio.ScanWords)
	N, _ = strconv.Atoi(read())
	M, _ = strconv.Atoi(read())
	cost := make([][]int, N)
	for i, _ := range cost {
		cost[i] = make([]int, N)
		for j, _ := range cost[i] {
			cost[i][j] = 1e8
		}
	}
	for i := 0; i < M; i++ {
		u, _ := strconv.Atoi(read())
		v, _ := strconv.Atoi(read())
		l, _ := strconv.Atoi(read())
		cost[u-1][v-1] = l
		cost[v-1][u-1] = l
	}
	fmt.Println(cost)
	for i, _ := range cost[0] {
		for j, _ := range dist {
			dist[j] = 1e8
		}
		dist[i] = 0
		cost[i][0] = 1e8
		q := make([]int, N)
		q = append(q, i)
		for len(q) != 0 {
			t := q[0]
			q = q[1:]
			for k, _ := range cost[t] {
				if k < 1e8 {
					continue
				}
				dist[k] = min(dist[k], dist[t]+cost[t][k])
				q = append(q, k)
			}
		}
	}
	fmt.Println(dist)
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
