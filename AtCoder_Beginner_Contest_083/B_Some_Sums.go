package main

import (
	"fmt"
	"strconv"
)

func main() {
	var N, A, B, ans int

	fmt.Scan(&N, &A, &B)
	for i := 1; i <= N; i++ {
		var x = strconv.Itoa(i)
		var num int
		for j := 0; j < len(x); j++ {
			str := string(x[j])
			var t, _ = strconv.Atoi(str)
			num += t
		}
		if A <= num && num <= B {
			ans += i
		}
	}
	fmt.Println(ans)
}
