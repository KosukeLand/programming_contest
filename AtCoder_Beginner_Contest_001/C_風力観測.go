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
var ans int

func main() {
	var ans_dis int
	var ans_deg string
	reader.Split(bufio.ScanWords)
	Deg, _ := strconv.Atoi(read())
	Dis, _ := strconv.Atoi(read())

	dis := float64(Dis) / 60
	if dis*10 != math.Floor(dis*10) {
		if dis*10-math.Floor(dis*10) < 0.5 {
			dis = math.Floor(dis*10) / 10
		} else {
			dis = math.Ceil(dis*10) / 10
		}
	}
	if 0 <= dis && dis <= 0.2 {
		ans_dis = 0
		ans_deg = "C"
	} else if 0.3 <= dis && dis <= 1.5 {
		ans_dis = 1
	} else if 1.6 <= dis && dis <= 3.3 {
		ans_dis = 2
	} else if 3.4 <= dis && dis <= 5.4 {
		ans_dis = 3
	} else if 5.5 <= dis && dis <= 7.9 {
		ans_dis = 4
	} else if 8.0 <= dis && dis <= 10.7 {
		ans_dis = 5
	} else if 10.8 <= dis && dis <= 13.8 {
		ans_dis = 6
	} else if 13.9 <= dis && dis <= 17.1 {
		ans_dis = 7
	} else if 17.2 <= dis && dis <= 20.7 {
		ans_dis = 8
	} else if 20.8 <= dis && dis <= 24.4 {
		ans_dis = 9
	} else if 24.5 <= dis && dis <= 28.4 {
		ans_dis = 10
	} else if 28.5 <= dis && dis <= 32.6 {
		ans_dis = 11
	} else {
		ans_dis = 12
	}

	deg := float64(Deg) / 10
	if ans_deg != "C" {
		if 11.25 <= deg && deg < 33.75 {
			ans_deg = "NNE"
		} else if 33.75 <= deg && deg < 56.25 {
			ans_deg = "NE"
		} else if 56.25 <= deg && deg < 78.75 {
			ans_deg = "ENE"
		} else if 78.75 <= deg && deg < 101.25 {
			ans_deg = "E"
		} else if 101.25 <= deg && deg < 123.75 {
			ans_deg = "ESE"
		} else if 123.75 <= deg && deg < 146.25 {
			ans_deg = "SE"
		} else if 146.25 <= deg && deg < 168.75 {
			ans_deg = "SSE"
		} else if 168.75 <= deg && deg < 191.25 {
			ans_deg = "S"
		} else if 191.25 <= deg && deg < 213.75 {
			ans_deg = "SSW"
		} else if 213.75 <= deg && deg < 236.25 {
			ans_deg = "SW"
		} else if 236.25 <= deg && deg < 258.75 {
			ans_deg = "WSW"
		} else if 258.75 <= deg && deg < 281.25 {
			ans_deg = "W"
		} else if 281.25 <= deg && deg < 303.75 {
			ans_deg = "WNW"
		} else if 303.75 <= deg && deg < 326.25 {
			ans_deg = "NW"
		} else if 326.25 <= deg && deg < 348.75 {
			ans_deg = "NNW"
		} else {
			ans_deg = "N"
		}
	}
	fmt.Println(ans_deg, ans_dis)
}

func binary_search_left(arr []int, target int) int {
	left, right := 0, len(arr)

	for left+1 < right {
		c := (left + right) / 2
		if arr[c] <= target {
			left = c
		} else {
			right = c
		}
	}
	return left
}

func binary_search_right(arr []int, target int) int {
	left, right := -1, len(arr)-1

	for left+1 < right {
		c := (left + right) / 2
		if target <= arr[c] {
			right = c
		} else {
			left = c
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
