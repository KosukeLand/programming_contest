package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"sort"
	"strconv"
)

type key struct {
	a, a_bef, i int
}

var N, K, ans int

func main() {
	fmt.Scan(&N)
	reader := bufio.NewScanner(os.Stdin)
	reader.Split(bufio.ScanWords)
	m1 := make(SortBy1, N)

	for i := 0; i < N; i++ {
		reader.Scan()
		m1[i].a, _ = strconv.Atoi(reader.Text())
		m1[i].a_bef = m1[i].a
		m1[i].i = i
	}
	sort.Sort(m1)

	m1[0].a = 0
	for i := 1; i < N; i++ {
		if m1[i].a == m1[i-1].a_bef {
			m1[i].a = m1[i-1].a
		} else {
			m1[i].a = m1[i-1].a + 1
		}
	}

	m2 := make(SortBy2, N)
	copy(m2, m1)
	sort.Sort(m2)

	for _, value := range m2 {
		fmt.Println(value.a)
	}
}

/*  ----------------------------------------  */

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
func pow(x, y int) int    { return int(math.Pow(float64(x), float64(y))) }
func sqrt(x int) int      { return int(math.Sqrt(float64(x))) }
func abs(x int) int       { return int(math.Abs(float64(x))) }
func floor(x float64) int { return int(math.Floor(float64(x))) }
func ceil(x float64) int  { return int(math.Ceil(float64(x))) }

type SortBy1 []key

func (a SortBy1) Len() int           { return len(a) }
func (a SortBy1) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a SortBy1) Less(i, j int) bool { return a[i].a < a[j].a }

type SortBy2 []key

func (a SortBy2) Len() int           { return len(a) }
func (a SortBy2) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a SortBy2) Less(i, j int) bool { return a[i].i < a[j].i }
