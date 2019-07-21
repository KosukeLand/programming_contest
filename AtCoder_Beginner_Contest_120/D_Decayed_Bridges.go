package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
)

var N, M, cnt int

func main() {
	fmt.Scan(&N, &M)
	result, tree, ptr := make([]int, M+1), make([]int, N), make([]int, N)
	ab := make([][]int, M)

	result[M] = (N * (N - 1)) / 2

	ptr, tree = init_ptr(ptr, tree)

	reader := bufio.NewScanner(os.Stdin)
	reader.Split(bufio.ScanWords)

	for i := 0; i < M; i++ {
		ab[i] = make([]int, 2)

		reader.Scan()
		ab[i][0], _ = strconv.Atoi(reader.Text())
		reader.Scan()
		ab[i][1], _ = strconv.Atoi(reader.Text())

		ab[i][0] = ab[i][0] - 1
		ab[i][1] = ab[i][1] - 1
	}

	for i := M - 1; 0 <= i; i-- {
		a, b := ab[i][0], ab[i][1]
		fmt.Println(tree)
		if !same(a, b, ptr) {
			ra, _ := root(a, ptr)
			rb, _ := root(b, ptr)
			x := tree[ra] * tree[rb]
			result[i] = result[i+1] - x

			ptr, tree = unit(a, b, ptr, tree)
		} else {
			result[i] = result[i+1]
		}

	}
	for i := 1; i <= M; i++ {
		fmt.Println(result[i])
	}
}

func init_ptr(ptr []int, tree []int) ([]int, []int) {
	for i := 0; i < N; i++ {
		ptr[i], tree[i] = i, 1
	}
	return ptr, tree
}

func root(x int, ptr []int) (int, []int) {
	if ptr[x] == x {
		return x, ptr
	} else {
		ptr[x], ptr = root(ptr[x], ptr)
		return ptr[x], ptr
	}
}

func unit(x int, y int, ptr []int, tree []int) ([]int, []int) {
	m, _ := root(x, ptr)
	n, _ := root(y, ptr)
	if m != n {
		tree[n] += tree[m]
		tree[m] = 0
		ptr[m] = n
	}
	return ptr, tree
}

func same(x int, y int, ptr []int) bool {
	m, _ := root(x, ptr)
	n, _ := root(y, ptr)
	if m == n {
		return true
	} else {
		return false
	}
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

func pow(x, y int) uint64 { return uint64(math.Pow(float64(x), float64(y))) }
func abs(x int) int       { return int(math.Abs(float64(x))) }
func floor(x int) int     { return int(math.Floor(float64(x))) }

type si struct {
	s int
	i int
}

type SortBy [][]int

func (a SortBy) Len() int           { return len(a) }
func (a SortBy) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool { return a[i][0] < a[j][0] }
