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
var end_a, end_b, n int

func main() {
	reader.Split(bufio.ScanWords)
	N, _ = strconv.Atoi(read())
	M, _ = strconv.Atoi(read())
	X, _ = strconv.Atoi(read())
	Y, _ = strconv.Atoi(read())

	a := make([]int, N)
	b := make([]int, M)
	for i := 0; i < N; i++ {
		a[i], _ = strconv.Atoi(read())
		end_a = max(a[i], end_a)
	}
	for i := 0; i < M; i++ {
		b[i], _ = strconv.Atoi(read())
		end_b = max(b[i], end_b)
	}

	for n <= end_a {
		x := binary_tree(n, a)
		n += (a[x] - n) + X

		if end_b < n {
			break
		}

		y := binary_tree(n, b)
		n += (b[y] - n) + Y

		ans++
	}
	fmt.Println(ans)
}

func binary_tree(target int, x []int) int {
	var left, right int = -1, len(x)

	for left+1 < right {
		center := x[(left+right)/2]
		if center < target {
			left = (left + right) / 2
		} else {
			right = (left + right) / 2
		}
	}
	return right
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
