package main

import "fmt"

var mod int = 1000000007
var memo []int

func main() {
	var N, M int
	fmt.Scan(&N, &M)

	memo = make([]int, N+1)
	for i := 0; i <= N; i++ {
		memo[i] = -1
	}
	for i := 0; i < M; i++ {
		var t int
		fmt.Scan(&t)
		memo[t] = 0
	}

	memo[0] = 1
	fmt.Println(dfs(N))
}

func dfs(n int) int {
	if n < 0 {
		return 0
	}
	if memo[n] != -1 {
		return memo[n]
	}

	memo[n] = (dfs(n-1) + dfs(n-2)) % mod
	return memo[n]
}
