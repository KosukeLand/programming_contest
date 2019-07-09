package main

import (
	"fmt"
	"math"
	"strconv"
	"strings"
)

var S string
var ans int

func main() {
	fmt.Scan(&S)
	S := strings.Split(S, "")

	for i := 0; i < pow(2, len(S)-1); i++ {
		comb := make([]int, len(S)-1)

		for j := 0; j < len(S)-1; j++ {
			if (uint(i)>>uint(j))%2 == 1 {
				comb[j] = 1
			}
		}

		var res string = S[0]
		var k int = 1
		for j := 0; j < len(comb); j++ {
			if comb[j] == 1 {
				// 足し算
				t, _ := strconv.Atoi(res)
				ans += t
				res = S[k]
			} else {
				res += S[k]
			}
			k++
		}
		if res != "" {
			t, _ := strconv.Atoi(res)
			ans += t
			res = ""
		}
	}
	fmt.Println(ans)
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
func ceil(x int) int   { return int(math.Ceil(float64(x))) }

type SortBy []int

func (a SortBy) Len() int           { return len(a) }
func (a SortBy) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool { return a[i] > a[j] }
